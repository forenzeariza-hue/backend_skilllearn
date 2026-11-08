const mongoose = require('mongoose');

const MATERI_TYPES = ['artikel', 'video', 'kuis', 'latihan'];

const materiSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Judul wajib diisi'],
      trim: true,
      maxlength: 160,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    category: {
      type: String,
      required: [true, 'Kategori wajib diisi'],
      trim: true,
      index: true,
    },
    type: {
      type: String,
      enum: MATERI_TYPES,
      default: 'artikel',
      index: true,
    },
    level: {
      type: String,
      enum: ['pemula', 'menengah', 'lanjutan'],
      default: 'pemula',
    },
    description: {
      type: String,
      required: [true, 'Deskripsi wajib diisi'],
      trim: true,
      maxlength: 500,
    },
    content: {
      type: String,
      default: '',
    },
    videoUrl: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: String,
      default: '',
    },
    durationMinutes: {
      type: Number,
      default: 0,
      min: 0,
    },
    author: {
      type: String,
      default: 'Tim SkillLearn',
      trim: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    versionKey: false,
  }
);

materiSchema.index({ title: 'text', description: 'text', content: 'text' });
materiSchema.index({ category: 1, type: 1 });

materiSchema.statics.MATERI_TYPES = MATERI_TYPES;

module.exports = mongoose.model('Materi', materiSchema);
