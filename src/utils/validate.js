const ApiError = require('./ApiError');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isObjectId(value) {
  return /^[a-f\d]{24}$/i.test(String(value || ''));
}

function requireString(value, field, { min = 1, max = 5000 } = {}) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw ApiError.badRequest(`${field} wajib diisi`);
  }
  const trimmed = value.trim();
  if (trimmed.length < min) {
    throw ApiError.badRequest(`${field} minimal ${min} karakter`);
  }
  if (trimmed.length > max) {
    throw ApiError.badRequest(`${field} maksimal ${max} karakter`);
  }
  return trimmed;
}

function requireEmail(value) {
  const email = requireString(value, 'Email').toLowerCase();
  if (!EMAIL_REGEX.test(email)) {
    throw ApiError.badRequest('Format email tidak valid');
  }
  return email;
}

function requirePassword(value) {
  if (typeof value !== 'string' || value.length < 6) {
    throw ApiError.badRequest('Password minimal 6 karakter');
  }
  if (value.length > 72) {
    throw ApiError.badRequest('Password maksimal 72 karakter');
  }
  return value;
}

function optionalNumber(value, field, { min, max } = {}) {
  if (value === undefined || value === null || value === '') return undefined;
  const number = Number(value);
  if (Number.isNaN(number)) {
    throw ApiError.badRequest(`${field} harus berupa angka`);
  }
  if (min !== undefined && number < min) {
    throw ApiError.badRequest(`${field} minimal ${min}`);
  }
  if (max !== undefined && number > max) {
    throw ApiError.badRequest(`${field} maksimal ${max}`);
  }
  return number;
}

function optionalBoolean(value, field) {
  if (value === undefined || value === null) return undefined;
  if (typeof value === 'boolean') return value;
  if (value === 'true') return true;
  if (value === 'false') return false;
  throw ApiError.badRequest(`${field} harus berupa boolean`);
}

function positiveInt(value, fallback, { max = 100 } = {}) {
  const number = Number.parseInt(value, 10);
  if (Number.isNaN(number) || number < 1) return fallback;
  return Math.min(number, max);
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = {
  isObjectId,
  requireString,
  requireEmail,
  requirePassword,
  optionalNumber,
  optionalBoolean,
  positiveInt,
  escapeRegex,
};
