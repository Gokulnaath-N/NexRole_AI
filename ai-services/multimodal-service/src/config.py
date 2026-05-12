from pathlib import Path
import os

from dotenv import load_dotenv


SERVICE_ROOT = Path(__file__).resolve().parents[1]
load_dotenv(SERVICE_ROOT / ".env")


class Config:
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
    PORT: int = int(os.getenv("PORT", "8004"))

    # Model routing
    GEMINI_VISION_MODEL: str = os.getenv("GEMINI_VISION_MODEL", "gemini-1.5-flash")
    WHISPER_MODEL: str = os.getenv("WHISPER_MODEL", "base")
    BLIP_MODEL: str = os.getenv(
        "BLIP_MODEL",
        "Salesforce/blip-image-captioning-base",
    )

    # Limits
    MAX_AUDIO_MB: int = int(os.getenv("MAX_AUDIO_MB", "10"))
    MAX_IMAGE_MB: int = int(os.getenv("MAX_IMAGE_MB", "5"))


config = Config()
