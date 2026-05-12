import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DomainCard, Domain } from './components/DomainCard';
import { FilterBar } from './components/FilterBar';

const MOCK_DOMAINS: Domain[] = [
  {
    id: '1',
    slug: 'gen-ai-engineering',
    title: 'Generative AI Engineering',
    icon: '⚡',
    color: '#7c3aed',
    description: 'Master LLMs, RAG pipelines, and agentic workflows using LangChain and OpenAI.',
    moduleCount: 12,
    studentCount: 8500,
    salaryAvg: '₹22L – ₹55L',
    demandLevel: '🔥 Hot',
    isEnrolled: true
  },
  {
    id: '2',
    slug: 'ai-agentic-systems',
    title: 'AI Agentic Systems',
    icon: '🤖',
    color: '#0369a1',
    description: 'Build autonomous agents that can plan, use tools, and solve complex tasks.',
    moduleCount: 10,
    studentCount: 1200,
    salaryAvg: '₹20L – ₹48L',
    demandLevel: '🚀 Emerging'
  },
  {
    id: '3',
    slug: 'mlops-llmops',
    title: 'MLOps / LLMOps',
    icon: '⚙️',
    color: '#0f766e',
    description: 'Deploy, monitor, and scale AI models in production with Kubernetes and CI/CD.',
    moduleCount: 8,
    studentCount: 3200,
    salaryAvg: '₹18L – ₹45L',
    demandLevel: '🔥 Hot'
  },
  {
    id: '4',
    slug: 'ai-security-analyst',
    title: 'AI Security Analyst',
    icon: '🛡️',
    color: '#dc2626',
    description: 'Protect AI systems from prompt injections, data poisoning, and adversarial attacks.',
    moduleCount: 6,
    studentCount: 1800,
    salaryAvg: '₹16L – ₹42L',
    demandLevel: '📈 Stable'
  },
  {
    id: '5',
    slug: 'ai-cloud-architecture',
    title: 'AI Cloud Architecture',
    icon: '☁️',
    color: '#0284c7',
    description: 'Design highly available and cost-effective AI infrastructure on AWS and Azure.',
    moduleCount: 9,
    studentCount: 4500,
    salaryAvg: '₹18L – ₹40L',
    demandLevel: '📈 Stable'
  },
  {
    id: '6',
    slug: 'data-engineering-ai',
    title: 'Data Engineering for AI',
    icon: '📊',
    color: '#16a34a',
    description: 'Build robust data pipelines for real-time AI inference and model training.',
    moduleCount: 11,
    studentCount: 9200,
    salaryAvg: '₹16L – ₹38L',
    demandLevel: '🔥 Hot'
  },
  {
    id: '7',
    slug: 'ai-product-management',
    title: 'AI Product Management',
    icon: '📋',
    color: '#d97706',
    description: 'Lead AI product strategy, user research, and technical roadmapping.',
    moduleCount: 7,
    studentCount: 2400,
    salaryAvg: '₹20L – ₹50L',
    demandLevel: '🚀 Emerging'
  },
  {
    id: '8',
    slug: 'robotics-automation',
    title: 'Robotics & Automation',
    icon: '🦾',
    color: '#9333ea',
    description: 'Build and program autonomous robots and industrial automation systems.',
    moduleCount: 10,
    studentCount: 1500,
    salaryAvg: '₹14L – ₹35L',
    demandLevel: '🚀 Emerging'
  }
];

export const DomainsPage = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredDomains = MOCK_DOMAINS.filter(d => {
    const matchesSearch = d.title.toLowerCase().includes(search.toLowerCase()) || 
                          d.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || 
                            d.demandLevel === activeCategory ||
                            (activeCategory === '✅ Enrolled' && d.isEnrolled);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-8 p-6 lg:p-8">
      {/* Hero Section */}
      <div className="flex flex-col gap-2">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-display font-bold text-text-primary"
        >
          Explore Domains
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-text-secondary max-w-2xl"
        >
          Pick your target domain and start your journey to becoming a specialized AI professional.
        </motion.p>
      </div>

      {/* Filter Bar */}
      <FilterBar 
        search={search}
        setSearch={setSearch}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Grid */}
      {filteredDomains.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDomains.map((domain, idx) => (
            <DomainCard key={domain.id} domain={domain} index={idx} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-bg-secondary rounded-full flex items-center justify-center mb-4 text-2xl">
            🔍
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">No domains found</h3>
          <p className="text-text-secondary">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
};

export default DomainsPage;
