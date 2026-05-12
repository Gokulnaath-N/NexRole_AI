import axios from 'axios';
import { env } from '../config/env';
import logger from '../config/logger';

class CircuitBreaker {
  private failures: Map<string, number> = new Map();
  private lastFailure: Map<string, number> = new Map();
  private readonly threshold = 5;
  private readonly timeout = 60000; // 60 seconds

  isOpen(service: string): boolean {
    const failures = this.failures.get(service) ?? 0;
    const lastFail = this.lastFailure.get(service) ?? 0;
    if (failures >= this.threshold) {
      if (Date.now() - lastFail < this.timeout) return true;
      this.reset(service);
    }
    return false;
  }

  recordFailure(service: string): void {
    this.failures.set(service, (this.failures.get(service) ?? 0) + 1);
    this.lastFailure.set(service, Date.now());
  }

  recordSuccess(service: string): void {
    this.failures.set(service, 0);
  }

  reset(service: string): void {
    this.failures.set(service, 0);
    this.lastFailure.set(service, 0);
  }
}

class AIGateway {
  private breaker = new CircuitBreaker();

  private async call(
    service: string,
    url: string,
    method: 'GET' | 'POST' | 'DELETE',
    data?: any,
    timeoutMs = 30000
  ): Promise<any> {
    if (this.breaker.isOpen(service)) {
      throw new Error(`${service} is temporarily unavailable`);
    }
    try {
      const response = await axios({
        method,
        url,
        data,
        timeout: timeoutMs,
        headers: { 'Content-Type': 'application/json' },
      });
      this.breaker.recordSuccess(service);
      return response.data;
    } catch (error) {
      logger.warn(`[AI-GATEWAY] ${service} call failed: ${method} ${url}`);
      this.breaker.recordFailure(service);
      throw error;
    }
  }

  // RAG Service (port 8001)
  async chat(domainSlug: string, question: string, sessionId: string, moduleId?: string) {
    return this.call(
      'rag',
      `${env.RAG_SERVICE_URL}/api/tutor/chat`,
      'POST',
      { domain_slug: domainSlug, question, session_id: sessionId, module_id: moduleId },
      45000
    );
  }

  async indexModule(domainSlug: string, moduleId: string, title: string, content: string) {
    return this.call('rag', `${env.RAG_SERVICE_URL}/api/tutor/index`, 'POST', {
      domain_slug: domainSlug,
      module_id: moduleId,
      module_title: title,
      content,
    });
  }

  async clearTutorSession(sessionId: string) {
    return this.call('rag', `${env.RAG_SERVICE_URL}/api/tutor/session/${sessionId}`, 'DELETE');
  }

  // NLP Service (port 8002)
  async parseResume(formData: any) {
    if (this.breaker.isOpen('nlp')) throw new Error('NLP service unavailable');
    try {
      const response = await axios.post(`${env.NLP_SERVICE_URL}/api/nlp/resume/parse`, formData, {
        headers: formData.getHeaders ? formData.getHeaders() : { 'Content-Type': 'multipart/form-data' },
        timeout: 60000,
      });
      this.breaker.recordSuccess('nlp');
      return response.data;
    } catch (e) {
      this.breaker.recordFailure('nlp');
      throw e;
    }
  }

  async analyzeSkillGap(userSkills: string[], jdText: string) {
    return this.call('nlp', `${env.NLP_SERVICE_URL}/api/nlp/skill-gap`, 'POST', {
      user_skills: userSkills,
      jd_text: jdText,
    });
  }

  async semanticSearch(query: string, documents: any[]) {
    return this.call('nlp', `${env.NLP_SERVICE_URL}/api/nlp/search/semantic`, 'POST', {
      query,
      documents,
      top_k: 8,
    });
  }

  // GenAI Service (port 8003)
  async generateQuiz(topic: string, content: string, count = 5) {
    return this.call('genai', `${env.GENAI_SERVICE_URL}/api/genai/quiz/generate`, 'POST', { topic, content, count }, 60000);
  }

  async generateNotes(title: string, content: string, level: string) {
    return this.call(
      'genai',
      `${env.GENAI_SERVICE_URL}/api/genai/notes/generate`,
      'POST',
      { title, content, level },
      45000
    );
  }

  async generateRoadmap(data: any) {
    return this.call('genai', `${env.GENAI_SERVICE_URL}/api/genai/roadmap/generate`, 'POST', data, 120000);
  }

  async evaluateInterview(question: string, answer: string, role: string, category: string) {
    return this.call(
      'genai',
      `${env.GENAI_SERVICE_URL}/api/genai/interview/evaluate`,
      'POST',
      { question, answer, role, category },
      45000
    );
  }

  // Multimodal Service (port 8004)
  async transcribeAudio(audioBuffer: Buffer, filename: string) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const FormData = require('form-data');
    const form = new FormData();
    form.append('file', audioBuffer, { filename });

    if (this.breaker.isOpen('multimodal')) throw new Error('Multimodal service unavailable');
    try {
      const response = await axios.post(`${env.MULTIMODAL_SERVICE_URL}/api/multimodal/audio/transcribe`, form, {
        headers: form.getHeaders(),
        timeout: 60000,
      });
      this.breaker.recordSuccess('multimodal');
      return response.data;
    } catch (e) {
      this.breaker.recordFailure('multimodal');
      throw e;
    }
  }

  async analyzeImage(imageBuffer: Buffer, filename: string, context = '', question = '') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const FormData = require('form-data');
    const form = new FormData();
    form.append('file', imageBuffer, { filename });
    form.append('context', context);
    form.append('question', question);

    if (this.breaker.isOpen('multimodal')) throw new Error('Multimodal service unavailable');
    try {
      const response = await axios.post(`${env.MULTIMODAL_SERVICE_URL}/api/multimodal/image/analyze`, form, {
        headers: form.getHeaders(),
        timeout: 45000,
      });
      this.breaker.recordSuccess('multimodal');
      return response.data;
    } catch (e) {
      this.breaker.recordFailure('multimodal');
      throw e;
    }
  }

  // Agents Service (port 8007)
  async generateLearningPathAgent(data: any) {
    return this.call('agents', `${env.AGENTS_SERVICE_URL}/api/agents/learning-path/generate`, 'POST', data, 180000);
  }

  async assessEngagement(data: any) {
    return this.call('agents', `${env.AGENTS_SERVICE_URL}/api/agents/engagement/assess`, 'POST', data, 30000);
  }

  async healthCheck(): Promise<Record<string, string>> {
    const services = [
      { name: 'rag', url: env.RAG_SERVICE_URL },
      { name: 'nlp', url: env.NLP_SERVICE_URL },
      { name: 'genai', url: env.GENAI_SERVICE_URL },
      { name: 'multimodal', url: env.MULTIMODAL_SERVICE_URL },
      { name: 'agents', url: env.AGENTS_SERVICE_URL },
    ];

    const results: Record<string, string> = {};
    await Promise.allSettled(
      services.map(async ({ name, url }) => {
        try {
          await axios.get(`${url}/health`, { timeout: 5000 });
          results[name] = 'online';
        } catch {
          results[name] = 'offline';
        }
      })
    );
    return results;
  }
}

export const aiGateway = new AIGateway();
