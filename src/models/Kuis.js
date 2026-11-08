const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'Pertanyaan wajib diisi'],
      trim: true,
    },
    options: {
      type: [String],
      validate: {
        validator: (options) => Array.isArray(options) && options.length >= 2,
        message: 'Minimal 2 opsi jawaban',
      },
    },
    answerIndex: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: false }
);

const kuisSchema = new mongoose.Schema(
  {
    materiId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Materi',
      required: true,
      unique: true,
      index: true,
    },
    title: {
      type: String,
      required: [true, 'Judul kuis wajib diisi'],
      trim: true,
    },
    passingScore: {
      type: Number,
      default: 70,
      min: 0,
      max: 100,
    },
    questions: {
      type: [questionSchema],
      validate: {
        validator: (questions) => Array.isArray(questions) && questions.length > 0,
        message: 'Kuis minimal punya 1 pertanyaan',
      },
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    versionKey: false,
  }
);

module.exports = mongoose.model('Kuis', kuisSchema, 'kuis');
