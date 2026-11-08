const mongoose = require('mongoose');
const env = require('../config/env');
const { Materi, Kuis, User } = require('../models');
const seedData = require('./data');
const seedUsers = require('./users');

async function seedUsersData({ resetUsers }) {
  let created = 0;
  let skipped = 0;
  let reset = 0;

  for (const item of seedUsers) {
    const email = item.email.toLowerCase();
    const existing = await User.findOne({ email }).select('+password');

    if (!existing) {
      // Wajib lewat save() agar hook pre('save') melakukan hashing password.
      await User.create({ name: item.name, email, password: item.password });
      created += 1;
      continue;
    }

    if (resetUsers) {
      existing.name = item.name;
      existing.password = item.password;
      await existing.save();
      reset += 1;
    } else {
      skipped += 1;
    }
  }

  const total = await User.countDocuments();
  console.log(
    `[seed] user: ${created} dibuat, ${reset} direset, ${skipped} dilewati | total ${total} user`
  );

  if (created > 0 || reset > 0) {
    console.log('[seed] akun demo:');
    seedUsers.forEach((item) => console.log(`         ${item.email} / ${item.password}`));
  }
}

async function run() {
  const reset = process.argv.includes('--reset');
  const resetUsers = process.argv.includes('--reset-users') || reset;

  await mongoose.connect(env.mongoUri);
  console.log(`[seed] terhubung ke ${mongoose.connection.name}`);

  let created = 0;
  let updated = 0;

  for (const item of seedData) {
    const { materi, kuis } = item;

    const doc = await Materi.findOneAndUpdate(
      { slug: materi.slug },
      { $set: materi, $setOnInsert: { createdAt: new Date() } },
      { upsert: true, new: true, setDefaultsOnInsert: true, includeResultMetadata: true }
    );

    const materiDoc = doc.value;
    if (doc.lastErrorObject && doc.lastErrorObject.updatedExisting) {
      updated += 1;
    } else {
      created += 1;
    }

    await Kuis.findOneAndUpdate(
      { materiId: materiDoc._id },
      { $set: { ...kuis, materiId: materiDoc._id } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
  }

  if (reset) {
    const slugs = seedData.map((item) => item.materi.slug);
    const removed = await Materi.deleteMany({ slug: { $nin: slugs } });
    if (removed.deletedCount) {
      console.log(`[seed] menghapus ${removed.deletedCount} materi di luar data seed`);
    }
  }

  await seedUsersData({ resetUsers });

  const totalMateri = await Materi.countDocuments();
  const totalKuis = await Kuis.countDocuments();
  const categories = await Materi.distinct('category');

  console.log(
    `[seed] selesai: ${created} dibuat, ${updated} diperbarui | total ${totalMateri} materi, ${totalKuis} kuis`
  );
  console.log(`[seed] kategori: ${categories.join(', ')}`);

  await mongoose.disconnect();
}

run().catch(async (error) => {
  console.error('[seed] gagal:', error.message);
  await mongoose.disconnect().catch(() => {});
  process.exit(1);
});
