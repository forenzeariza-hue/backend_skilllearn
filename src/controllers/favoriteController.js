const { Favorite, Materi } = require('../models');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { isObjectId } = require('../utils/validate');

const listFavorites = asyncHandler(async (req, res) => {
  const items = await Favorite.find({ userId: req.user._id })
    .sort({ createdAt: -1 })
    .populate('materiId', 'title slug category type description thumbnail durationMinutes')
    .lean();

  res.json({
    success: true,
    data: items.map((item) => ({
      _id: item._id,
      createdAt: item.createdAt,
      materi: item.materiId,
    })),
  });
});

const addFavorite = asyncHandler(async (req, res) => {
  const { materiId } = req.params;
  if (!isObjectId(materiId)) {
    throw ApiError.badRequest('ID materi tidak valid');
  }

  const materi = await Materi.exists({ _id: materiId });
  if (!materi) {
    throw ApiError.notFound('Materi tidak ditemukan');
  }

  const favorite = await Favorite.findOneAndUpdate(
    { userId: req.user._id, materiId },
    { $setOnInsert: { userId: req.user._id, materiId } },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  ).lean();

  res.status(201).json({
    success: true,
    message: 'Materi ditambahkan ke favorit',
    data: favorite,
  });
});

const removeFavorite = asyncHandler(async (req, res) => {
  const { materiId } = req.params;
  if (!isObjectId(materiId)) {
    throw ApiError.badRequest('ID materi tidak valid');
  }

  const deleted = await Favorite.findOneAndDelete({
    userId: req.user._id,
    materiId,
  });

  if (!deleted) {
    throw ApiError.notFound('Materi tidak ada di daftar favorit');
  }

  res.json({ success: true, message: 'Materi dihapus dari favorit' });
});

module.exports = { listFavorites, addFavorite, removeFavorite };
