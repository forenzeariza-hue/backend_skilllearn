const mongoose = require('mongoose');
const env = require('./env');

const cache = (global.__mongooseCache = global.__mongooseCache || {
  conn: null,
  promise: null,
});

async function connectDB() {
  if (cache.conn) return cache.conn;

  if (!cache.promise) {
    mongoose.set('strictQuery', true);
    cache.promise = mongoose
      .connect(env.mongoUri, {
        bufferCommands: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 10000,
      })
      .then((mongooseInstance) => {
        console.log(`[db] terhubung ke ${mongooseInstance.connection.name}`);
        return mongooseInstance;
      })
      .catch((error) => {
        cache.promise = null;
        throw error;
      });
  }

  cache.conn = await cache.promise;
  return cache.conn;
}

function isConnected() {
  return mongoose.connection.readyState === 1;
}

async function disconnectDB() {
  await mongoose.disconnect();
  cache.conn = null;
  cache.promise = null;
}

module.exports = { connectDB, disconnectDB, isConnected };
