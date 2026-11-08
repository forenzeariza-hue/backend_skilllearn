const jwt = require('jsonwebtoken');
const env = require('../config/env');
const ApiError = require('../utils/ApiError');
const { User } = require('../models');

function signToken(user) {
  return jwt.sign({ sub: String(user._id) }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn,
  });
}

async function protect(req, _res, next) {
  try {
    const header = req.headers.authorization || '';
    const [scheme, token] = header.split(' ');

    if (scheme !== 'Bearer' || !token) {
      throw ApiError.unauthorized('Header Authorization Bearer <token> wajib diisi');
    }

    let payload;
    try {
      payload = jwt.verify(token, env.jwtSecret);
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw ApiError.unauthorized('Token sudah kedaluwarsa');
      }
      throw ApiError.unauthorized('Token tidak valid');
    }

    const user = await User.findById(payload.sub);
    if (!user) {
      throw ApiError.unauthorized('Pengguna tidak ditemukan');
    }

    req.user = user;
    return next();
  } catch (error) {
    return next(error);
  }
}

async function optionalAuth(req, _res, next) {
  try {
    const header = req.headers.authorization || '';
    const [scheme, token] = header.split(' ');
    if (scheme === 'Bearer' && token) {
      const payload = jwt.verify(token, env.jwtSecret);
      req.user = await User.findById(payload.sub);
    }
    return next();
  } catch (_error) {
    req.user = undefined;
    return next();
  }
}

module.exports = { protect, optionalAuth, signToken };
