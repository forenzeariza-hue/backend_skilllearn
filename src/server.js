const app = require('./app');
const env = require('./config/env');
const { connectDB, disconnectDB } = require('./config/db');

async function start() {
  try {
    await connectDB();
  } catch (error) {
    console.error('[server] gagal terhubung ke MongoDB:', error.message);
    process.exit(1);
  }

  const server = app.listen(env.port, () => {
    console.log(`[server] http://localhost:${env.port}/api (${env.nodeEnv})`);
  });

  const shutdown = async (signal) => {
    console.log(`\n[server] menerima ${signal}, menutup koneksi...`);
    server.close(async () => {
      await disconnectDB();
      process.exit(0);
    });
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

start();
