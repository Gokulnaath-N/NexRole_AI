import re
from typing import Dict, List

from .resume_parser import extract_experience_years, extract_skills


def _extract_section(text_lower: str, start_terms: List[str], end_terms: List[str]) -> str:
    start = "|".join(re.escape(term) for term in start_terms)
    end = "|".join(re.escape(term) for term in end_terms)
    match = re.search(
        rf"(?:{start})\s*[:\-]?\s*(.*?)(?:{end}|$)",
        text_lower,
        re.DOTALL,
    )
    return match.group(1) if match else ""


def parse_job_description(jd_text: str) -> Dict:
    """Extract the skills and seniority signals a company is asking for."""
    all_skills = extract_skills(jd_text)
    years_required = extract_experience_years(jd_text)
    text_lower = jd_text.lower()

    if any(word in text_lower for word in ["senior", "lead", "principal", "staff"]):
        seniority = "SENIOR"
    elif any(word in text_lower for word in ["junior", "entry", "fresher", "graduate"]):
        seniority = "JUNIOR"
    else:
        seniority = "MID"

    required_text = _extract_section(
        text_lower,
        [
            "required",
            "requirements",
            "must have",
            "must-have",
            "what you need",
            "minimum qualifications",
        ],
        [
            "preferred",
            "nice to have",
            "nice-to-have",
            "bonus",
            "good to have",
            "responsibilities",
            "about the role",
        ],
    )
    preferred_text = _extract_section(
        text_lower,
        [
            "preferred",
            "nice to have",
            "nice-to-have",
            "bonus",
            "good to have",
            "preferred qualifications",
        ],
        [
            "required",
            "requirements",
            "responsibilities",
            "about the role",
            "benefits",
        ],
    )

    required = extract_skills(required_text) if required_text else []
    preferred = extract_skills(preferred_text) if preferred_text else []

    if not required:
        required = all_skills

    return {
        "required_skills": sorted(set(required)),
        "preferred_skills": sorted(set(preferred)),
        "all_skills": sorted(set(all_skills)),
        "years_required": years_required,
        "seniority": seniority,
    }


def analyze_skill_gap(user_skills: List[str], jd_text: str) -> Dict:
    """Compare learner skills against a JD and produce readiness signals."""
    jd_data = parse_job_description(jd_text)
    required = {skill.lower() for skill in jd_data["required_skills"]}
    user = {skill.lower() for skill in user_skills}

    matched = sorted(required & user)
    missing = sorted(required - user)
    partial = []

    for req_skill in missing[:]:
        for user_skill in user:
            if len(req_skill) > 3 and (
                req_skill in user_skill or user_skill in req_skill
            ):
                partial.append(req_skill)
                missing.remove(req_skill)
                break

    match_pct = (
        (len(matched) + len(partial) * 0.5)
        / max(len(required), 1)
        * 100
    )

    dimensions = {
        "ML Fundamentals": [
            "python",
            "scikit-learn",
            "numpy",
            "pandas",
            "machine learning",
        ],
        "GenAI/LLMs": [
            "langchain",
            "openai",
            "gemini",
            "rag",
            "fine-tuning",
            "llama",
        ],
        "MLOps": ["mlflow", "docker", "kubernetes", "kubeflow", "ci/cd"],
        "Cloud": ["aws", "azure", "gcp", "sagemaker", "vertex ai"],
        "Coding": ["python", "javascript", "typescript", "sql", "git"],
        "Domain Knowledge": [
            "nlp",
            "computer vision",
            "transformers",
            "bert",
            "pytorch",
        ],
    }

    radar_data = []
    for dim_name, dim_skills in dimensions.items():
        user_score = sum(1 for skill in dim_skills if skill in user)
        req_score = sum(1 for skill in dim_skills if skill in required)
        radar_data.append(
            {
                "axis": dim_name,
                "userScore": round(user_score / len(dim_skills) * 10, 1),
                "requiredScore": round(req_score / len(dim_skills) * 10, 1),
            }
        )

    return {
        "matched_skills": matched,
        "missing_skills": missing,
        "partial_match": sorted(partial),
        "match_percentage": round(match_pct, 1),
        "radar_data": radar_data,
        "jd_analysis": jd_data,
    }
