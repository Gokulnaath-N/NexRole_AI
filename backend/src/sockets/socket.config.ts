import { Server, Socket } from 'socket.io';
import { Server as HttpServer } from 'http';
import { env } from '../config/env';
import logger from '../config/logger';

export let io: Server;

export const initializeSocket = (httpServer: HttpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: env.FRONTEND_URL || '*',
      credentials: true,
    },
  });

  io.on('connection', (socket: Socket) => {
    logger.info(`Client connected: ${socket.id}`);

    socket.on('join-user-room', (userId: string) => {
      socket.join(userId);
      logger.debug(`Socket ${socket.id} joined user room: ${userId}`);
    });

    socket.on('disconnect', () => {
      logger.info(`Client disconnected: ${socket.id}`);
    });
  });

  return io;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const emitToUser = (userId: string, event: string, data: any) => {
  if (io) {
    io.to(userId).emit(event, data);
  }
};
