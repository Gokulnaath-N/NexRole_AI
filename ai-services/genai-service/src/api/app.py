import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from ..config import config
from .routes import router


logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-7s | %(name)s | %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger(__name__)


app = FastAPI(
    title="NexRole AI - GenAI Service",
    version="1.0.0",
    description=(
        "Generative AI utilities for NexRole AI: quizzes, study notes, "
        "90-day roadmaps, and interview answer evaluation. Outputs are structured JSON."
    ),
    docs_url="/docs",
    redoc_url="/redoc",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5000",
        "http://localhost:3000",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(router, prefix="/api/genai", tags=["GenAI"])


@app.get("/health", tags=["System"])
def health():
    return {
        "status": "ok",
        "service": "genai-service",
        "version": "1.0.0",
        "port": config.PORT,
        "gemini_model": config.GEMINI_MODEL,
        "groq_model": config.GROQ_MODEL,
    }


@app.on_event("startup")
async def startup_event():
    logger.info("=" * 50)
    logger.info("  NexRole AI - GenAI Service")
    logger.info("  Port: %s", config.PORT)
    logger.info("  Gemini: %s", config.GEMINI_MODEL)
    logger.info("  Groq: %s", config.GROQ_MODEL)
    logger.info("  Docs: http://localhost:%s/docs", config.PORT)
    logger.info("=" * 50)
