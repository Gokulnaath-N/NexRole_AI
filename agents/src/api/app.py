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
    title="NexRole AI - Agents Service",
    version="1.0.0",
    description="LangGraph-powered autonomous agents for NexRole AI.",
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


app.include_router(router, prefix="/api/agents", tags=["Agents"])


@app.get("/health", tags=["System"])
def health():
    return {
        "status": "ok",
        "service": "agents-service",
        "version": "1.0.0",
        "port": config.PORT,
    }


@app.on_event("startup")
async def startup_event():
    logger.info("=" * 50)
    logger.info("  NexRole AI - Agents Service")
    logger.info("  Port: %s", config.PORT)
    logger.info("  NLP: %s", config.NLP_SERVICE_URL)
    logger.info("  GenAI: %s", config.GENAI_SERVICE_URL)
    logger.info("  Backend: %s", config.BACKEND_URL)
    logger.info("  Docs: http://localhost:%s/docs", config.PORT)
    logger.info("=" * 50)
