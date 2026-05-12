import google.generativeai as genai
from groq import Groq
from ..vectorstore.chroma_store import vector_store_manager
from ..prompts.tutor_prompt import SYSTEM_PROMPT, CONTEXT_MISSING_PROMPT
from ..config import config
import redis
import json
import hashlib
import logging
from typing import List, Dict, Optional

logger = logging.getLogger(__name__)

class TutorChain:
    def __init__(self):
        # Initialize Gemini
        genai.configure(api_key=config.GEMINI_API_KEY)
        self.gemini_model = genai.GenerativeModel(
            model_name='gemini-1.5-flash',
            generation_config=genai.GenerationConfig(
                temperature=config.TEMPERATURE,
                max_output_tokens=config.MAX_OUTPUT_TOKENS,
            )
        )
        
        # Initialize Groq as fallback
        self.groq_client = Groq(api_key=config.GROQ_API_KEY)
        
        # Redis for session memory
        try:
            self.redis = redis.from_url(config.REDIS_URL)
            self.redis.ping()
            self.use_redis = True
            logger.info("Redis connected for session memory")
        except Exception:
            self.use_redis = False
            self.memory_store: Dict[str, List] = {}
            logger.warning("Redis unavailable — using in-memory sessions")
    
    def _get_session_history(self, session_id: str) -> List[Dict]:
        """Get conversation history for a session."""
        if self.use_redis:
            data = self.redis.get(f"chat_session:{session_id}")
            return json.loads(data) if data else []
        return self.memory_store.get(session_id, [])
    
    def _save_session_history(
        self, session_id: str, history: List[Dict]
    ):
        """Save conversation history. Keep last N turns."""
        trimmed = history[-10:]
        if self.use_redis:
            self.redis.setex(
                f"chat_session:{session_id}",
                3600,
                json.dumps(trimmed)
            )
        else:
            self.memory_store[session_id] = trimmed
    
    def _format_chat_history(self, history: List[Dict]) -> str:
        if not history:
            return "No previous messages."
        formatted = []
        for msg in history[-6:]:  # Last 3 turns
            role = "Learner" if msg["role"] == "user" else "Tutor"
            formatted.append(f"{role}: {msg['content']}")
        return "\n".join(formatted)
    
    def _call_gemini(self, prompt: str) -> str:
        """Call Gemini Flash API."""
        response = self.gemini_model.generate_content(prompt)
        return response.text
    
    def _call_groq_fallback(self, prompt: str) -> str:
        """Fallback to Groq Llama3 if Gemini fails."""
        logger.info("Using Groq fallback")
        completion = self.groq_client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.3,
            max_tokens=1024
        )
        return completion.choices[0].message.content
    
    def chat(
        self,
        session_id: str,
        domain_slug: str,
        question: str,
        module_id: Optional[str] = None
    ) -> Dict:
        """Main chat method with RAG + conversation memory."""
        
        # Step 1: Retrieve relevant context
        retrieved_chunks = vector_store_manager.similarity_search(
            domain_slug=domain_slug,
            query=question,
            k=config.TOP_K_RETRIEVAL,
            module_id_filter=module_id
        )
        
        # Step 2: Format context
        if retrieved_chunks:
            context_parts = []
            for i, chunk in enumerate(retrieved_chunks):
                context_parts.append(
                    f"[Source {i+1} — {chunk['metadata']['module_title']}]\n{chunk['content']}"
                )
            context = "\n\n".join(context_parts)
            has_context = True
        else:
            context = "No relevant course content found."
            has_context = False
        
        # Step 3: Get conversation history
        history = self._get_session_history(session_id)
        chat_history_str = self._format_chat_history(history)
        
        # Step 4: Build prompt
        if has_context:
            prompt = SYSTEM_PROMPT.format(
                context=context,
                chat_history=chat_history_str,
                question=question
            )
        else:
            prompt = CONTEXT_MISSING_PROMPT.format(question=question)
        
        # Step 5: Call LLM (Gemini with Groq fallback)
        try:
            answer = self._call_gemini(prompt)
        except Exception as e:
            logger.warning(f"Gemini failed: {e}. Trying Groq.")
            try:
                answer = self._call_groq_fallback(prompt)
            except Exception as e2:
                logger.error(f"Both LLMs failed: {e2}")
                answer = (
                    "I'm having trouble connecting right now. "
                    "Please try again in a moment."
                )
        
        # Step 6: Update conversation history
        history.append({"role": "user", "content": question})
        history.append({"role": "assistant", "content": answer})
        self._save_session_history(session_id, history)
        
        # Step 7: Build sources for citation
        sources = []
        if retrieved_chunks:
            seen = set()
            for chunk in retrieved_chunks:
                mod_title = chunk['metadata']['module_title']
                if mod_title not in seen:
                    sources.append({
                        "module_title": mod_title,
                        "module_id": chunk['metadata']['module_id'],
                        "relevance": round(chunk['relevance_score'], 2)
                    })
                    seen.add(mod_title)
        
        return {
            "answer": answer,
            "session_id": session_id,
            "sources": sources,
            "context_found": has_context,
            "chunks_retrieved": len(retrieved_chunks)
        }
    
    def clear_session(self, session_id: str):
        if self.use_redis:
            self.redis.delete(f"chat_session:{session_id}")
        elif session_id in self.memory_store:
            del self.memory_store[session_id]

# Export a ready‑to‑use instance
tutor_chain = TutorChain()
