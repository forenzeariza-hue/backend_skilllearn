const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema(
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
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    versionKey: false,
  }
);

favoriteSchema.index({ userId: 1, materiId: 1 }, { unique: true });

module.exports = mongoose.model('Favorite', favoriteSchema);
