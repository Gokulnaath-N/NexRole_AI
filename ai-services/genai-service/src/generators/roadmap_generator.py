from __future__ import annotations

import json
import logging
import re
from typing import Dict, List

import google.generativeai as genai
from groq import Groq

from ..config import config


logger = logging.getLogger(__name__)

genai.configure(api_key=config.GEMINI_API_KEY)
groq_client = Groq(api_key=config.GROQ_API_KEY)


ROADMAP_PROMPT = """You are a senior AI career coach in India.
Generate a detailed personalized learning roadmap.

Target Role: {target_role}
Company Type: {company_type}
Experience Level: {experience_level}
Available Hours/Week: {weekly_hours}
Current Skills: {current_skills}
Primary Domain: {domain}

Company Type Guide:
PRODUCT: Google/Meta/OpenAI — focus: system design,
  research depth, open source contribution, scale
SERVICE: TCS/Infosys/Wipro — focus: certifications,
  client delivery, cost optimization, documentation
STARTUP: focus: full-stack AI, speed, MVP building,
  wearing multiple hats, business impact
FREELANCE: focus: portfolio projects, niche expertise,
  LinkedIn visibility, client pitches

Estimate realistic duration:
BEGINNER + <5hrs/week = 90 days
BEGINNER + 5-10hrs/week = 75 days
INTERMEDIATE + any = 45-60 days
ADVANCED + any = 30 days

Return ONLY this JSON:
{{
  "title": "90-Day {target_role} Roadmap for {company_type}",
  "overview": "2 sentences on what this roadmap achieves",
  "duration_days": 90,
  "weekly_hours": {weekly_hours},
  "total_weeks": 13,
  "weeks": [
    {{
      "week_number": 1,
      "theme": "Week theme title",
      "goals": [
        "Specific measurable goal 1",
        "Specific measurable goal 2",
        "Specific measurable goal 3"
      ],
      "modules_to_complete": ["Module title 1", "Module title 2"],
      "project": "Small hands-on project for this week",
      "estimated_hours": {weekly_hours},
      "resources": [
        "Specific resource (paper/repo/doc) to read"
      ]
    }}
  ],
  "milestones": [
    {{"week": 4, "achievement": "First deployed AI app", "badge": "🚀"}},
    {{"week": 8, "achievement": "Production-grade project complete", "badge": "⚡"}},
    {{"week": 13, "achievement": "Interview-ready portfolio", "badge": "🏆"}}
  ],
  "career_outcome": "What the learner can do after this roadmap",
  "salary_range": "₹XL - ₹YL (realistic Indian market range)"
}}

Generate ALL weeks. Make goals specific, not generic."""


def _strip_code_fences(text: str) -> str:
    cleaned = text.strip()
    cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"\s*```$", "", cleaned)
    return cleaned.strip().strip("`").strip()


def _parse_json(text: str):
    return json.loads(_strip_code_fences(text))


def generate_roadmap(
    target_role: str,
    company_type: str,
    experience_level: str,
    weekly_hours: int,
    current_skills: List[str],
    domain: str,
) -> Dict:
    prompt = ROADMAP_PROMPT.format(
        target_role=target_role,
        company_type=company_type,
        experience_level=experience_level,
        weekly_hours=weekly_hours,
        current_skills=", ".join(current_skills) or "None yet",
        domain=domain,
    )

    try:
        model_big = genai.GenerativeModel(
            config.GEMINI_MODEL,
            generation_config=genai.GenerationConfig(
                temperature=config.TEMPERATURE,
                max_output_tokens=config.MAX_TOKENS_ROADMAP,
                response_mime_type="application/json",
            ),
        )
        response = model_big.generate_content(prompt)
        return _parse_json(response.text)
    except Exception as exc:
        logger.warning("Gemini roadmap generation failed: %s. Trying Groq.", exc)
        completion = groq_client.chat.completions.create(
            model=config.GROQ_MODEL,
            messages=[
                {"role": "system", "content": "Return only valid JSON. No markdown."},
                {"role": "user", "content": prompt},
            ],
            temperature=config.TEMPERATURE,
            max_tokens=config.MAX_TOKENS_ROADMAP,
        )
        raw = completion.choices[0].message.content or "{}"
        return _parse_json(raw)
