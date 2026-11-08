const express = require('express');
const authRoutes = require('./authRoutes');
const materiRoutes = require('./materiRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const riwayatRoutes = require('./riwayatRoutes');
const kuisRoutes = require('./kuisRoutes');

const router = express.Router();

router.get('/health', (_req, res) => {
  res.json({ success: true, message: 'SkillLearn API berjalan', timestamp: new Date().toISOString() });
});

router.use('/auth', authRoutes);
router.use('/materi', materiRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/riwayat', riwayatRoutes);
router.use('/kuis', kuisRoutes);

module.exports = router;
