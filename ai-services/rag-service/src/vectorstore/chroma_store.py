"""
FILE 5: src/vectorstore/chroma_store.py
─────────────────────────────────────────
ChromaDB vector store manager.
Each domain gets its own isolated collection.
Supports: index, search, delete, stats.
"""

import chromadb
from langchain_community.vectorstores import Chroma
from langchain_text_splitters import RecursiveCharacterTextSplitter
from ..embeddings.embedding_model import local_embeddings
from ..config import config
from typing import List, Dict, Optional
import logging

logger = logging.getLogger(__name__)


class VectorStoreManager:
    """
    Manages ChromaDB collections — one per domain.
    Each domain is fully isolated (no cross-domain leakage).
    Chunks are identified by: {module_id}_chunk_{i}
    so re-indexing a module replaces old chunks cleanly.
    """

    def __init__(self):
        self.client = chromadb.PersistentClient(
            path=config.CHROMA_PERSIST_DIR
        )
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=config.CHUNK_SIZE,
            chunk_overlap=config.CHUNK_OVERLAP,
            separators=["\n\n", "\n", ". ", "? ", "! ", " ", ""],
        )
        self._stores: Dict[str, Chroma] = {}

    # ── Helpers ──────────────────────────────────────────────────

    def _collection_name(self, domain_slug: str) -> str:
        """
        ChromaDB only allows: letters, digits, underscores, hyphens.
        Prefix ensures no collision with system collections.
        """
        return f"nexrole_{domain_slug.replace('-', '_')}"

    def get_or_create_store(self, domain_slug: str) -> Chroma:
        """Return cached store or create a new one for the domain."""
        name = self._collection_name(domain_slug)
        if name not in self._stores:
            self._stores[name] = Chroma(
                collection_name=name,
                embedding_function=local_embeddings,
                persist_directory=config.CHROMA_PERSIST_DIR,
                client=self.client,
            )
            logger.info(f"ChromaDB collection ready: {name}")
        return self._stores[name]

    # ── Indexing ─────────────────────────────────────────────────

    def index_module(
        self,
        domain_slug: str,
        module_id: str,
        module_title: str,
        content: str,
        metadata: Optional[Dict] = None,
    ) -> Dict:
        """
        Split module content into chunks and upsert into ChromaDB.
        Old chunks for the same module_id are deleted first to
        prevent stale data accumulating on content edits.
        """
        if not content.strip():
            raise ValueError("Module content cannot be empty")

        try:
            chunks = self.text_splitter.split_text(content)
            logger.info(
                f"Indexing '{module_title}' → {len(chunks)} chunks"
            )

            chunk_ids = [f"{module_id}_chunk_{i}" for i in range(len(chunks))]
            chunk_metadatas = [
                {
                    "module_id": module_id,
                    "module_title": module_title,
                    "domain_slug": domain_slug,
                    "chunk_index": i,
                    **(metadata or {}),
                }
                for i in range(len(chunks))
            ]

            store = self.get_or_create_store(domain_slug)

            # ── Delete stale chunks for this module ──────────────
            try:
                existing_ids = store._collection.get()["ids"]
                stale = [id for id in existing_ids if id.startswith(f"{module_id}_chunk_")]
                if stale:
                    store.delete(ids=stale)
                    logger.info(f"Deleted {len(stale)} stale chunks for {module_id}")
            except Exception as del_err:
                logger.warning(f"Chunk cleanup skipped: {del_err}")

            # ── Add fresh chunks ─────────────────────────────────
            store.add_texts(
                texts=chunks,
                metadatas=chunk_metadatas,
                ids=chunk_ids,
            )

            return {
                "success": True,
                "module_id": module_id,
                "module_title": module_title,
                "chunks_indexed": len(chunks),
                "domain": domain_slug,
            }

        except Exception as e:
            logger.error(f"Indexing error for module '{module_id}': {e}")
            raise

    # ── Search ───────────────────────────────────────────────────

    def similarity_search(
        self,
        domain_slug: str,
        query: str,
        k: int = 4,
        module_id_filter: Optional[str] = None,
    ) -> List[Dict]:
        """
        Retrieve top-k semantically relevant chunks for a query.
        Optionally scoped to a specific module via filter.
        Chunks below MIN_RELEVANCE_SCORE are silently discarded.
        """
        store = self.get_or_create_store(domain_slug)

        where_filter = None
        if module_id_filter:
            where_filter = {"module_id": {"$eq": module_id_filter}}

        try:
            results = store.similarity_search_with_relevance_scores(
                query=query,
                k=k,
                filter=where_filter,
            )
            return [
                {
                    "content": doc.page_content,
                    "metadata": doc.metadata,
                    "relevance_score": float(score),
                }
                for doc, score in results
                if float(score) >= config.MIN_RELEVANCE_SCORE
            ]
        except Exception as e:
            logger.error(f"Similarity search error: {e}")
            return []

    # ── Delete ───────────────────────────────────────────────────

    def delete_module(self, domain_slug: str, module_id: str) -> Dict:
        """Remove all indexed chunks for a given module."""
        store = self.get_or_create_store(domain_slug)
        try:
            existing_ids = store._collection.get()["ids"]
            stale = [id for id in existing_ids if id.startswith(f"{module_id}_chunk_")]
            if stale:
                store.delete(ids=stale)
            return {"success": True, "deleted_chunks": len(stale), "module_id": module_id}
        except Exception as e:
            logger.error(f"Delete error: {e}")
            raise

    # ── Stats ────────────────────────────────────────────────────

    def get_domain_stats(self, domain_slug: str) -> Dict:
        """Return chunk count and collection name for a domain."""
        store = self.get_or_create_store(domain_slug)
        count = store._collection.count()
        return {
            "domain": domain_slug,
            "collection": self._collection_name(domain_slug),
            "total_chunks": count,
        }


# Singleton — imported by tutor_chain and routes
vector_store_manager = VectorStoreManager()
