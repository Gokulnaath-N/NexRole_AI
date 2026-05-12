import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2, XCircle, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

const CHALLENGE = {
  question: "In RAG (Retrieval Augmented Generation), what is the primary purpose of the vector database?",
  options: [
    "To store and retrieve raw PDF files",
    "To perform semantic similarity search on embedded chunks",
    "To cache LLM API responses for performance",
    "To fine-tune the language model weights"
  ],
  correctIndex: 1,
  explanation: "Vector databases store dense embeddings of text chunks and enable semantic similarity search using algorithms like ANN (Approximate Nearest Neighbor). This allows RAG pipelines to retrieve contextually relevant chunks for the LLM."
};

type AnswerState = 'idle' | 'answered';

export const DailyChallenge = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [showXP, setShowXP] = useState(false);

  const isCompleted = answerState === 'answered';
  const isCorrect = selectedOption === CHALLENGE.correctIndex;

  const handleAnswer = (idx: number) => {
    if (isCompleted) return;
    setSelectedOption(idx);
    setAnswerState('answered');

    if (idx === CHALLENGE.correctIndex) {
      setShowXP(true);
      setTimeout(() => setShowXP(false), 2500);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#3B82F6', '#8B5CF6', '#F59E0B']
      });
    }
  };

  const getOptionStyle = (idx: number): string => {
    const base = "w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200 relative overflow-hidden";
    
    if (!isCompleted) {
      return `${base} border-border-default text-text-primary hover:border-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/10 cursor-pointer`;
    }

    if (idx === CHALLENGE.correctIndex) {
      return `${base} border-green-500 bg-green-50 dark:bg-green-900/15 text-green-800 dark:text-green-300`;
    }
    if (idx === selectedOption && idx !== CHALLENGE.correctIndex) {
      return `${base} border-red-500 bg-red-50 dark:bg-red-900/15 text-red-800 dark:text-red-300`;
    }
    return `${base} border-border-subtle text-text-disabled cursor-not-allowed opacity-60`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full relative overflow-hidden bg-bg-elevated border-l-4 border border-border-subtle rounded-2xl shadow-sm transition-opacity duration-500 ${
        isCompleted ? 'opacity-80' : ''
      }`}
      style={{ borderLeftColor: '#F59E0B' }}
    >
      {/* Completed badge overlay */}
      {isCompleted && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full z-10">
          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
          <span className="text-xs font-bold text-green-700 dark:text-green-400">Completed Today ✓</span>
        </div>
      )}

      {/* Floating XP +50 badge */}
      <AnimatePresence>
        {showXP && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: -20, scale: 1.1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            className="absolute right-8 top-4 z-20 px-4 py-2 bg-amber-400 text-white rounded-full font-black text-lg shadow-lg pointer-events-none"
          >
            +50 XP ⚡
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 gap-4 pr-8 md:pr-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center border border-amber-200 dark:border-amber-800">
              <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary">Daily Challenge</h3>
              <p className="text-xs font-medium text-text-secondary">Answer to maintain momentum</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-lg shrink-0">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-xs font-black text-amber-700 dark:text-amber-400">Earn 50 XP</span>
          </div>
        </div>

        {/* Question */}
        <p className="text-base font-semibold text-text-primary mb-6 leading-relaxed">
          {CHALLENGE.question}
        </p>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {CHALLENGE.options.map((option, idx) => (
            <button
              key={idx}
              className={getOptionStyle(idx)}
              onClick={() => handleAnswer(idx)}
            >
              <div className="flex items-center gap-3">
                {/* Option prefix */}
                <span className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors ${
                  !isCompleted ? 'border-border-strong text-text-secondary' :
                  idx === CHALLENGE.correctIndex ? 'border-green-500 bg-green-500 text-white' :
                  idx === selectedOption ? 'border-red-500 bg-red-500 text-white' :
                  'border-border-subtle text-text-disabled'
                }`}>
                  {isCompleted && idx === CHALLENGE.correctIndex ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : isCompleted && idx === selectedOption ? (
                    <XCircle className="w-4 h-4" />
                  ) : (
                    String.fromCharCode(65 + idx)
                  )}
                </span>
                {option}
              </div>
            </button>
          ))}
        </div>

        {/* Explanation (after answer) */}
        <AnimatePresence>
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className={`rounded-xl p-4 border ${
                isCorrect 
                  ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800/50' 
                  : 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800/50'
              }`}
            >
              <p className={`text-xs font-bold mb-1 ${isCorrect ? 'text-green-700 dark:text-green-400' : 'text-brand-700 dark:text-brand-400'}`}>
                {isCorrect ? '✓ Correct!' : '✗ Not quite — here\'s why:'}
              </p>
              <p className="text-xs text-text-secondary leading-relaxed">{CHALLENGE.explanation}</p>
              <p className="text-xs font-medium text-text-tertiary mt-3 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Come back tomorrow for your next challenge
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
