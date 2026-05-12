import api from './api.client';
import { learningService } from './learning.service';

export type TutorChatPayload = {
  domainSlug: string;
  question: string;
  sessionId?: string;
  moduleId?: string;
};

export type TutorSource = {
  module_title: string;
  module_id: string;
  relevance: number;
};

export type TutorChatResult = {
  answer: string;
  session_id: string;
  sources: TutorSource[];
  context_found: boolean;
  chunks_retrieved: number;
};

const unwrapTutorResult = (raw: any): TutorChatResult | null => {
  // Node API wraps responses: { success, data: <rag-service-response> }
  // rag-service response: { success, data: TutorChatResult }
  const candidate =
    raw?.data?.data ??
    raw?.data ??
    raw;

  const result = candidate?.success ? candidate?.data : candidate;
  if (!result || typeof result.answer !== 'string') return null;
  return result as TutorChatResult;
};

export const aiService = {
  async tutorChat(payload: TutorChatPayload): Promise<TutorChatResult> {
    const res = await api.post('/ai/tutor/chat', payload);
    const parsed = unwrapTutorResult(res.data);
    if (!parsed) throw new Error('Invalid tutor response');
    return parsed;
  },

  async clearTutorSession(sessionId: string) {
    await api.delete(`/ai/tutor/session/${encodeURIComponent(sessionId)}`);
  },

  async generateNotesForModule(moduleId: string) {
    const res = await api.post(`/ai/notes/${encodeURIComponent(moduleId)}`);
    const outer = res.data?.data;
    // ai gateway returns { success, data: <notes-json> }
    if (outer?.success && outer?.data) return outer.data;
    return outer;
  },

  // Back-compat API used by existing feature hooks
  async analyzeResume(file: File) {
    const form = new FormData();
    form.append('file', file);
    return api.post('/ai/resume/parse', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  async generateLearningPath(payload: any) {
    return api.post('/learning-path/generate', payload);
  },

  async chat(moduleId: string, question: string) {
    const module = await learningService.getModule(moduleId);
    const domainSlug = module?.domain?.slug;
    if (!domainSlug) throw new Error('Missing domain context for tutor');
    const sessionStorageKey = `nexrole:tutorSession:${domainSlug}:${moduleId}`;
    const sessionId = window.localStorage.getItem(sessionStorageKey) || undefined;
    const result = await this.tutorChat({ domainSlug, question, sessionId, moduleId });
    window.localStorage.setItem(sessionStorageKey, result.session_id);
    return { reply: result.answer, sources: result.sources, sessionId: result.session_id };
  },
};
