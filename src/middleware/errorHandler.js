const ApiError = require('../utils/ApiError');
const env = require('../config/env');

function notFound(req, _res, next) {
  next(ApiError.notFound(`Endpoint ${req.method} ${req.originalUrl} tidak ditemukan`));
}

// eslint-disable-next-line no-unused-vars
function errorHandler(error, _req, res, _next) {
  let statusCode = error.statusCode || 500;
  let message = error.message || 'Terjadi kesalahan pada server';
  let details = error.details || null;

  if (error.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validasi data gagal';
    details = Object.values(error.errors).map((item) => item.message);
  } else if (error.name === 'CastError') {
    statusCode = 400;
    message = `Nilai tidak valid untuk field ${error.path}`;
  } else if (error.code === 11000) {
    statusCode = 409;
    const field = Object.keys(error.keyPattern || {})[0] || 'field';
    message = `Data dengan ${field} tersebut sudah ada`;
  } else if (error.name === 'MongoServerSelectionError') {
    statusCode = 503;
    message = 'Database tidak dapat diakses';
  }

  if (statusCode >= 500) {
    console.error('[error]', error);
  }

  const body = { success: false, message };
  if (details) body.details = details;
  if (env.nodeEnv !== 'production' && statusCode >= 500) body.stack = error.stack;

  res.status(statusCode).json(body);
}

module.exports = { notFound, errorHandler };
