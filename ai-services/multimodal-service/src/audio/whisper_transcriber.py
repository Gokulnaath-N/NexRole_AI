import logging
import tempfile
import os
from typing import Dict

from openai import OpenAI

from ..config import config


logger = logging.getLogger(__name__)

_client = OpenAI(api_key=config.OPENAI_API_KEY)


class WhisperTranscriber:
    def transcribe(self, audio_bytes: bytes, file_ext: str = ".webm", language: str = "en") -> Dict:
        with tempfile.NamedTemporaryFile(suffix=file_ext, delete=False) as tmp:
            tmp.write(audio_bytes)
            tmp_path = tmp.name

        try:
            with open(tmp_path, "rb") as f:
                response = _client.audio.transcriptions.create(
                    model="whisper-1",
                    file=f,
                    language=language or "en",
                    response_format="verbose_json",
                )
            return {
                "text": (response.text or "").strip(),
                "language": getattr(response, "language", language or "en"),
                "segments": [
                    {"start": s.start, "end": s.end, "text": s.text}
                    for s in (getattr(response, "segments", None) or [])
                ],
            }
        finally:
            try:
                os.unlink(tmp_path)
            except OSError:
                pass


transcriber = WhisperTranscriber()
