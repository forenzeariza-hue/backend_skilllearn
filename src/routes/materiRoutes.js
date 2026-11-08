const express = require('express');
const materiController = require('../controllers/materiController');
const kuisController = require('../controllers/kuisController');
const { optionalAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', materiController.list);
router.get('/categories', materiController.categories);
router.get('/trending', materiController.trending);
router.get('/:id', optionalAuth, materiController.detail);

module.exports = router;
