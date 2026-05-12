import { QueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: 1,
    },
    mutations: {
      onError: (error: any) => {
        const message = error?.response?.data?.message || error.message || 'Something went wrong';
        toast.error(message);
      }
    }
  },
});
