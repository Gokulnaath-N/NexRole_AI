import io
import logging
from typing import Dict

import google.generativeai as genai
from PIL import Image, ImageOps
from transformers import BlipForConditionalGeneration, BlipProcessor

from ..config import config


logger = logging.getLogger(__name__)


class ImageAnalyzer:
    _blip_processor = None
    _blip_model = None

    def __init__(self):
        genai.configure(api_key=config.GEMINI_API_KEY)
        self.gemini_vision = genai.GenerativeModel(config.GEMINI_VISION_MODEL)

        if ImageAnalyzer._blip_processor is None:
            logger.info("Loading BLIP model: %s", config.BLIP_MODEL)
            ImageAnalyzer._blip_processor = BlipProcessor.from_pretrained(config.BLIP_MODEL)
            ImageAnalyzer._blip_model = BlipForConditionalGeneration.from_pretrained(config.BLIP_MODEL)
            logger.info("BLIP loaded successfully")

    def get_caption(self, image: Image.Image) -> str:
        inputs = ImageAnalyzer._blip_processor(image, return_tensors="pt")
        out = ImageAnalyzer._blip_model.generate(**inputs)
        return ImageAnalyzer._blip_processor.decode(out[0], skip_special_tokens=True)

    @staticmethod
    def _to_jpeg_bytes(image: Image.Image) -> bytes:
        normalized = ImageOps.exif_transpose(image)
        if normalized.mode not in ("RGB", "L"):
            normalized = normalized.convert("RGB")
        if normalized.mode == "L":
            normalized = normalized.convert("RGB")
        buf = io.BytesIO()
        normalized.save(buf, format="JPEG", quality=90)
        return buf.getvalue()

    def analyze_learning_image(self, image_bytes: bytes, context: str = "", question: str = "") -> Dict:
        image = Image.open(io.BytesIO(image_bytes))

        caption = self.get_caption(image)
        jpeg_bytes = self._to_jpeg_bytes(image)

        prompt = f"""Analyze this image from an AI learning course.

Caption: {caption}
{f"Course context: {context}" if context else ""}
{f"Learner's question: {question}" if question else ""}

Provide:
1. What this image shows (2-3 sentences)
2. Key concepts illustrated
3. How this relates to AI/ML
4. What a learner should understand from it

Be educational and clear."""

        response = self.gemini_vision.generate_content(
            [
                prompt,
                {"mime_type": "image/jpeg", "data": jpeg_bytes},
            ]
        )

        return {
            "caption": caption,
            "explanation": response.text,
            "image_type": self._detect_image_type(caption),
        }

    def _detect_image_type(self, caption: str) -> str:
        caption_lower = (caption or "").lower()
        if any(word in caption_lower for word in ["diagram", "chart", "graph"]):
            return "diagram"
        if any(word in caption_lower for word in ["code", "terminal", "console"]):
            return "code_screenshot"
        if any(word in caption_lower for word in ["architecture", "system", "flow"]):
            return "architecture"
        return "general"


image_analyzer = ImageAnalyzer()
