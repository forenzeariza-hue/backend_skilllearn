require('dotenv').config();

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 5000,
  mongoUri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/skilllearn',
  jwtSecret: process.env.JWT_SECRET || 'skilllearn-dev-secret',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  corsOrigin: process.env.CORS_ORIGIN || '*',
};

if (env.nodeEnv === 'production' && env.jwtSecret === 'skilllearn-dev-secret') {
  throw new Error('JWT_SECRET wajib diatur di production');
}

module.exports = env;
