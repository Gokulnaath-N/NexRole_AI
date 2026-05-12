from __future__ import annotations

import json
import logging
import re
from typing import Dict

import google.generativeai as genai
from groq import Groq

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


EVAL_PROMPT = """You are a strict but fair technical interviewer
at a top tech company in India (think Google, Flipkart, PhonePe).

Role: {role}
Question: {question}
Candidate Answer: {answer}
Answer word count: {word_count}

Evaluate strictly on these dimensions (0-10 each):
1. technicalAccuracy: Is the content factually correct and deep?
2. clarity: Is it well-structured and easy to follow?
3. completeness: Does it cover all aspects?
4. starFormat: (behavioral only) Situation-Task-Action-Result used?

Scoring guide:
9-10: Would impress a Senior engineer at FAANG
7-8: Solid answer, would pass most interviews
5-6: Adequate but misses depth
3-4: Surface level, needs work
0-2: Incorrect or too brief

Return ONLY this JSON:
{{
  "verdict": "STRONG|GOOD|NEEDS_WORK|POOR",
  "overall_score": 7.5,
  "scores": {{
    "technical_accuracy": 8,
    "clarity": 7,
    "completeness": 6,
    "star_format": 5
  }},
  "strengths": [
    "Specific strength 1 from the answer",
    "Specific strength 2",
    "Specific strength 3"
  ],
  "improvements": [
    "Specific missing point 1",
    "Specific missing point 2",
    "Specific missing point 3"
  ],
  "model_answer": "A 150-200 word model answer for this exact question, written as if by a senior engineer.",
  "follow_up_question": "A natural follow-up question an interviewer would ask based on this answer"
}}"""


def _strip_code_fences(text: str) -> str:
    cleaned = text.strip()
    cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"\s*```$", "", cleaned)
    return cleaned.strip().strip("`").strip()


def _parse_json(text: str):
    return json.loads(_strip_code_fences(text))


def evaluate_interview_answer(
    question: str,
    answer: str,
    role: str,
    category: str = "TECHNICAL",
) -> Dict:
    if len(answer.split()) < 20:
        return {
            "verdict": "POOR",
            "overall_score": 1.0,
            "scores": {
                "technical_accuracy": 1,
                "clarity": 1,
                "completeness": 1,
                "star_format": 1,
            },
            "strengths": [],
            "improvements": ["Answer is too short — aim for 150+ words"],
            "model_answer": "",
            "follow_up_question": "",
        }

    prompt = EVAL_PROMPT.format(
        role=role,
        question=question,
        answer=answer,
        word_count=len(answer.split()),
    )

    try:
        response = gemini.generate_content(prompt)
        result = _parse_json(response.text)
    except Exception as exc:
        logger.warning("Gemini evaluation failed: %s. Trying Groq.", exc)
        completion = groq_client.chat.completions.create(
            model=config.GROQ_MODEL,
            messages=[
                {"role": "system", "content": "Return only valid JSON. No markdown."},
                {"role": "user", "content": prompt},
            ],
            temperature=config.TEMPERATURE,
            max_tokens=config.MAX_TOKENS_DEFAULT,
        )
        raw = completion.choices[0].message.content or "{}"
        result = _parse_json(raw)

    if "overall_score" not in result:
        scores = result.get("scores", {})
        numeric_scores = []
        for value in scores.values():
            try:
                numeric_scores.append(float(value))
            except Exception:
                continue
        if numeric_scores:
            result["overall_score"] = round(sum(numeric_scores) / len(numeric_scores), 1)

    result.setdefault("category", category)
    return result
