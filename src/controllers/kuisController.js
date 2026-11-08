const { Kuis, Materi, QuizAttempt, Riwayat } = require('../models');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { isObjectId } = require('../utils/validate');

const getKuis = asyncHandler(async (req, res) => {
  const { materiId } = req.params;
  if (!isObjectId(materiId)) {
    throw ApiError.badRequest('ID materi tidak valid');
  }

  const kuis = await Kuis.findOne({ materiId }).lean();
  if (!kuis) {
    throw ApiError.notFound('Kuis untuk materi ini tidak ditemukan');
  }

  res.json({
    success: true,
    data: {
      _id: kuis._id,
      materiId: kuis.materiId,
      title: kuis.title,
      passingScore: kuis.passingScore,
      questions: kuis.questions.map((question) => ({
        question: question.question,
        options: question.options,
      })),
    },
  });
});

const submitKuis = asyncHandler(async (req, res) => {
  const { materiId } = req.params;
  if (!isObjectId(materiId)) {
    throw ApiError.badRequest('ID materi tidak valid');
  }

  const kuis = await Kuis.findOne({ materiId });
  if (!kuis) {
    throw ApiError.notFound('Kuis untuk materi ini tidak ditemukan');
  }

  const { answers } = req.body;
  if (!Array.isArray(answers)) {
    throw ApiError.badRequest('answers wajib berupa array');
  }
  if (answers.length !== kuis.questions.length) {
    throw ApiError.badRequest(`answers harus berisi ${kuis.questions.length} jawaban`);
  }

  let correctCount = 0;
  const normalizedAnswers = kuis.questions.map((question, index) => {
    const answer = answers[index];
    if (!Number.isInteger(answer) || answer < 0 || answer >= question.options.length) {
      throw ApiError.badRequest(
        `Jawaban pertanyaan ke-${index + 1} harus berupa indeks opsi 0-${question.options.length - 1}`
      );
    }
    const isCorrect = answer === question.answerIndex;
    if (isCorrect) correctCount += 1;
    return answer;
  });

  const totalQuestions = kuis.questions.length;
  const score = Math.round((correctCount / totalQuestions) * 100);
  const passed = score >= kuis.passingScore;

  const attempt = await QuizAttempt.create({
    userId: req.user._id,
    materiId,
    quizId: kuis._id,
    score,
    correctCount,
    totalQuestions,
    passed,
    answers: normalizedAnswers,
  });

  const updateSet = { lastAccessed: new Date() };
  const insertDefaults = { userId: req.user._id, materiId, progress: 0, completed: false };

  if (passed) {
    updateSet.completed = true;
    updateSet.progress = 100;
    delete insertDefaults.progress;
    delete insertDefaults.completed;
  }

  await Riwayat.findOneAndUpdate(
    { userId: req.user._id, materiId },
    { $set: updateSet, $setOnInsert: insertDefaults },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  res.status(201).json({
    success: true,
    message: 'Kuis berhasil dikumpulkan',
    data: {
      attemptId: attempt._id,
      score,
      correctCount,
      totalQuestions,
      passed,
      passingScore: kuis.passingScore,
    },
  });
});

const historyKuis = asyncHandler(async (req, res) => {
  const items = await QuizAttempt.find({ userId: req.user._id })
    .sort({ createdAt: -1 })
    .limit(50)
    .populate('materiId', 'title slug category')
    .lean();

  res.json({ success: true, data: items });
});

module.exports = { getKuis, submitKuis, historyKuis };
