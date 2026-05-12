import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from ..config import config
from ..parsers.resume_parser import ALL_SKILLS, SKILLS_TAXONOMY
from .routes import router


logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-7s | %(name)s | %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger(__name__)


app = FastAPI(
    title="NexRole AI - NLP Service",
    version="1.0.0",
    description=(
        "Resume parsing, job description skill extraction, semantic search, "
        "and skill gap analysis for NexRole AI career intelligence."
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


app.include_router(router, prefix="/api", tags=["NLP"])
app.include_router(
    router,
    prefix="/api/nlp",
    tags=["NLP"],
    include_in_schema=False,
)


@app.get("/health", tags=["System"])
def health():
    """Basic health check for load balancers and monitoring."""
    return {
        "status": "ok",
        "service": "nlp-service",
        "version": "1.0.0",
        "port": config.PORT,
        "skills": len(ALL_SKILLS),
        "categories": len(SKILLS_TAXONOMY),
    }


@app.on_event("startup")
async def startup_event():
    logger.info("=" * 50)
    logger.info("  NexRole AI - NLP Service")
    logger.info("  Port: %s", config.PORT)
    logger.info("  spaCy model: %s", config.SPACY_MODEL)
    logger.info("  Semantic model: %s", config.SEMANTIC_MODEL)
    logger.info(
        "  Skills taxonomy: %s skills, %s categories",
        len(ALL_SKILLS),
        len(SKILLS_TAXONOMY),
    )
    logger.info("  Docs: http://localhost:%s/docs", config.PORT)
    logger.info("=" * 50)
