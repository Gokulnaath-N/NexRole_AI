import io
import logging
from typing import Any, Dict, List, Optional, Union

from fastapi import APIRouter, File, HTTPException, UploadFile
from pydantic import BaseModel, Field
from PyPDF2 import PdfReader

from ..config import config
from ..extractors.semantic_search import search_engine
from ..parsers.jd_parser import analyze_skill_gap, parse_job_description
from ..parsers.resume_parser import parse_resume


logger = logging.getLogger(__name__)
router = APIRouter()


class JDRequest(BaseModel):
    jd_text: str = Field(..., min_length=1)
    user_skills: Optional[List[str]] = None


class SearchRequest(BaseModel):
    query: str = Field(..., min_length=1)
    documents: List[Union[Dict[str, Any], str]]
    top_k: int = Field(default=5, ge=1, le=20)
    threshold: float = Field(default=0.25, ge=0.0, le=1.0)


@router.post("/resume/parse")
async def parse_resume_file(file: UploadFile = File(...)):
    if not file.filename or not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are supported")

    content = await file.read()
    max_bytes = config.MAX_UPLOAD_MB * 1024 * 1024
    if len(content) > max_bytes:
        raise HTTPException(
            status_code=400,
            detail=f"File too large (max {config.MAX_UPLOAD_MB}MB)",
        )

    try:
        reader = PdfReader(io.BytesIO(content))
        text = "\n".join(page.extract_text() or "" for page in reader.pages)
    except Exception as exc:
        logger.warning("PDF parsing failed: %s", exc)
        raise HTTPException(
            status_code=400,
            detail="Could not read PDF file",
        ) from exc

    if len(text.strip()) < 50:
        raise HTTPException(
            status_code=400,
            detail="Could not extract text from PDF",
        )

    result = parse_resume(text)
    return {"success": True, "data": result}


@router.post("/jd/parse")
async def parse_jd(req: JDRequest):
    if len(req.jd_text.strip()) < 50:
        raise HTTPException(status_code=400, detail="JD text too short")

    result = parse_job_description(req.jd_text)
    return {"success": True, "data": result}


@router.post("/skill-gap")
async def skill_gap(req: JDRequest):
    if len(req.jd_text.strip()) < 50:
        raise HTTPException(status_code=400, detail="JD text too short")
    if not req.user_skills:
        raise HTTPException(status_code=400, detail="user_skills required")

    result = analyze_skill_gap(req.user_skills, req.jd_text)
    return {"success": True, "data": result}


@router.post("/search/semantic")
async def semantic_search(req: SearchRequest):
    if not req.query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    results = search_engine.search(
        query=req.query.strip(),
        documents=req.documents,
        top_k=req.top_k,
        threshold=req.threshold,
    )
    return {
        "success": True,
        "data": {
            "results": results,
            "query": req.query,
        },
    }
