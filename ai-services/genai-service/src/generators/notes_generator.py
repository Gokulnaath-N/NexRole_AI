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

generation_config=genai.GenerationConfig(
    temperature=config.TEMPERATURE,
    max_output_tokens=config.MAX_TOKENS_DEFAULT,
    
)

groq_client = Groq(api_key=config.GROQ_API_KEY)


NOTES_PROMPT = """You are a world-class technical educator.
Create comprehensive yet clear study notes for this AI module.

Module: {title}
Learner Level: {level}
Content: {content}

Generate notes in this exact JSON structure:
{{
  "title": "{title} — Study Notes",
  "summary": "2-3 sentence overview of the module",
  "key_concepts": [
    {{
      "concept": "Concept Name",
      "explanation": "Clear 2-sentence explanation",
      "analogy": "Real-world analogy to make it memorable",
      "example": "Concrete technical example"
    }}
  ],
  "important_points": [
    "Key takeaway 1",
    "Key takeaway 2",
    "Key takeaway 3",
    "Key takeaway 4",
    "Key takeaway 5"
  ],
  "common_mistakes": [
    "Mistake learners often make + how to avoid it"
  ],
  "interview_tips": [
    "How this concept appears in technical interviews"
  ],
  "quick_revision": "10-word summary for quick recall",
  "further_reading": [
    "What to explore next"
  ]
}}

For BEGINNER: Use simple language, more analogies.
For ADVANCED: Include nuances, trade-offs, production considerations.
Return ONLY the JSON."""


def _strip_code_fences(text: str) -> str:
    cleaned = text.strip()
    cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"\s*```$", "", cleaned)
    return cleaned.strip().strip("`").strip()


def _parse_json(text: str):
    return json.loads(_strip_code_fences(text))


def generate_study_notes(title: str, content: str, level: str = "INTERMEDIATE") -> Dict:
    prompt = NOTES_PROMPT.format(title=title, content=content[:3000], level=level)
    try:
        response = gemini.generate_content(prompt)
        return _parse_json(response.text)
    except Exception as exc:
        logger.warning("Gemini notes generation failed: %s. Trying Groq.", exc)
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
        return _parse_json(raw)
