import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Target, Briefcase, MessageSquare } from 'lucide-react';

const features = [
  {
    id: 'tutor',
    icon: Sparkles,
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-500',
    glow: 'shadow-glow-blue',
    title: 'An AI tutor that actually knows your course',
    desc: 'Powered by RAG — your AI tutor answers from your course content, not the internet. Zero hallucinations. Always relevant. Always available.',
    previewType: 'chat'
  },
  {
    id: 'analyzer',
    icon: Target,
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-500',
    glow: 'shadow-glow-purple',
    title: "See exactly what's missing",
    desc: 'Upload your resume. Paste any job description. Get an instant visual breakdown of matched skills, missing skills, and a personalized action plan.',
    previewType: 'radar'
  },
  {
    id: 'jobs',
    icon: Briefcase,
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-500',
    glow: 'shadow-glow-green',
    title: 'Real jobs. Real match scores.',
    desc: "2,000+ active AI job postings from India's top tech companies. Updated daily. Ranked by your personal skill match percentage.",
    previewType: 'jobs'
  },
  {
    id: 'mock',
    icon: MessageSquare,
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-500',
    glow: 'shadow-glow-amber',
    title: "Get graded like you're at Google",
    desc: 'AI evaluates your answers using the same rubric top companies use. Get detailed feedback, model answers, and improvement tips instantly.',
    previewType: 'feedback'
  }
];

export const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = featureRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveFeature(features[index].id);
          }
        },
        { threshold: 0.5, rootMargin: "-20% 0px -40% 0px" }
      );
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(obs => obs?.disconnect());
    };
  }, []);

  const activeData = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="py-24 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 relative items-start">
          
          {/* Left: Sticky Feature List */}
          <div className="w-full lg:w-[45%] flex flex-col gap-24 lg:py-32">
            {features.map((feature, idx) => (
              <div 
                key={feature.id}
                ref={el => featureRefs.current[idx] = el}
                className={`transition-opacity duration-500 ${activeFeature === feature.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.bg}`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-3xl font-display font-bold text-text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Animated Preview Panel (Sticky) */}
          <div className="w-full lg:w-[55%] sticky top-32 h-[500px] hidden md:flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`w-full h-full bg-bg-elevated rounded-2xl border border-border-subtle p-8 shadow-xl flex flex-col dark:${activeData.glow} dark:border-${activeData.border.split('-')[1]}-500/30 overflow-hidden relative`}
              >
                {/* Mock UI Previews based on activeFeature */}
                {activeData.previewType === 'chat' && (
                  <div className="flex flex-col h-full gap-4">
                    <div className="self-end bg-bg-secondary p-4 rounded-xl rounded-tr-sm max-w-[80%] border border-border-subtle">
                      <p className="text-sm">What is the difference between RAG and fine-tuning?</p>
                    </div>
                    <div className="self-start bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 p-5 rounded-xl rounded-tl-sm max-w-[90%] shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">NexRole AI</span>
                      </div>
                      <p className="text-sm text-text-secondary mb-3">Based on Module 4 of your Generative AI course:</p>
                      <ul className="text-sm space-y-2 list-disc pl-4 text-text-primary">
                        <li><strong>RAG (Retrieval-Augmented Generation):</strong> Gives the model access to external databases without retraining. Good for real-time facts.</li>
                        <li><strong>Fine-tuning:</strong> Alters the model's internal weights to learn new styles or domains. Expensive but better for specific tasks.</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeData.previewType === 'radar' && (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    {/* Placeholder for Radar Chart visual */}
                    <div className="relative w-64 h-64 rounded-full border-4 border-border-subtle flex items-center justify-center">
                      <div className="absolute inset-4 rounded-full border border-border-subtle opacity-50" />
                      <div className="absolute inset-12 rounded-full border border-border-subtle opacity-50" />
                      <div className="absolute inset-0 bg-purple-500/20 clip-polygon-[50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%] transform scale-75" />
                      <div className="absolute inset-0 bg-blue-500/30 clip-polygon-[50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%] transform scale-90" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg-elevated px-4 py-2 rounded-full shadow-md text-sm font-bold z-10 border border-border-subtle">
                        84% Match
                      </div>
                    </div>
                    <div className="mt-8 flex gap-4">
                      <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"/> <span className="text-xs">Your Skills</span></div>
                      <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-500"/> <span className="text-xs">Required</span></div>
                    </div>
                  </div>
                )}

                {activeData.previewType === 'jobs' && (
                  <div className="flex flex-col gap-4">
                    {[
                      { role: 'GenAI Engineer', comp: 'Google', match: 94, color: 'text-green-500' },
                      { role: 'AI Platform Engineer', comp: 'Flipkart', match: 87, color: 'text-green-500' },
                      { role: 'Data Scientist', comp: 'PhonePe', match: 72, color: 'text-amber-500' },
                    ].map((job, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-border-subtle bg-bg-primary">
                        <div>
                          <h4 className="font-bold text-text-primary">{job.role}</h4>
                          <p className="text-xs text-text-tertiary">{job.comp} • Bengaluru</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className={`text-lg font-bold ${job.color}`}>{job.match}%</span>
                          <span className="text-[10px] uppercase font-bold text-text-tertiary tracking-wider">Match</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeData.previewType === 'feedback' && (
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <span className="text-xs font-bold text-text-tertiary uppercase mb-1 block">Question</span>
                      <p className="text-sm font-medium">Explain how you would design a scalable RAG architecture for a customer support chatbot.</p>
                    </div>
                    <div className="flex-1 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-xl p-5">
                      <div className="flex justify-between items-center mb-4 border-b border-amber-200/50 pb-4">
                        <span className="font-bold text-text-primary">Evaluation</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">GOOD</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span>Technical Depth</span>
                          <div className="flex items-center gap-2"><div className="w-32 h-2 bg-border-subtle rounded-full overflow-hidden"><div className="w-[80%] h-full bg-green-500" /></div><span className="font-medium">8/10</span></div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Clarity</span>
                          <div className="flex items-center gap-2"><div className="w-32 h-2 bg-border-subtle rounded-full overflow-hidden"><div className="w-[70%] h-full bg-amber-500" /></div><span className="font-medium">7/10</span></div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>STAR Format</span>
                          <div className="flex items-center gap-2"><div className="w-32 h-2 bg-border-subtle rounded-full overflow-hidden"><div className="w-[60%] h-full bg-amber-500" /></div><span className="font-medium">6/10</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
};
