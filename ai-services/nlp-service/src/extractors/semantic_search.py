import logging
from typing import Any, Dict, List, Union

import numpy as np
from sentence_transformers import SentenceTransformer

from ..config import config


logger = logging.getLogger(__name__)
Document = Union[Dict[str, Any], str]


class SemanticSearchEngine:
    _model = None

    def __init__(self):
        if SemanticSearchEngine._model is None:
            logger.info("Loading semantic search model: %s", config.SEMANTIC_MODEL)
            SemanticSearchEngine._model = SentenceTransformer(config.SEMANTIC_MODEL)
        self.model = SemanticSearchEngine._model

    def compute_similarity(self, query: str, texts: List[str]) -> List[float]:
        query_emb = self.model.encode([query], normalize_embeddings=True)
        text_embs = self.model.encode(texts, normalize_embeddings=True)
        scores = np.dot(query_emb, text_embs.T)[0]
        return scores.tolist()

    @staticmethod
    def _normalize_document(document: Document, index: int) -> Dict[str, Any]:
        if isinstance(document, str):
            return {"id": str(index), "content": document}
        return document

    @staticmethod
    def _document_text(document: Dict[str, Any]) -> str:
        return " ".join(
            str(document.get(field, ""))
            for field in ["title", "description", "content", "summary", "tags"]
        ).strip()

    def search(
        self,
        query: str,
        documents: List[Document],
        top_k: int = 5,
        threshold: float = 0.25,
    ) -> List[Dict[str, Any]]:
        if not documents:
            return []

        normalized_docs = [
            self._normalize_document(document, index)
            for index, document in enumerate(documents)
        ]
        texts = [self._document_text(document) for document in normalized_docs]

        searchable = [
            (document, text)
            for document, text in zip(normalized_docs, texts)
            if text
        ]
        if not searchable:
            return []

        docs_with_text, search_texts = zip(*searchable)
        scores = self.compute_similarity(query, list(search_texts))

        results = []
        for document, score in zip(docs_with_text, scores):
            if score >= threshold:
                results.append({**document, "score": float(score)})

        results.sort(key=lambda item: item["score"], reverse=True)
        return results[:top_k]


search_engine = SemanticSearchEngine()
