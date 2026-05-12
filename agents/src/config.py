from pathlib import Path
import os

from dotenv import load_dotenv


SERVICE_ROOT = Path(__file__).resolve().parents[1]
load_dotenv(SERVICE_ROOT / ".env")


class Config:
    # Ports / URLs
    PORT: int = int(os.getenv("PORT", "8007"))
    BACKEND_URL: str = os.getenv("BACKEND_URL", "http://localhost:5000")
    NLP_SERVICE_URL: str = os.getenv("NLP_SERVICE_URL", "http://localhost:8002")
    GENAI_SERVICE_URL: str = os.getenv("GENAI_SERVICE_URL", "http://localhost:8003")

    # Providers
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    GROQ_API_KEY: str = os.getenv("GROQ_API_KEY", "")

    # Agent tuning
    HTTP_TIMEOUT_SECONDS: int = int(os.getenv("HTTP_TIMEOUT_SECONDS", "30"))


config = Config()
