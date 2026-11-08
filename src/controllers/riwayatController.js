const { Riwayat, Materi } = require('../models');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { isObjectId, optionalNumber, optionalBoolean } = require('../utils/validate');

const listRiwayat = asyncHandler(async (req, res) => {
  const items = await Riwayat.find({ userId: req.user._id })
    .sort({ lastAccessed: -1 })
    .limit(50)
    .populate('materiId', 'title slug category type description thumbnail durationMinutes')
    .lean();

  res.json({
    success: true,
    data: items.map((item) => ({
      _id: item._id,
      progress: item.progress,
      completed: item.completed,
      lastAccessed: item.lastAccessed,
      createdAt: item.createdAt,
      materi: item.materiId,
    })),
  });
});

const addRiwayat = asyncHandler(async (req, res) => {
  const { materiId } = req.params;
  if (!isObjectId(materiId)) {
    throw ApiError.badRequest('ID materi tidak valid');
  }

  const materi = await Materi.exists({ _id: materiId });
  if (!materi) {
    throw ApiError.notFound('Materi tidak ditemukan');
  }

  const progress = optionalNumber(req.body.progress, 'progress', { min: 0, max: 100 });
  const completed = optionalBoolean(req.body.completed, 'completed');

  const update = {
    lastAccessed: new Date(),
    ...(progress !== undefined ? { progress } : {}),
    ...(completed !== undefined ? { completed } : {}),
  };

  if (completed === true) update.progress = 100;

  const riwayat = await Riwayat.findOneAndUpdate(
    { userId: req.user._id, materiId },
    {
      $set: update,
      $setOnInsert: { userId: req.user._id, materiId },
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  ).lean();

  res.status(201).json({
    success: true,
    message: 'Riwayat belajar diperbarui',
    data: riwayat,
  });
});

module.exports = { listRiwayat, addRiwayat };
