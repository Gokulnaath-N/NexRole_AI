from fastapi import APIRouter, File, Form, HTTPException, UploadFile

from ..audio.whisper_transcriber import transcriber
from ..config import config
from ..vision.image_analyzer import image_analyzer


router = APIRouter()

ALLOWED_AUDIO = {".webm", ".mp3", ".wav", ".m4a", ".ogg"}
ALLOWED_IMAGE = {".jpg", ".jpeg", ".png", ".gif", ".webp"}


@router.post("/audio/transcribe")
async def transcribe_audio(
    file: UploadFile = File(...),
    language: str = Form(default="en"),
):
    """Transcribe voice question to text using Whisper."""
    if not file.filename or "." not in file.filename:
        raise HTTPException(status_code=400, detail="File must have an extension")

    ext = "." + file.filename.split(".")[-1].lower()
    if ext not in ALLOWED_AUDIO:
        raise HTTPException(status_code=400, detail=f"Unsupported format. Use: {sorted(ALLOWED_AUDIO)}")

    content = await file.read()
    if len(content) > config.MAX_AUDIO_MB * 1024 * 1024:
        raise HTTPException(status_code=400, detail=f"Audio file too large (max {config.MAX_AUDIO_MB}MB)")

    try:
        result = transcriber.transcribe(content, ext, language=language)
        return {"success": True, "data": result}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Transcription failed: {str(exc)}")


@router.post("/image/analyze")
async def analyze_image(
    file: UploadFile = File(...),
    context: str = Form(default=""),
    question: str = Form(default=""),
):
    """Analyze a learning image — diagrams, slides, screenshots."""
    if not file.filename or "." not in file.filename:
        raise HTTPException(status_code=400, detail="File must have an extension")

    ext = "." + file.filename.split(".")[-1].lower()
    if ext not in ALLOWED_IMAGE:
        raise HTTPException(status_code=400, detail=f"Unsupported format. Use: {sorted(ALLOWED_IMAGE)}")

    content = await file.read()
    if len(content) > config.MAX_IMAGE_MB * 1024 * 1024:
        raise HTTPException(status_code=400, detail=f"Image too large (max {config.MAX_IMAGE_MB}MB)")

    try:
        result = image_analyzer.analyze_learning_image(content, context, question)
        return {"success": True, "data": result}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Analysis failed: {str(exc)}")
