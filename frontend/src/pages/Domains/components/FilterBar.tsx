import React from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  search: string;
  setSearch: (val: string) => void;
  activeCategory: string;
  setActiveCategory: (val: string) => void;
}

const CATEGORIES = ['All', '🔥 Hot', '🚀 Emerging', '📈 Stable', '✅ Enrolled'];

export const FilterBar = ({ search, setSearch, activeCategory, setActiveCategory }: FilterBarProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between bg-bg-elevated border border-border-subtle rounded-2xl p-4 shadow-sm">
      {/* Search */}
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by role, skill, or domain..."
          className="w-full pl-10 pr-4 py-2.5 bg-bg-secondary border border-border-default rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:bg-bg-primary transition-all"
        />
      </div>

      {/* Categories */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full md:w-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              activeCategory === cat
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                : 'bg-bg-secondary text-text-secondary border border-border-default hover:bg-border-subtle'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* More Filters Dropdown */}
      <button className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-bg-secondary border border-border-default rounded-xl text-sm font-semibold text-text-secondary hover:bg-border-subtle transition-colors">
        <SlidersHorizontal className="w-4 h-4" />
        Filters
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
};
