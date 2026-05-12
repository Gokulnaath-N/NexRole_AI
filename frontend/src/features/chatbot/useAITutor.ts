import { useMutation } from '@tanstack/react-query';
import { aiService } from '../../services/ai.service';
import { useChatSlice } from './chatSlice';
import { nanoid } from 'nanoid';
import type { AIMessage } from '../../types/ai.types';

export const useAITutor = (moduleId: string) => {
  const { sessions, addMessage, setTyping, isTyping } = useChatSlice();
  const messages = sessions[moduleId] ?? [];

  const { mutate } = useMutation({
    mutationFn: (content: string) => {
      return aiService.chat(moduleId, content);
    },
    onMutate: (content) => {
      const userMsg: AIMessage = { id: nanoid(), role: 'user', content, timestamp: new Date().toISOString() };
      addMessage(moduleId, userMsg);
      setTyping(true);
    },
    onSuccess: (res) => {
      const aiMsg: AIMessage = {
        id: nanoid(),
        role: 'assistant',
        content: res.reply,
        timestamp: new Date().toISOString(),
      };
      addMessage(moduleId, aiMsg);
      setTyping(false);
    },
    onError: () => setTyping(false),
  });

  return { messages, sendMessage: mutate, isTyping };
};
