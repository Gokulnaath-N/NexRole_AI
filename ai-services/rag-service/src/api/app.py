"""
FILE 9: src/api/app.py
─────────────────────────────────────────
FastAPI application factory for the RAG Tutor Service.
Sets up: CORS, routes, health check, startup logging.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import router
from ..config import config
import logging

# ── Logging ──────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s │ %(levelname)-7s │ %(name)s │ %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger(__name__)


# ── FastAPI App ──────────────────────────────────────────────────

app = FastAPI(
    title="NexRole AI — RAG Tutor Service",
    version="1.0.0",
    description=(
        "RAG-powered AI tutor that answers learner questions "
        "using their actual course content. Every answer is "
        "grounded in retrieved chunks — zero hallucinations."
    ),
    docs_url="/docs",
    redoc_url="/redoc",
)


# ── CORS ─────────────────────────────────────────────────────────
# Allow requests from the frontend dev servers and production
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5000",   # Node.js backend
        "http://localhost:3000",   # Vite dev server
        "http://localhost:5173",   # Vite default port
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Routes ───────────────────────────────────────────────────────
app.include_router(router, prefix="/api/tutor", tags=["AI Tutor"])


# ── Health Check ─────────────────────────────────────────────────

@app.get("/health", tags=["System"])
def health():
    """Basic health check for load balancers and monitoring."""
    return {
        "status": "ok",
        "service": "rag-service",
        "version": "1.0.0",
        "port": config.PORT,
    }


# ── Startup Event ────────────────────────────────────────────────

@app.on_event("startup")
async def startup_event():
    logger.info("━" * 50)
    logger.info("  🚀 NexRole AI — RAG Tutor Service")
    logger.info(f"  📡 Port: {config.PORT}")
    logger.info(f"  📂 Vector Store: {config.CHROMA_PERSIST_DIR}")
    logger.info(f"  🧠 Embedding: {config.EMBEDDING_MODEL}")
    logger.info(f"  📖 Docs: http://localhost:{config.PORT}/docs")
    logger.info("━" * 50)
