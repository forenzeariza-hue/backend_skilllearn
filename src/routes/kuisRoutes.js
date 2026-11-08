const express = require('express');
const kuisController = require('../controllers/kuisController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/history', protect, kuisController.historyKuis);
router.get('/:materiId', kuisController.getKuis);
router.post('/:materiId/submit', protect, kuisController.submitKuis);

module.exports = router;
