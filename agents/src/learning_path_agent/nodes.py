import logging

import httpx

from .state import LearningPathState
from ..config import config


logger = logging.getLogger(__name__)

GENAI_URL = config.GENAI_SERVICE_URL
NLP_URL = config.NLP_SERVICE_URL


async def fetch_domain_info(state: LearningPathState) -> LearningPathState:
    """Node 1: Fetch domain info from backend."""
    try:
        async with httpx.AsyncClient(timeout=30) as client:
            response = await client.get(
                f"{config.BACKEND_URL}/api/v1/domains/{state['domain_slug']}"
            )
            if response.status_code == 200:
                body = response.json()
                state["domain_info"] = body.get("data") or body
            else:
                state["domain_info"] = {"slug": state["domain_slug"]}
    except Exception as exc:
        logger.warning("Could not fetch domain info: %s", exc)
        state["domain_info"] = {"slug": state["domain_slug"]}

    state["status"] = "running"
    return state


async def analyze_skill_gap(state: LearningPathState) -> LearningPathState:
    """Node 2: Analyze gap between user skills and role requirements."""
    try:
        role_requirements = {
            "genai engineer": "python langchain openai rag fine-tuning chromadb transformers bert",
            "mlops engineer": "mlflow docker kubernetes python ci/cd model monitoring airflow",
            "data engineer": "python sql spark kafka airflow postgresql dbt feature engineering",
        }
        role_key = state["target_role"].lower()
        jd_text = role_requirements.get(
            role_key,
            f"python machine learning {state['target_role']} deep learning",
        )

        async with httpx.AsyncClient(timeout=30) as client:
            response = await client.post(
                f"{NLP_URL}/api/nlp/skill-gap",
                json={"jd_text": jd_text, "user_skills": state["current_skills"]},
            )
            if response.status_code == 200:
                state["skill_gap"] = response.json().get("data")
            else:
                state["skill_gap"] = {"missing_skills": [], "match_percentage": 0}
    except Exception as exc:
        logger.warning("Skill gap analysis failed: %s", exc)
        state["skill_gap"] = {"missing_skills": [], "match_percentage": 0}

    return state


async def generate_roadmap(state: LearningPathState) -> LearningPathState:
    """Node 3: Generate the personalized roadmap using GenAI service."""
    try:
        async with httpx.AsyncClient(timeout=120) as client:
            response = await client.post(
                f"{GENAI_URL}/api/genai/roadmap/generate",
                json={
                    "target_role": state["target_role"],
                    "company_type": state["company_type"],
                    "experience_level": state["experience_level"],
                    "weekly_hours": state["weekly_hours"],
                    "current_skills": state["current_skills"],
                    "domain": state["domain_slug"],
                },
            )
            if response.status_code == 200:
                state["generated_roadmap"] = response.json().get("data")
                state["status"] = "complete"
            else:
                state["error"] = "Roadmap generation failed"
                state["status"] = "failed"
    except Exception as exc:
        state["error"] = str(exc)
        state["status"] = "failed"
    return state


async def finalize_roadmap(state: LearningPathState) -> LearningPathState:
    """Node 4: Enrich roadmap with skill gap insights."""
    if state.get("generated_roadmap") and state.get("skill_gap"):
        roadmap = state["generated_roadmap"]
        gap = state["skill_gap"] or {}

        roadmap["skill_gap_summary"] = {
            "current_match": gap.get("match_percentage", 0),
            "key_missing_skills": (gap.get("missing_skills") or [])[:5],
            "focus_areas": gap.get("radar_data", []),
        }
        state["final_roadmap"] = roadmap
    else:
        state["final_roadmap"] = state.get("generated_roadmap")

    return state


def should_continue(state: LearningPathState) -> str:
    """Conditional edge: continue or stop on error."""
    if state.get("status") == "failed":
        return "end"
    return "continue"
