import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { notificationService } from '../../services/notification.service';
import { useNotificationSlice } from './notificationSlice';

export const useNotifications = () => {
  const qc = useQueryClient();
  const { markRead: markReadLocal, markAllRead: markAllReadLocal } = useNotificationSlice();

  const { data, isLoading } = useQuery({
    queryKey: ['notifications'],
    queryFn: () => notificationService.getAll(),
    select: (res) => res.data,
  });

  const { data: unreadData } = useQuery({
    queryKey: ['notifications', 'unread-count'],
    queryFn: () => notificationService.getUnreadCount(),
    select: (res) => res.data.data.count,
    refetchInterval: 60_000,
  });

  const markRead = useMutation({
    mutationFn: notificationService.markRead,
    onSuccess: (_, id) => {
      markReadLocal(id);
      qc.invalidateQueries({ queryKey: ['notifications'] });
    },
  });

  const markAllRead = useMutation({
    mutationFn: notificationService.markAllRead,
    onSuccess: () => {
      markAllReadLocal();
      qc.invalidateQueries({ queryKey: ['notifications'] });
    },
  });

  return {
    notifications: data?.data ?? [],
    unreadCount: unreadData ?? 0,
    isLoading,
    markRead: (id: string) => markRead.mutate(id),
    markAllRead: () => markAllRead.mutate(),
  };
};
