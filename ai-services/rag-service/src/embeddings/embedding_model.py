from sentence_transformers import SentenceTransformer
from langchain.embeddings.base import Embeddings
from typing import List
import numpy as np

class LocalEmbeddings(Embeddings):
    """LangChain-compatible wrapper for sentence-transformers.
    Uses all-MiniLM-L6-v2 — 90MB, runs on CPU, 
    384-dimensional vectors."""
    
    _instance = None
    _model = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            print("Loading embedding model: all-MiniLM-L6-v2")
            cls._model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')
            print("Embedding model loaded successfully")
        return cls._instance
    
    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        embeddings = self._model.encode(texts, show_progress_bar=False, normalize_embeddings=True)
        return embeddings.tolist()
    
    def embed_query(self, text: str) -> List[float]:
        embedding = self._model.encode([text], show_progress_bar=False, normalize_embeddings=True)
        return embedding[0].tolist()

# Export a singleton instance for reuse across the service
local_embeddings = LocalEmbeddings()
