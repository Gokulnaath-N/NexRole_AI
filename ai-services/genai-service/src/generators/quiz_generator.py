from __future__ import annotations

import json
import logging
import re
from typing import Dict, List

import google.generativeai as genai
from groq import Groq
from tenacity import retry, stop_after_attempt, wait_exponential

from ..config import config


logger = logging.getLogger(__name__)

genai.configure(api_key=config.GEMINI_API_KEY)

gemini = genai.GenerativeModel(
    config.GEMINI_MODEL,
    generation_config=genai.GenerationConfig(
        temperature=config.TEMPERATURE,
        max_output_tokens=config.MAX_TOKENS_DEFAULT,
    ),
)

groq_client = Groq(api_key=config.GROQ_API_KEY)


QUIZ_PROMPT = """You are an expert technical quiz creator for
an AI learning platform. Create exactly {count} high-quality
multiple choice questions about: {topic}

Module content context:
{content}

Rules:
- Questions must test genuine understanding, not memorization
- Each question must have EXACTLY 4 options
- Only ONE option is correct
- Wrong options must be plausible (not obviously wrong)
- Explanation must clarify WHY the correct answer is right
- Mix difficulty: {easy_count} EASY, {medium_count} MEDIUM,
  {hard_count} HARD
- Do NOT repeat similar questions
- Questions must be relevant to the module content

Return ONLY a JSON array, no markdown:
[
  {{
    "question": "What is...",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": 0,
    "explanation": "Option A is correct because...",
    "difficulty": "EASY"
  }}
]"""


def _strip_code_fences(text: str) -> str:
    cleaned = text.strip()
    cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"\s*```$", "", cleaned)
    return cleaned.strip().strip("`").strip()


def _parse_json(text: str):
    cleaned = _strip_code_fences(text)
    return json.loads(cleaned)


def _validate_questions(questions: List[Dict]) -> List[Dict]:
    valid = []
    for question in questions or []:
        if not isinstance(question, dict):
            continue
        options = question.get("options", [])
        if (
            isinstance(question.get("question"), str)
            and isinstance(options, list)
            and len(options) == 4
            and all(isinstance(option, str) for option in options)
            and isinstance(question.get("correctAnswer"), int)
            and 0 <= int(question["correctAnswer"]) <= 3
            and isinstance(question.get("explanation"), str)
            and question.get("difficulty") in ["EASY", "MEDIUM", "HARD"]
        ):
            valid.append(question)
    return valid


@retry(stop=stop_after_attempt(3), wait=wait_exponential(min=2, max=10), reraise=True)
def _generate_quiz_with_gemini_raw(prompt: str):
    response = gemini.generate_content(prompt)
    return response.text


def generate_quiz_with_gemini(topic: str, content: str, count: int = 5) -> List[Dict]:
    easy = max(1, count // 3)
    hard = max(1, count // 3)
    medium = count - easy - hard

    prompt = QUIZ_PROMPT.format(
        count=count,
        topic=topic,
        content=content[:2000],
        easy_count=easy,
        medium_count=medium,
        hard_count=hard,
    )

    try:
        raw = _generate_quiz_with_gemini_raw(prompt)
        questions = _parse_json(raw)
        validated = _validate_questions(questions)
        if len(validated) < max(1, count // 2):
            raise ValueError(f"Too few valid questions: {len(validated)}")
        return validated[:count]
    except Exception as exc:
        logger.warning("Gemini quiz gen failed: %s. Trying Groq.", exc)

        completion = groq_client.chat.completions.create(
            model=config.GROQ_MODEL,
            messages=[
                {
                    "role": "system",
                    "content": "Return only valid JSON arrays. No markdown.",
                },
                {"role": "user", "content": prompt},
            ],
            temperature=config.TEMPERATURE,
            max_tokens=config.MAX_TOKENS_DEFAULT,
        )
        raw = completion.choices[0].message.content or "[]"
        questions = _parse_json(raw)
        return _validate_questions(questions)[:count]
