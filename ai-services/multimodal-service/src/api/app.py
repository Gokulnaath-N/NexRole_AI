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
    title="NexRole AI - Multimodal Service",
    version="1.0.0",
    description=(
        "Multimodal utilities for NexRole AI: Whisper transcription, "
        "image understanding (BLIP + Gemini Vision), and lecture/video summarization."
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


app.include_router(router, prefix="/api", tags=["Multimodal"])
app.include_router(
    router,
    prefix="/api/multimodal",
    tags=["Multimodal"],
    include_in_schema=False,
)


@app.get("/health", tags=["System"])
def health():
    return {
        "status": "ok",
        "service": "multimodal-service",
        "version": "1.0.0",
        "port": config.PORT,
        "whisper_model": config.WHISPER_MODEL,
        "blip_model": config.BLIP_MODEL,
        "gemini_vision_model": config.GEMINI_VISION_MODEL,
    }


@app.on_event("startup")
async def startup_event():
    logger.info("=" * 50)
    logger.info("  NexRole AI - Multimodal Service")
    logger.info("  Port: %s", config.PORT)
    logger.info("  Whisper: %s (CPU)", config.WHISPER_MODEL)
    logger.info("  BLIP: %s", config.BLIP_MODEL)
    logger.info("  Gemini Vision: %s", config.GEMINI_VISION_MODEL)
    logger.info("  Docs: http://localhost:%s/docs", config.PORT)
    logger.info("=" * 50)
