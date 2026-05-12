import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const FinalCTA = () => {
  return (
    <section className="py-32 bg-[#0F172A] dark:bg-[#080B14] relative overflow-hidden text-center flex flex-col items-center justify-center">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 blur-[100px] rounded-full dark:bg-purple-600/10" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-[56px] leading-tight font-display font-bold text-white mb-6"
        >
          The platform that should have existed already.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
        >
          Join 2,400+ engineers who chose NexRole AI over traditional platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <Link
            to="/auth/register"
            className="group relative h-14 px-10 flex items-center justify-center rounded-lg bg-white text-brand-600 hover:bg-brand-50 font-bold text-lg transition-all hover:scale-[1.02] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Learning Free
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
          <p className="text-sm text-white/40 font-medium">
            No credit card required · Free forever
          </p>
        </motion.div>
      </div>
    </section>
  );
};
