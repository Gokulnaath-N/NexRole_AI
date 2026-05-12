from dotenv import load_dotenv
import os
from pathlib import Path


SERVICE_ROOT = Path(__file__).resolve().parents[1]
load_dotenv(SERVICE_ROOT / ".env")


class Config:
    # Providers
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    GROQ_API_KEY: str = os.getenv("GROQ_API_KEY", "")

    # Infra
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379")
    PORT: int = int(os.getenv("PORT", "8003"))

    # Model routing
    GEMINI_MODEL: str = os.getenv("GEMINI_MODEL", "gemini-1.5-flash")
    GROQ_MODEL: str = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")

    # Generation defaults
    TEMPERATURE: float = float(os.getenv("TEMPERATURE", "0.4"))
    MAX_TOKENS_DEFAULT: int = int(os.getenv("MAX_TOKENS_DEFAULT", "2048"))
    MAX_TOKENS_ROADMAP: int = int(os.getenv("MAX_TOKENS_ROADMAP", "8192"))


config = Config()
