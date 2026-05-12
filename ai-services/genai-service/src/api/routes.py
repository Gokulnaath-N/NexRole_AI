from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from typing import List

from ..generators.quiz_generator import generate_quiz_with_gemini
from ..generators.notes_generator import generate_study_notes
from ..generators.roadmap_generator import generate_roadmap
from ..generators.interview_evaluator import evaluate_interview_answer


router = APIRouter()


class QuizRequest(BaseModel):
    topic: str = Field(..., min_length=1, max_length=200)
    content: str = Field(..., min_length=1, max_length=20000)
    count: int = Field(default=5, ge=1, le=25)


class NotesRequest(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    content: str = Field(..., min_length=1, max_length=50000)
    level: str = Field(default="INTERMEDIATE")


class RoadmapRequest(BaseModel):
    target_role: str = Field(..., min_length=1, max_length=120)
    company_type: str = Field(..., min_length=1, max_length=40)
    experience_level: str = Field(..., min_length=1, max_length=40)
    weekly_hours: int = Field(..., ge=1, le=60)
    current_skills: List[str] = []
    domain: str = Field(..., min_length=1, max_length=120)


class EvalRequest(BaseModel):
    question: str = Field(..., min_length=1, max_length=2000)
    answer: str = Field(..., min_length=1, max_length=12000)
    role: str = Field(..., min_length=1, max_length=120)
    category: str = Field(default="TECHNICAL")


@router.post("/quiz/generate")
async def gen_quiz(req: QuizRequest):
    try:
        questions = generate_quiz_with_gemini(req.topic, req.content, req.count)
        return {"success": True, "data": {"questions": questions, "count": len(questions)}}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))


@router.post("/notes/generate")
async def gen_notes(req: NotesRequest):
    try:
        notes = generate_study_notes(req.title, req.content, req.level)
        return {"success": True, "data": notes}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))


@router.post("/roadmap/generate")
async def gen_roadmap(req: RoadmapRequest):
    try:
        roadmap = generate_roadmap(
            req.target_role,
            req.company_type,
            req.experience_level,
            req.weekly_hours,
            req.current_skills,
            req.domain,
        )
        return {"success": True, "data": roadmap}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))


@router.post("/interview/evaluate")
async def eval_answer(req: EvalRequest):
    try:
        result = evaluate_interview_answer(req.question, req.answer, req.role, req.category)
        return {"success": True, "data": result}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))
