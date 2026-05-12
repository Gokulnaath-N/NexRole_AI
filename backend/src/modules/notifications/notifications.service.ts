import prisma from '../../config/db';
import { emitToUser } from '../../sockets/socket.config';
import { NotificationType } from '@prisma/client';

export const createNotification = async (
  userId: string,
  type: NotificationType,
  title: string,
  message: string,
  actionUrl?: string
) => {
  const notification = await prisma.notification.create({
    data: {
      userId,
      type,
      title,
      message,
      actionUrl,
    },
  });

  // Emit real-time event to the specific user's socket room
  emitToUser(userId, 'notification', { type, title, message, actionUrl });

  return notification;
};

export const getUserNotifications = async (userId: string) => {
  const notifications = await prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: 20,
  });

  const unreadCount = await prisma.notification.count({
    where: { userId, read: false },
  });

  return { notifications, unreadCount };
};

export const markAsRead = async (userId: string, notificationId?: string) => {
  if (notificationId) {
    const updated = await prisma.notification.updateMany({
      where: { id: notificationId, userId },
      data: { read: true },
    });
    return updated.count > 0;
  } else {
    // Mark ALL as read
    const updated = await prisma.notification.updateMany({
      where: { userId, read: false },
      data: { read: true },
    });
    return updated.count > 0;
  }
};
