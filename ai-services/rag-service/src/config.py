from dotenv import load_dotenv
import os

load_dotenv()

class Config:
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    GROQ_API_KEY: str = os.getenv("GROQ_API_KEY", "")
    HUGGINGFACE_TOKEN: str = os.getenv("HUGGINGFACE_TOKEN", "")
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379")
    CHROMA_PERSIST_DIR: str = os.getenv("CHROMA_PERSIST_DIR", "./vector_store")
    EMBEDDING_MODEL: str = os.getenv("EMBEDDING_MODEL", "all-MiniLM-L6-v2")
    PORT: int = int(os.getenv("PORT", 8001))

    # ── RAG Settings ─────────────────────────────────────────────
    CHUNK_SIZE: int = 500
    CHUNK_OVERLAP: int = 50
    TOP_K_RETRIEVAL: int = 4
    MAX_HISTORY_TURNS: int = 5
    TEMPERATURE: float = 0.3
    MAX_OUTPUT_TOKENS: int = 1024

    # ── Relevance Threshold ──────────────────────────────────────
    MIN_RELEVANCE_SCORE: float = 0.3

    # ── Session TTL (seconds) ────────────────────────────────────
    SESSION_TTL: int = 3600  # 1 hour

config = Config()
