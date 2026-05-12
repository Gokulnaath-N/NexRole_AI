"""
FILE 8: src/api/routes.py
─────────────────────────────────────────
FastAPI routes for the RAG Tutor Service.

Endpoints:
  POST /api/tutor/chat          — Ask the AI tutor a question
  POST /api/tutor/index         — Index module content (background)
  DELETE /api/tutor/session/{id} — Clear session memory
  DELETE /api/tutor/module       — Remove indexed module chunks
  GET  /api/tutor/stats/{slug}  — Domain vector store stats
"""

from fastapi import APIRouter, HTTPException, BackgroundTasks
from pydantic import BaseModel, Field
from typing import Optional
from ..chains.tutor_chain import tutor_chain
from ..vectorstore.chroma_store import vector_store_manager
import uuid
import logging

logger = logging.getLogger(__name__)

router = APIRouter()


# ── Request / Response Models ────────────────────────────────────

class ChatRequest(BaseModel):
    """Learner sends a question to the AI tutor."""
    session_id: Optional[str] = Field(
        None,
        description="Existing session ID for conversation continuity. "
                    "Omit to start a new session.",
    )
    domain_slug: str = Field(
        ..., description="Domain to search (e.g. 'generative-ai')"
    )
    question: str = Field(
        ..., min_length=1, max_length=2000,
        description="The learner's question (max 2000 chars)",
    )
    module_id: Optional[str] = Field(
        None,
        description="Optional module filter to scope retrieval",
    )


class IndexRequest(BaseModel):
    """Backend sends module content to be indexed."""
    domain_slug: str = Field(..., description="Domain slug")
    module_id: str = Field(..., description="Unique module identifier")
    module_title: str = Field(..., description="Human-readable module title")
    content: str = Field(
        ..., min_length=10,
        description="Full module content to chunk and index",
    )


class DeleteModuleRequest(BaseModel):
    """Remove a module's chunks from the vector store."""
    domain_slug: str
    module_id: str


# ── Chat Endpoint ────────────────────────────────────────────────

@router.post("/chat")
async def chat(req: ChatRequest):
    """
    AI Tutor chat — the core user-facing endpoint.

    Flow:
    1. Validate input
    2. Generate or reuse session_id
    3. Run full RAG pipeline (retrieve → prompt → LLM)
    4. Return answer + source citations
    """
    if not req.question.strip():
        raise HTTPException(
            status_code=400, detail="Question cannot be empty"
        )

    session_id = req.session_id or str(uuid.uuid4())

    try:
        result = tutor_chain.chat(
            session_id=session_id,
            domain_slug=req.domain_slug,
            question=req.question.strip(),
            module_id=req.module_id,
        )
        return {"success": True, "data": result}

    except Exception as e:
        logger.error(f"Chat endpoint error: {e}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail=f"Tutor error: {str(e)}",
        )


# ── Indexing Endpoint ────────────────────────────────────────────

@router.post("/index")
async def index_module(req: IndexRequest, bg: BackgroundTasks):
    """
    Index module content into ChromaDB.
    Called by the Node.js backend when a module is published or updated.
    Runs in a background task so the response is instant.
    """
    if not req.content.strip():
        raise HTTPException(
            status_code=400, detail="Content cannot be empty"
        )

    def do_index():
        try:
            result = vector_store_manager.index_module(
                domain_slug=req.domain_slug,
                module_id=req.module_id,
                module_title=req.module_title,
                content=req.content,
            )
            logger.info(
                f"✅ Indexed module '{req.module_title}' "
                f"({result['chunks_indexed']} chunks)"
            )
        except Exception as e:
            logger.error(f"Background indexing failed: {e}")

    bg.add_task(do_index)

    return {
        "success": True,
        "message": "Indexing started in background",
        "module_id": req.module_id,
        "domain": req.domain_slug,
    }


# ── Session Management ──────────────────────────────────────────

@router.delete("/session/{session_id}")
async def clear_session(session_id: str):
    """Clear conversation history for a session."""
    tutor_chain.clear_session(session_id)
    return {"success": True, "cleared": session_id}


# ── Module Deletion ─────────────────────────────────────────────

@router.delete("/module")
async def delete_module(req: DeleteModuleRequest):
    """Remove all indexed chunks for a module."""
    try:
        result = vector_store_manager.delete_module(
            domain_slug=req.domain_slug,
            module_id=req.module_id,
        )
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ── Stats Endpoint ───────────────────────────────────────────────

@router.get("/stats/{domain_slug}")
async def get_domain_stats(domain_slug: str):
    """Get chunk count and collection info for a domain."""
    try:
        stats = vector_store_manager.get_domain_stats(domain_slug)
        return {"success": True, "data": stats}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
