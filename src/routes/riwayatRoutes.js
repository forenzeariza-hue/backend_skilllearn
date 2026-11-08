const express = require('express');
const riwayatController = require('../controllers/riwayatController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.get('/', riwayatController.listRiwayat);
router.post('/:materiId', riwayatController.addRiwayat);

module.exports = router;
