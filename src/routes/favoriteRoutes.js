const express = require('express');
const favoriteController = require('../controllers/favoriteController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.get('/', favoriteController.listFavorites);
router.post('/:materiId', favoriteController.addFavorite);
router.delete('/:materiId', favoriteController.removeFavorite);

module.exports = router;
