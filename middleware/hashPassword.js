const bcrypt = require('bcrypt');
const { prisma } = require('../models/prismaClient');

const saltRounds = 10;

prisma.$use(async (params, next) => {
  if (params.model === 'User') {
    if (params.action === 'create' || params.action === 'update') {
      const password = params.args?.data?.password;
      if (password) {
        params.args.data.password = await bcrypt.hash(password, saltRounds);
      }
    }
  }

  return next(params);
});
