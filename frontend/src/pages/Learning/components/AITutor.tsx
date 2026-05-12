import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Send, Sparkles, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { aiService } from '../../../services/ai.service';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

type Props = {
  domainSlug?: string;
  moduleId?: string;
  contextTitle?: string;
};

const tutorSessionKey = (domainSlug?: string, moduleId?: string) =>
  `nexrole:tutorSession:${domainSlug || 'unknown'}:${moduleId || 'all'}`;

export const AITutor = ({ domainSlug, moduleId, contextTitle }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    'Explain this concept simply',
    'Give me a real-world example',
    'What should I learn next?',
  ];

  const [didHydrateSession, setDidHydrateSession] = useState(false);

  useEffect(() => {
    const key = tutorSessionKey(domainSlug, moduleId);
    const existing = window.localStorage.getItem(key);
    setSessionId(existing || null);
    setDidHydrateSession(true);
  }, [domainSlug, moduleId]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const appendAssistantStreaming = (full: string) => {
    const id = (Date.now() + 1).toString();
    setMessages((prev) => [...prev, { id, role: 'assistant', content: '' }]);
    const words = full.split(/\s+/).filter(Boolean);
    let i = 0;
    const tick = () => {
      i += Math.max(2, Math.round(words.length / 80));
      const chunk = words.slice(0, i).join(' ');
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, content: chunk } : m)));
      if (i < words.length) requestAnimationFrame(tick);
      else setIsTyping(false);
    };
    requestAnimationFrame(tick);
  };

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    if (!domainSlug) {
      toast.error('Tutor is unavailable until course context loads.');
      return;
    }
    if (!didHydrateSession) {
      toast.info('Loading tutor session…');
      return;
    }

    setMessages((prev) => [...prev, { id: Date.now().toString(), role: 'user', content: text }]);
    setInput('');
    setIsTyping(true);

    try {
      const result = await aiService.tutorChat({
        domainSlug,
        question: text.trim(),
        sessionId: sessionId || undefined,
        moduleId,
      });

      if (result.session_id && result.session_id !== sessionId) {
        setSessionId(result.session_id);
        window.localStorage.setItem(tutorSessionKey(domainSlug, moduleId), result.session_id);
      }

      appendAssistantStreaming(result.answer || '');
    } catch (e: any) {
      setIsTyping(false);
      toast.error(e?.message || 'Tutor failed. Try again.');
    }
  };

  const handleClear = async () => {
    if (!sessionId) return;
    try {
      await aiService.clearTutorSession(sessionId);
      window.localStorage.removeItem(tutorSessionKey(domainSlug, moduleId));
      setSessionId(null);
      setMessages([]);
      toast.success('Tutor chat cleared.');
    } catch {
      toast.error('Failed to clear session.');
    }
  };

  return (
    <div className="flex flex-col h-[420px] bg-bg-elevated border border-border-subtle rounded-2xl shadow-lg overflow-hidden">
      <div className="p-4 border-b border-border-subtle bg-bg-secondary flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-primary">AI Tutor</h4>
            <div className="flex items-center gap-1">
              <Badge
                variant="outline"
                className="text-[8px] h-3 px-1 font-black uppercase text-purple-600 border-purple-200"
              >
                BETA
              </Badge>
              <span className="text-[8px] text-text-tertiary font-bold uppercase tracking-widest">
                RAG Tutor
              </span>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-text-tertiary hover:text-text-primary"
          onClick={handleClear}
          disabled={!sessionId || isTyping}
          title="Clear chat"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
        {messages.length === 0 ? (
          <div className="flex flex-col gap-3 py-4">
            <div className="flex items-center gap-2 text-xs font-bold text-text-tertiary mb-2">
              <MessageSquare className="w-3 h-3" />
              SUGGESTED PROMPTS
            </div>
            {contextTitle && (
              <div className="text-[11px] text-text-tertiary leading-relaxed">
                Context: <span className="font-semibold text-text-secondary">{contextTitle}</span>
              </div>
            )}
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSend(s)}
                className="text-left text-xs p-3 rounded-xl border border-border-subtle bg-bg-secondary hover:border-brand-500/50 hover:bg-brand-50/50 transition-all font-medium text-text-secondary"
              >
                {s}
              </button>
            ))}
          </div>
        ) : (
          messages.map((m) => (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              key={m.id}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
            >
              {m.role === 'assistant' && (
                <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-brand-600" />
                </div>
              )}
              <div
                className={`max-w-[85%] p-3 text-xs font-medium rounded-2xl ${
                  m.role === 'user'
                    ? 'bg-brand-600 text-white rounded-br-none'
                    : 'bg-bg-secondary text-text-secondary border border-border-subtle rounded-bl-none'
                }`}
              >
                {m.content}
              </div>
            </motion.div>
          ))
        )}

        {isTyping && (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center">
              <Bot className="w-4 h-4 text-brand-600" />
            </div>
            <div className="bg-bg-secondary border border-border-subtle p-3 rounded-2xl rounded-bl-none flex gap-1">
              <div className="w-1 h-1 bg-brand-400 rounded-full animate-bounce" />
              <div className="w-1 h-1 bg-brand-400 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-1 h-1 bg-brand-400 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-border-subtle bg-bg-secondary">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={domainSlug ? 'Ask about this module…' : 'Loading context…'}
            className="h-9 text-xs bg-bg-primary border-border-subtle focus-visible:ring-brand-500"
          />
          <Button
            size="icon"
            className="h-9 w-9 bg-brand-600 hover:bg-brand-700 shrink-0"
            disabled={!input.trim() || isTyping || !domainSlug}
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

