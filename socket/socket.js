const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");
const prisma = require("../models/prismaClient");
const cookie = require("cookie");

let io;

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.use((socket, next) => {
    try {
      const rawCookie = socket.handshake.headers.cookie;
      if (!rawCookie) return next(new Error("Authentication error: No cookie"));

      const parsed = cookie.parse(rawCookie);
      const token = parsed.Token;

      if (!token) {
        return next(new Error("Authentication error: No token in cookie"));
      }
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      socket.userId = decoded.userId;
      return next();
    } catch (err) {
      return next(new Error("Authentication error: Invalid token"));
    }
  });

  io.on("connection", async (socket) => {
    const userId = socket.userId;
    try {
      await prisma.user.update({
        where: { id: userId },
        data: {
          online: true,
          lastSeen: new Date(),
        },
      });
    } catch (err) {
      console.error("❌ Error setting online:", err.message);
    }

    socket.on("disconnect", async () => {
      try {
        await prisma.user.update({
          where: { id: userId },
          data: {
            online: false,
            lastSeen: new Date(),
          },
        });
      } catch (err) {
        console.error("❌ Error updating lastSeen:", err.message);
      }
    });
  });
};

module.exports = { initSocket, getIO: () => io };