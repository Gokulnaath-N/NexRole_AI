"""
Entry point for the NexRole AI NLP Service.

Usage:
    python main.py
    uvicorn src.api.app:app --reload

The service handles resume parsing, JD parsing, semantic search, and
skill gap analysis on http://0.0.0.0:8002 by default.
"""

import uvicorn

from src.config import config


if __name__ == "__main__":
    print()
    print("=" * 50)
    print("  NexRole AI - NLP Service")
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
