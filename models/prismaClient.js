// models/prismaClient.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const prisma = new PrismaClient().$extends({
  query: {
    user: {
      async create({ args, query }) {
        if (args.data.password) {
          args.data.password = await bcrypt.hash(args.data.password, SALT_ROUNDS);
        }
        return query(args); 
      },

      async update({ args, query }) {
        if (args.data.password) {
          args.data.password = await bcrypt.hash(args.data.password, SALT_ROUNDS);
        }
        return query(args);  
      },
    },
  },
});

module.exports = { prisma };
