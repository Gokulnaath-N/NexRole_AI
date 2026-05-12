import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "NexRole AI gave me a 90-day roadmap for becoming a GenAI Engineer. 4 months later I got hired at a product startup in Bengaluru. This platform is insane.",
    author: "Arjun K.",
    role: "GenAI Engineer",
    company: "Juspay",
    init: "AK",
    color: "bg-blue-500"
  },
  {
    quote: "The skill gap analyzer showed me exactly what was missing from my resume for an MLOps role. 3 months of targeted learning and I cleared the interview.",
    author: "Priya R.",
    role: "MLOps Engineer",
    company: "Groww",
    init: "PR",
    color: "bg-purple-500"
  },
  {
    quote: "The AI mock interviewer is brutal in the best way. It found gaps in my answers that 5 human mock interviews had missed. Got the offer from PhonePe.",
    author: "Karthik M.",
    role: "AI Product Manager",
    company: "PhonePe",
    init: "KM",
    color: "bg-green-500"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
            Don't just take our word for it
          </h2>
          <p className="text-lg text-text-secondary">
            Join thousands of engineers who used NexRole AI to successfully transition into high-paying AI roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-bg-elevated p-8 rounded-2xl border border-border-subtle shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-text-primary text-base italic leading-relaxed mb-8">
                "{test.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ${test.color}`}>
                  {test.init}
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm">{test.author}</h4>
                  <p className="text-xs text-text-secondary">{test.role} · {test.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
