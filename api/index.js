const app = require('../src/app');
const { connectDB } = require('../src/config/db');

module.exports = async (req, res) => {
  // Vercel meneruskan request /api/* ke fungsi ini. Normalkan path agar
  // Express tetap menerima /api/... walau Vercel mengirim path tanpa prefix.
  if (req.url && !req.url.startsWith('/api')) {
    req.url = req.url === '/' ? '/api' : `/api${req.url}`;
  }

  await connectDB();
  return app(req, res);
};
