const { Materi, Kuis, Favorite, Riwayat } = require('../models');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { isObjectId, positiveInt, escapeRegex } = require('../utils/validate');

const list = asyncHandler(async (req, res) => {
  const page = positiveInt(req.query.page, 1, { max: 1000 });
  const limit = positiveInt(req.query.limit, 9, { max: 50 });
  const skip = (page - 1) * limit;

  const filter = {};

  if (req.query.category) {
    filter.category = new RegExp(`^${escapeRegex(req.query.category.trim())}$`, 'i');
  }

  if (req.query.type) {
    filter.type = req.query.type;
  }

  if (req.query.search) {
    const keyword = new RegExp(escapeRegex(req.query.search.trim()), 'i');
    filter.$or = [{ title: keyword }, { description: keyword }, { category: keyword }];
  }

  const [items, total] = await Promise.all([
    Materi.find(filter).sort({ createdAt: 1, _id: 1 }).skip(skip).limit(limit).lean(),
    Materi.countDocuments(filter),
  ]);

  res.json({
    success: true,
    data: items,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit) || 1,
      hasNextPage: skip + items.length < total,
    },
  });
});

const detail = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isObjectId(id)) {
    throw ApiError.badRequest('ID materi tidak valid');
  }

  const materi = await Materi.findById(id).lean();
  if (!materi) {
    throw ApiError.notFound('Materi tidak ditemukan');
  }

  const [kuis, isFavorite] = await Promise.all([
    Kuis.findOne({ materiId: materi._id }).lean(),
    req.user
      ? Favorite.exists({ userId: req.user._id, materiId: materi._id })
      : Promise.resolve(null),
  ]);

  res.json({
    success: true,
    data: {
      ...materi,
      kuis: kuis
        ? { _id: kuis._id, title: kuis.title, passingScore: kuis.passingScore, totalQuestions: kuis.questions.length }
        : null,
      isFavorite: Boolean(isFavorite),
    },
  });
});

const categories = asyncHandler(async (_req, res) => {
  const rows = await Materi.aggregate([
    { $group: { _id: '$category', total: { $sum: 1 } } },
    { $sort: { _id: 1 } },
    { $project: { _id: 0, name: '$_id', total: 1 } },
  ]);

  res.json({ success: true, data: rows });
});

const trending = asyncHandler(async (_req, res) => {
  const rows = await Riwayat.aggregate([
    { $group: { _id: '$materiId', total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 5 },
    {
      $lookup: {
        from: 'materis',
        localField: '_id',
        foreignField: '_id',
        as: 'materi',
      },
    },
    { $unwind: '$materi' },
    { $project: { _id: 0, total: 1, materi: 1 } },
  ]);

  res.json({ success: true, data: rows });
});

module.exports = { list, detail, categories, trending };
