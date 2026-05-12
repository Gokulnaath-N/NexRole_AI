"""
Entry point for the NexRole AI Multimodal Service.

Usage:
    python main.py
    uvicorn src.api.app:app --reload
"""

import uvicorn

from src.config import config


if __name__ == "__main__":
    print()
    print("=" * 50)
    print("  NexRole AI - Multimodal Service")
    print(f"  Starting on http://0.0.0.0:{config.PORT}")
    print(f"  Docs at http://localhost:{config.PORT}/docs")
    print("=" * 50)
    print()

    uvicorn.run(
        "src.api.app:app",
        host="0.0.0.0",
        port=config.PORT,
        reload=True,
        workers=1,
        log_level="info",
    )
