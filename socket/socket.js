const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const prisma = require('../models/prismaClient');
const cookie = require('cookie');

let io;

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.use((socket, next) => {
    try {
      const rawCookie = socket.handshake.headers.cookie;
      if (!rawCookie) return next(new Error('Authentication error: No cookie'));

      const parsed = cookie.parse(rawCookie);
      const token = parsed.Token;

      if (!token)
        return next(new Error('Authentication error: No token in cookie'));

      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      socket.userId = decoded.userId;
      return next();
    } catch (err) {
      return next(new Error('Authentication error: Invalid token'));
    }
  });

  // ✅ Main socket connection
  io.on('connection', async (socket) => {
    const userId = socket.userId;
    const now = new Date();
    const dateOnly = new Date(now.toISOString().split('T')[0]);

    try {
      // Mark user as online
      await prisma.user.update({
        where: { id: userId },
        data: {
          online: true,
          lastSeen: now,
        },
      });

      await prisma.userSectionTime.upsert({
        where: {
          userId_date: {
            userId,
            date: dateOnly,
          },
        },
        update: {},
        create: {
          userId,
          date: dateOnly,
          firstSeen: now,
          lastSeen: now,
          timeSpentMs: 0,
        },
      });
    } catch (err) {
      console.error('❌ Error on connect:', err.message);
    }

    socket.on('disconnect', async () => {
      const disconnectTime = new Date();

      try {
        await prisma.$transaction([
          prisma.user.update({
            where: { id: userId },
            data: {
              online: false,
              lastSeen: disconnectTime,
            },
          }),
          prisma.userSectionTime.update({
            where: {
              userId_date: {
                userId,
                date: dateOnly,
              },
            },
            data: {
              lastSeen: disconnectTime,
            },
          }),
        ]);
      } catch (err) {
        console.error('❌ Error on disconnect:', err.message);
      }
    });
  });
};

module.exports = { initSocket, getIO: () => io };
