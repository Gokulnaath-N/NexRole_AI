from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from typing import List

from ..learning_path_agent.graph import learning_path_graph
from ..learning_path_agent.state import LearningPathState
from ..engagement_agent.agent import calculate_dropout_risk, generate_reengagement_message


router = APIRouter()


class RoadmapAgentRequest(BaseModel):
    user_id: str = Field(..., min_length=1)
    target_role: str = Field(..., min_length=1)
    company_type: str = Field(..., min_length=1)
    experience_level: str = Field(..., min_length=1)
    weekly_hours: int = Field(..., ge=1, le=60)
    current_skills: List[str] = []
    domain_slug: str = Field(..., min_length=1)


class EngagementRequest(BaseModel):
    user_id: str = Field(..., min_length=1)
    user_name: str = Field(..., min_length=1)
    target_role: str = Field(..., min_length=1)
    last_active_days_ago: int = Field(..., ge=0, le=365)
    streak: int = Field(..., ge=0, le=3650)
    completion_rate: float = Field(..., ge=0, le=100)
    enrolled_domains: int = Field(..., ge=0, le=100)
    modules_completed: int = Field(..., ge=0, le=10000)
    current_domain: str = Field(default="Generative AI Engineering")


@router.post("/learning-path/generate")
async def generate_learning_path(req: RoadmapAgentRequest):
    initial_state: LearningPathState = {
        "user_id": req.user_id,
        "target_role": req.target_role,
        "company_type": req.company_type,
        "experience_level": req.experience_level,
        "weekly_hours": req.weekly_hours,
        "current_skills": req.current_skills,
        "domain_slug": req.domain_slug,
        "messages": [],
        "domain_info": None,
        "skill_gap": None,
        "generated_roadmap": None,
        "error": None,
        "final_roadmap": None,
        "status": "starting",
    }

    try:
        final_state = await learning_path_graph.ainvoke(initial_state)

        if final_state.get("status") == "failed":
            raise HTTPException(status_code=500, detail=final_state.get("error") or "Agent failed")

        return {
            "success": True,
            "data": {
                "roadmap": final_state.get("final_roadmap"),
                "skill_gap": final_state.get("skill_gap"),
                "user_id": req.user_id,
            },
        }
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))


@router.post("/engagement/assess")
async def assess_engagement(req: EngagementRequest):
    user_data = req.model_dump()
    risk = calculate_dropout_risk(user_data)

    result = {"risk": risk}

    if risk.get("should_engage"):
        message = generate_reengagement_message(req.user_name, user_data, risk)
        result["reengagement_message"] = message

    return {"success": True, "data": result}
