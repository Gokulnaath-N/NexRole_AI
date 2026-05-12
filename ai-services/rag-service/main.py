"""
FILE 10: main.py
─────────────────────────────────────────
Entry point for the NexRole AI RAG Tutor Service.

Usage:
    python main.py                    → starts on port 8001
    uvicorn src.api.app:app --reload  → same thing via CLI

The service will:
  1. Load the sentence-transformer embedding model (~90MB, CPU)
  2. Initialize ChromaDB persistent vector store
  3. Connect to Redis for session memory (falls back to in-memory)
  4. Configure Gemini Flash + Groq Llama3 LLM clients
  5. Serve FastAPI on http://0.0.0.0:{PORT}
"""

import uvicorn
from src.api.app import app
from src.config import config

if __name__ == "__main__":
    print()
    print("━" * 50)
    print("  ⚡ NexRole AI — RAG Tutor Service")
    print(f"  🌐 Starting on http://0.0.0.0:{config.PORT}")
    print(f"  📖 Docs at http://localhost:{config.PORT}/docs")
    print("━" * 50)
    print()

    uvicorn.run(
        "src.api.app:app",
        host="0.0.0.0",
        port=config.PORT,
        reload=True,
        workers=1,          # Single worker (embedding model is heavy)
        log_level="info",
    )
