const { connectDB } = require('../config/db');

async function ensureDb(_req, _res, next) {
  try {
    await connectDB();
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = ensureDb;
