import json
import logging
import re
from datetime import datetime
from pathlib import Path
from typing import Dict, List

import spacy

from ..config import config


logger = logging.getLogger(__name__)

try:
    nlp = spacy.load(config.SPACY_MODEL)
    logger.info("spaCy model loaded: %s", config.SPACY_MODEL)
except OSError:
    logger.error(
        "spaCy model '%s' not found. Run: python -m spacy download %s",
        config.SPACY_MODEL,
        config.SPACY_MODEL,
    )
    nlp = None


TAXONOMY_PATH = Path(__file__).parent.parent / "data" / "skills_taxonomy.json"
with open(TAXONOMY_PATH, encoding="utf-8") as f:
    SKILLS_TAXONOMY = json.load(f)


def _flatten_skills() -> List[str]:
    skills = []
    for category_skills in SKILLS_TAXONOMY.values():
        skills.extend(category_skills)
    return sorted(set(skills), key=lambda value: (-len(value), value))


ALL_SKILLS = _flatten_skills()


def _skill_regex(skill: str) -> re.Pattern:
    escaped = re.escape(skill.lower())
    return re.compile(
        rf"(?<![a-z0-9+#.\-/]){escaped}(?![a-z0-9+#.\-/])",
        re.IGNORECASE,
    )


SKILL_PATTERNS = {skill: _skill_regex(skill) for skill in ALL_SKILLS}


def extract_skills(text: str) -> List[str]:
    """Extract taxonomy skills from free text."""
    text_lower = text.lower()
    found = [
        skill
        for skill, pattern in SKILL_PATTERNS.items()
        if pattern.search(text_lower)
    ]
    return sorted(set(found))


def extract_experience_years(text: str) -> int:
    """Extract the strongest years-of-experience signal from text."""
    current_year = datetime.now().year
    text_lower = text.lower()
    patterns = [
        r"(\d+)\+?\s*years?\s*of\s*(?:work\s*)?experience",
        r"(\d+)\+?\s*yrs?\s*(?:of\s*)?experience",
        r"experience\s*(?:of\s*)?(\d+)\+?\s*years?",
        r"(\d{4})\s*[-–]\s*(?:present|current|now)",
        r"since\s*(\d{4})",
    ]

    years_found = []
    for pattern in patterns:
        for match in re.findall(pattern, text_lower):
            try:
                value = int(match)
            except ValueError:
                continue

            if 2000 <= value <= current_year:
                years_found.append(current_year - value)
            elif 0 < value < 40:
                years_found.append(value)

    for start, end in re.findall(r"(\d{4})\s*[-–]\s*(\d{4})", text_lower):
        start_year = int(start)
        end_year = int(end)
        if 2000 <= start_year <= end_year <= current_year:
            years_found.append(end_year - start_year)

    return max(years_found) if years_found else 0


def extract_education(text: str) -> List[str]:
    """Extract likely education snippets."""
    edu_patterns = [
        r"b\.?tech|bachelor\s*of\s*technology",
        r"m\.?tech|master\s*of\s*technology",
        r"b\.?e\.?|bachelor\s*of\s*engineering",
        r"b\.?sc|bachelor\s*of\s*science",
        r"m\.?sc|master\s*of\s*science",
        r"ph\.?d|doctor",
        r"mba|master\s*of\s*business",
        r"bachelor|master|university|college|institute",
    ]
    education = []

    if nlp:
        doc = nlp(text[:4000])
        sentences = [sent.text.strip() for sent in doc.sents]
    else:
        sentences = [
            part.strip()
            for part in re.split(r"[\n.]", text[:4000])
            if part.strip()
        ]

    for sentence in sentences:
        sent_lower = sentence.lower()
        if any(re.search(pattern, sent_lower) for pattern in edu_patterns):
            clean = re.sub(r"\s+", " ", sentence).strip()[:200]
            if clean and clean not in education:
                education.append(clean)

    return education[:3]


def extract_contact(text: str) -> Dict[str, str]:
    """Extract basic contact fields from resume text."""
    result = {"name": "", "email": ""}

    email_match = re.search(
        r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b",
        text,
    )
    if email_match:
        result["email"] = email_match.group()

    if nlp:
        doc = nlp(text[:700])
        for ent in doc.ents:
            if ent.label_ == "PERSON" and not result["name"]:
                result["name"] = ent.text.strip()
                break

    if not result["name"]:
        for line in text.splitlines()[:8]:
            cleaned = re.sub(r"\s+", " ", line).strip(" -|")
            if not cleaned:
                continue
            if "@" in cleaned or re.search(r"\d{3,}", cleaned):
                continue
            if cleaned.lower() in {"resume", "curriculum vitae", "cv"}:
                continue
            if len(cleaned.split()) <= 5:
                result["name"] = cleaned
                break

    return result


def determine_level(skills: List[str], years: int) -> str:
    """Determine experience level from skills and years."""
    advanced_skills = {
        "kubernetes",
        "mlflow",
        "kubeflow",
        "rag",
        "fine-tuning",
        "langgraph",
        "langraph",
        "distributed training",
        "model deployment",
        "ai agents",
    }
    skill_set = {skill.lower() for skill in skills}
    has_advanced = bool(advanced_skills & skill_set)

    if years >= 3 or (len(skills) >= 12 and has_advanced):
        return "ADVANCED"
    if years >= 1 or len(skills) >= 6:
        return "INTERMEDIATE"
    return "BEGINNER"


def parse_resume(text: str) -> Dict:
    """Parse resume text into career-intelligence signals."""
    skills = extract_skills(text)
    years = extract_experience_years(text)
    education = extract_education(text)
    contact = extract_contact(text)
    level = determine_level(skills, years)

    categorized = {}
    skill_set = set(skills)
    for category, cat_skills in SKILLS_TAXONOMY.items():
        found_in_cat = sorted(skill for skill in cat_skills if skill in skill_set)
        if found_in_cat:
            categorized[category] = found_in_cat

    return {
        "name": contact["name"],
        "email": contact["email"],
        "skills": skills,
        "skills_categorized": categorized,
        "experience_years": years,
        "education": education,
        "suggested_level": level,
        "skills_count": len(skills),
        "summary": (
            f"Found {len(skills)} skills across "
            f"{len(categorized)} categories. "
            f"Estimated {years} years experience."
        ),
    }
