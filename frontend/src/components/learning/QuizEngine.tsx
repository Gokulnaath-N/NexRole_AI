import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Lightbulb, Star, ChevronDown, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
}

interface QuizEngineProps {
  questions: QuizQuestion[];
  moduleId: string;
  onComplete: (score: number, xpEarned: number) => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({ questions, moduleId, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState<(string | null)[]>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [expandedReview, setExpandedReview] = useState<string | null>(null);

  const currentQuestion = questions[currentIndex];
  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;

  const handleSelectOption = (optionId: string) => {
    if (isSubmitted) return;
    setSelectedAnswer(optionId);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    setIsSubmitted(true);
    
    const newAnswers = [...answers];
    newAnswers[currentIndex] = selectedAnswer;
    setAnswers(newAnswers);

    const isCorrect = currentQuestion.options.find(o => o.id === selectedAnswer)?.isCorrect;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(answers[currentIndex + 1]);
      setIsSubmitted(answers[currentIndex + 1] !== null);
    } else {
      setShowResults(true);
    }
  };

  const handleRetake = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
    setScore(0);
  };

  useEffect(() => {
    if (showResults) {
      const percentage = (score / questions.length) * 100;
      if (percentage >= 75) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#22C55E', '#3B82F6', '#8B5CF6']
        });
      }
    }
  }, [showResults, score, questions.length]);

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 75;
    const color = passed ? '#22C55E' : percentage >= 50 ? '#F59E0B' : '#EF4444';
    const xpEarned = passed ? score * 15 : 0;

    return (
      <div className="max-w-2xl mx-auto w-full pt-8 pb-16 px-4 animate-in fade-in duration-500">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                className="text-gray-200 dark:text-gray-800"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <motion.circle
                className="transition-all duration-1000 ease-out"
                strokeWidth="8"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * percentage) / 100}
                strokeLinecap="round"
                stroke={color}
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 251.2 - (251.2 * percentage) / 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-bold text-slate-900 dark:text-slate-50">
                <motion.span
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1 }}
                >
                  {percentage}%
                </motion.span>
              </span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
            {score} of {questions.length} Correct
          </h2>

          <AnimatePresence>
            {passed && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-lg bg-blue-50 dark:bg-blue-900/30 px-6 py-3 rounded-full"
              >
                <Star className="w-6 h-6 fill-current" />
                +{xpEarned} XP Earned
              </motion.div>
            )}
          </AnimatePresence>

          <div className="h-8">
            {!passed ? (
              <p className="text-amber-600 dark:text-amber-500 font-medium">
                You need 75% to unlock the next module. Try again!
              </p>
            ) : (
              <p className="text-green-600 dark:text-green-500 font-medium">
                Great job! Next module unlocked.
              </p>
            )}
          </div>

          <div className="flex gap-4 mt-8 w-full max-w-sm">
            {!passed ? (
              <button
                onClick={handleRetake}
                className="flex-1 h-12 bg-transparent text-amber-600 dark:text-amber-500 border border-amber-600/30 dark:border-amber-500/30 hover:bg-amber-50 dark:hover:bg-amber-900/20 font-medium rounded-md transition-colors"
              >
                Retake Quiz
              </button>
            ) : (
              <button
                onClick={() => onComplete(score, xpEarned)}
                className="flex-1 h-12 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors shadow-sm"
              >
                Continue Learning →
              </button>
            )}
          </div>

          {/* Missed Questions Review */}
          {score < questions.length && (
            <div className="w-full mt-12 text-left">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                Review Missed Questions
              </h3>
              <div className="space-y-4">
                {questions.map((q, idx) => {
                  const userAnswer = answers[idx];
                  const correctOption = q.options.find(o => o.isCorrect);
                  if (userAnswer === correctOption?.id) return null;
                  
                  const isExpanded = expandedReview === q.id;
                  
                  return (
                    <div key={q.id} className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden bg-white dark:bg-slate-900/50">
                      <button 
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        onClick={() => setExpandedReview(isExpanded ? null : q.id)}
                      >
                        <span className="font-medium text-slate-800 dark:text-slate-200 text-left">
                          Q{idx + 1}. {q.text.substring(0, 50)}{q.text.length > 50 ? '...' : ''}
                        </span>
                        {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                      </button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-4 pb-4 border-t border-slate-100 dark:border-slate-800/50 pt-3 space-y-3"
                          >
                            <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">{q.text}</p>
                            <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-100 dark:border-red-900/30 flex items-start gap-2">
                              <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                              <span className="text-slate-700 dark:text-slate-300 text-sm">
                                Your answer: {q.options.find(o => o.id === userAnswer)?.text || 'Skipped'}
                              </span>
                            </div>
                            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-100 dark:border-green-900/30 flex items-start gap-2">
                              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                              <span className="text-slate-700 dark:text-slate-300 text-sm">
                                Correct answer: {correctOption?.text}
                              </span>
                            </div>
                            {correctOption?.explanation && (
                              <div className="mt-3 text-sm text-slate-600 dark:text-slate-400 pl-7">
                                <strong>Explanation:</strong> {correctOption.explanation}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full max-w-2xl mx-auto py-8 px-4 relative">
      {/* Progress Bar */}
      <div className="w-full mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Module Quiz
          </span>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>
        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm mb-6"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-[20px] font-medium text-slate-900 dark:text-slate-50 leading-relaxed">
              {currentQuestion.text}
            </h3>
            <span className="shrink-0 ml-4 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold px-2.5 py-1 rounded-full">
              Q{currentIndex + 1}
            </span>
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selectedAnswer === option.id;
              
              let stateClass = "border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161B27] hover:border-blue-400 dark:hover:border-blue-400";
              let badgeClass = "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400";
              
              if (isSelected && !isSubmitted) {
                stateClass = "border-blue-500 bg-blue-50 dark:bg-blue-500/10";
                badgeClass = "bg-blue-500 text-white";
              }
              
              if (isSubmitted) {
                stateClass = "border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161B27] opacity-60 cursor-default";
                badgeClass = "bg-slate-100 dark:bg-slate-800 text-slate-500";
                
                if (option.isCorrect) {
                  stateClass = "border-green-500 bg-green-50 dark:bg-green-500/10 z-10 opacity-100";
                  badgeClass = "bg-green-500 text-white";
                } else if (isSelected && !option.isCorrect) {
                  stateClass = "border-red-500 bg-red-50 dark:bg-red-500/10 z-10 opacity-100";
                  badgeClass = "bg-red-500 text-white";
                }
              }

              return (
                <motion.button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  disabled={isSubmitted}
                  whileHover={!isSubmitted ? { scale: 1.01 } : {}}
                  whileTap={!isSubmitted ? { scale: 0.99 } : {}}
                  className={`w-full min-h-[48px] px-4 py-3 rounded-lg border-2 text-left flex items-center transition-all ${stateClass}`}
                  animate={
                    isSubmitted && isSelected && !option.isCorrect 
                      ? { x: [0, -8, 8, -4, 4, 0] } 
                      : {}
                  }
                  transition={{ duration: 0.4 }}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mr-4 transition-colors ${badgeClass}`}>
                    {letter}
                  </span>
                  <span className="text-[14px] font-medium text-slate-700 dark:text-slate-200 flex-1">
                    {option.text}
                  </span>
                  
                  {isSubmitted && option.isCorrect && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-2">
                      <Check className="w-5 h-5 text-green-500" />
                    </motion.div>
                  )}
                  {isSubmitted && isSelected && !option.isCorrect && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-2">
                      <X className="w-5 h-5 text-red-500" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Explanation Area */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-6"
          >
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-lg p-4 flex gap-3">
              <Lightbulb className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-sm font-bold text-blue-900 dark:text-blue-100 mb-1">Explanation:</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200/80 leading-relaxed">
                  {currentQuestion.options.find(o => o.isCorrect)?.explanation || 'No explanation provided.'}
                </p>
              </div>
              {currentQuestion.options.find(o => o.id === selectedAnswer)?.isCorrect && (
                <div className="shrink-0 ml-4 flex items-center h-fit bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">
                  +15 XP
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="flex justify-end mt-auto pt-6">
        <AnimatePresence mode="wait">
          {!isSubmitted && selectedAnswer ? (
            <motion.button
              key="submit"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              onClick={handleSubmit}
              className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors"
            >
              Submit Answer
            </motion.button>
          ) : isSubmitted ? (
            <motion.button
              key="next"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={handleNext}
              className="w-full h-11 bg-slate-900 hover:bg-slate-800 dark:bg-slate-50 dark:hover:bg-slate-200 dark:text-slate-900 text-white font-medium rounded-md shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              {currentIndex < questions.length - 1 ? 'Next Question →' : 'View Results →'}
            </motion.button>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};
