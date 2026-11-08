const mongoose = require('mongoose');

const riwayatSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    materiId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Materi',
      required: true,
      index: true,
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    lastAccessed: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    versionKey: false,
  }
);

riwayatSchema.index({ userId: 1, materiId: 1 }, { unique: true });
riwayatSchema.index({ userId: 1, lastAccessed: -1 });

module.exports = mongoose.model('Riwayat', riwayatSchema);
