from pathlib import Path
import os

from dotenv import load_dotenv


SERVICE_ROOT = Path(__file__).resolve().parents[1]
load_dotenv(SERVICE_ROOT / ".env")


class Config:
    PORT: int = int(os.getenv("PORT", "8002"))
    SPACY_MODEL: str = os.getenv("SPACY_MODEL", "en_core_web_sm")
    SEMANTIC_MODEL: str = os.getenv(
        "SEMANTIC_MODEL",
        "sentence-transformers/all-MiniLM-L6-v2",
    )
    MAX_UPLOAD_MB: int = int(os.getenv("MAX_UPLOAD_MB", "5"))
    SEMANTIC_THRESHOLD: float = float(os.getenv("SEMANTIC_THRESHOLD", "0.25"))
    SEMANTIC_TOP_K: int = int(os.getenv("SEMANTIC_TOP_K", "5"))


config = Config()
