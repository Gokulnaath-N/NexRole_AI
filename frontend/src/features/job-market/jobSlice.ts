import { create } from 'zustand';
import type { Job } from '../../types/career.types';

interface JobState {
  filters: { search: string; type: string };
  bookmarked: string[];
  setFilters: (filters: Partial<{ search: string; type: string }>) => void;
  toggleBookmark: (jobId: string) => void;
}

export const useJobSlice = create<JobState>()((set) => ({
  filters: { search: '', type: '' },
  bookmarked: [],
  setFilters: (filters) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
  toggleBookmark: (jobId) =>
    set((state) => ({
      bookmarked: state.bookmarked.includes(jobId)
        ? state.bookmarked.filter((id) => id !== jobId)
        : [...state.bookmarked, jobId],
    })),
}));
