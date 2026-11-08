const { User } = require('../models');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { requireString, requireEmail, requirePassword } = require('../utils/validate');
const { signToken } = require('../middleware/auth');

const register = asyncHandler(async (req, res) => {
  const name = requireString(req.body.name, 'Nama', { min: 2, max: 80 });
  const email = requireEmail(req.body.email);
  const password = requirePassword(req.body.password);

  const existing = await User.findOne({ email });
  if (existing) {
    throw ApiError.conflict('Email sudah terdaftar');
  }

  const user = await User.create({ name, email, password });
  const token = signToken(user);

  res.status(201).json({
    success: true,
    message: 'Registrasi berhasil',
    data: { token, user },
  });
});

const login = asyncHandler(async (req, res) => {
  const email = requireEmail(req.body.email);
  const password = requirePassword(req.body.password);

  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    throw ApiError.unauthorized('Email atau password salah');
  }

  const token = signToken(user);

  res.json({
    success: true,
    message: 'Login berhasil',
    data: { token, user },
  });
});

const me = asyncHandler(async (req, res) => {
  res.json({ success: true, data: { user: req.user } });
});

module.exports = { register, login, me };
