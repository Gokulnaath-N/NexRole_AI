import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot, Sparkles, Plus, Trash2, Send, Mic, Copy,
  ThumbsUp, ThumbsDown, Check, ChevronDown, MessageSquare
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { nanoid } from 'nanoid';
import { toast } from 'sonner';
import { post, del, get } from '../../services/api.client';
import { useQuery } from '@tanstack/react-query';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface Session {
  id: string;
  title: string;
  domainSlug: string;
  messages: Message[];
}

const SUGGESTIONS = [
  { emoji: '🧠', text: 'Explain RAG vs Fine-tuning' },
  { emoji: '⚡', text: 'How do transformers work?' },
  { emoji: '🤖', text: 'What is LangGraph?' },
  { emoji: '🚀', text: 'How to deploy an LLM?' },
];

export const AITutor: React.FC = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedDomainSlug, setSelectedDomainSlug] = useState('generative-ai-engineering');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { data: domains } = useQuery({
    queryKey: ['domains-list'],
    queryFn: async () => {
      const res = await get<any>('/domains');
      return res.data?.data ?? [];
    },
    staleTime: 60_000,
  });

  const activeSession = sessions.find(s => s.id === activeSessionId);
  const messages = activeSession?.messages ?? [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const createNewSession = useCallback(() => {
    const id = nanoid();
    const session: Session = { id, title: 'New Chat', domainSlug: selectedDomainSlug, messages: [] };
    setSessions(prev => [session, ...prev]);
    setActiveSessionId(id);
  }, [selectedDomainSlug]);

  useEffect(() => {
    if (!activeSessionId) createNewSession();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  };

  const handleSend = async (overrideText?: string) => {
    const text = (overrideText ?? input).trim();
    if (!text || isTyping) return;

    let sessionId = activeSessionId;
    if (!sessionId) {
      const id = nanoid();
      const session: Session = { id, title: text.slice(0, 40), domainSlug: selectedDomainSlug, messages: [] };
      setSessions(prev => [session, ...prev]);
      setActiveSessionId(id);
      sessionId = id;
    }

    const userMsg: Message = {
      id: nanoid(), role: 'user', content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setSessions(prev => prev.map(s => s.id === sessionId
      ? { ...s, title: s.messages.length === 0 ? text.slice(0, 40) : s.title, messages: [...s.messages, userMsg] }
      : s
    ));
    setInput('');
    setIsTyping(true);
    if (textareaRef.current) textareaRef.current.style.height = 'auto';

    try {
      const res = await post<any>('/ai/tutor/chat', {
        domainSlug: selectedDomainSlug,
        question: text,
        sessionId,
      });
      const reply = res.data?.data?.reply ?? res.data?.data?.answer ?? 'No response received.';
      const aiMsg: Message = {
        id: nanoid(), role: 'assistant', content: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setSessions(prev => prev.map(s => s.id === sessionId
        ? { ...s, messages: [...s.messages, aiMsg] }
        : s
      ));
    } catch (err: any) {
      const errMsg = err?.response?.data?.message ?? 'AI service unavailable. Please try again.';
      toast.error(errMsg);
      const errAiMsg: Message = {
        id: nanoid(), role: 'assistant', content: `⚠️ ${errMsg}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setSessions(prev => prev.map(s => s.id === sessionId
        ? { ...s, messages: [...s.messages, errAiMsg] }
        : s
      ));
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDeleteSession = async (sessionId: string) => {
    try {
      await del(`/ai/tutor/session/${sessionId}`);
    } catch { /* ignore */ }
    setSessions(prev => prev.filter(s => s.id !== sessionId));
    if (activeSessionId === sessionId) {
      const remaining = sessions.filter(s => s.id !== sessionId);
      if (remaining.length > 0) setActiveSessionId(remaining[0].id);
      else createNewSession();
    }
  };

  const todaySessions = sessions.filter(s => s.messages.length > 0);

  return (
    <div className="flex h-[calc(100vh-64px)] w-full overflow-hidden bg-white dark:bg-[#080B14]">
      {/* LEFT PANEL */}
      <div className="w-[280px] h-full border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0D1117] flex flex-col shrink-0 hidden md:flex">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-50">
            <Bot className="w-5 h-5 text-blue-500" /> AI Tutor
          </div>
          <button onClick={createNewSession} className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md transition-colors text-slate-600 dark:text-slate-400">
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Domain</div>
          <select
            value={selectedDomainSlug}
            onChange={e => setSelectedDomainSlug(e.target.value)}
            className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:border-blue-500"
          >
            {domains?.map((d: any) => (
              <option key={d.slug} value={d.slug}>{d.name}</option>
            )) ?? <option value="generative-ai">Generative AI</option>}
          </select>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {todaySessions.length === 0 ? (
            <div className="p-4 text-xs text-slate-400 text-center">No sessions yet. Start a conversation!</div>
          ) : (
            <>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider p-2 mt-2">Sessions</div>
              {todaySessions.map(session => (
                <div key={session.id}
                  onClick={() => setActiveSessionId(session.id)}
                  className={`group flex items-center justify-between p-2 rounded-md cursor-pointer text-sm mb-1 ${activeSessionId === session.id ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium' : 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                  <div className="flex items-center gap-2 truncate">
                    <MessageSquare className="w-4 h-4 shrink-0 opacity-50" />
                    <span className="truncate">{session.title}</span>
                  </div>
                  <button onClick={e => { e.stopPropagation(); handleDeleteSession(session.id); }}
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-red-500 shrink-0">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Quick Topics</div>
          <div className="flex flex-wrap gap-2">
            {['What is LoRA?', 'Explain RAG', 'Deploy LLM'].map(topic => (
              <button key={topic} onClick={() => { setInput(topic); handleSend(topic); }}
                className="text-xs px-2.5 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT CHAT PANEL */}
      <div className="flex-1 flex flex-col relative h-full">
        <div className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 shrink-0 bg-white/80 dark:bg-[#080B14]/80 backdrop-blur-md absolute top-0 w-full z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-slate-900 dark:text-slate-50 text-sm">NexRole AI Tutor</h2>
                <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full border border-blue-100 dark:border-blue-800/50">
                  {domains?.find((d: any) => d.slug === selectedDomainSlug)?.name ?? 'AI Domain'}
                </span>
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Powered by Gemini · RAG-enhanced with course content</div>
            </div>
          </div>
          <button onClick={() => activeSessionId && handleDeleteSession(activeSessionId)}
            className="p-2 text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 pt-24 pb-32">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center max-w-2xl mx-auto text-center animate-in fade-in duration-500">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">What do you want to understand today?</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">Ask anything about your course. I'll explain concepts, review your code, and guide you through challenges.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {SUGGESTIONS.map((s, i) => (
                  <button key={i} onClick={() => handleSend(s.text)}
                    className="p-4 text-left border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-[#0D1117] hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform origin-left">{s.emoji}</div>
                    <div className="font-medium text-slate-700 dark:text-slate-300 text-sm">{s.text}</div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-8">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center shrink-0 mr-4 mt-1">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[85%] ${msg.role === 'user' ? 'order-1' : 'order-2'}`}>
                    {msg.role === 'assistant' && (
                      <div className="text-[11px] font-semibold text-slate-500 mb-1 ml-1">NexRole AI Tutor</div>
                    )}
                    <div className={`relative group ${msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl rounded-br-sm px-5 py-3 shadow-sm'
                      : 'bg-slate-50 dark:bg-[#161B27] border border-slate-200 dark:border-slate-800/50 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm'}`}>
                      {msg.role === 'user' ? (
                        <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</div>
                      ) : (
                        <div className="prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-[#0D1117] prose-pre:border prose-pre:border-slate-800">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      )}
                      {msg.role === 'assistant' && (
                        <div className="absolute -right-2 top-0 translate-x-full opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1">
                          <button onClick={() => handleCopy(msg.content, msg.id)} className="p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-500 hover:text-blue-500 shadow-sm transition-colors">
                            {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                          <button className="p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-500 hover:text-blue-500 shadow-sm transition-colors">
                            <ThumbsUp className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-500 hover:text-red-500 shadow-sm transition-colors">
                            <ThumbsDown className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className={`text-[10px] text-slate-400 mt-1.5 ${msg.role === 'user' ? 'text-right mr-1' : 'ml-1'}`}>
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center shrink-0 mr-4 mt-1">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500 mb-1 ml-1">NexRole AI Tutor</div>
                    <div className="bg-slate-50 dark:bg-[#161B27] border border-slate-200 dark:border-slate-800/50 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm flex items-center gap-1.5 w-20 h-11">
                      <motion.div animate={{ scale: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-2 h-2 bg-blue-500 rounded-full" />
                      <motion.div animate={{ scale: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-2 h-2 bg-purple-500 rounded-full" />
                      <motion.div animate={{ scale: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-2 h-2 bg-blue-400 rounded-full" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div className="absolute bottom-0 w-full bg-gradient-to-t from-white via-white dark:from-[#080B14] dark:via-[#080B14] to-transparent pt-10 pb-6 px-4 md:px-12 z-20">
          <div className="max-w-3xl mx-auto relative">
            <div className="relative rounded-2xl bg-white dark:bg-[#161B27] border border-slate-200 dark:border-slate-800 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:border-blue-500 transition-all">
              <textarea ref={textareaRef} value={input} onChange={handleInput} onKeyDown={handleKeyDown}
                placeholder="Ask anything about your course..."
                className="w-full bg-transparent border-none focus:ring-0 resize-none py-4 pl-5 pr-24 text-sm text-slate-900 dark:text-slate-50 min-h-[56px] max-h-[120px]"
                rows={1} />
              <div className="absolute right-2 bottom-2.5 flex items-center gap-1">
                <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                  <Mic className="w-5 h-5" />
                </button>
                <button onClick={() => handleSend()} disabled={!input.trim() || isTyping}
                  className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
            <div className="text-center mt-2 text-[10px] text-slate-400 font-medium">
              AI can make mistakes. Verify important information.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITutor;
