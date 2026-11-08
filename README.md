# SkillLearn — Backend API

REST API untuk platform SkillLearn. Node.js + Express.js + MongoDB (Mongoose), siap deploy sebagai Vercel serverless function.

## Menjalankan Lokal

```bash
cd backend
npm install
cp .env.example .env      # sesuaikan MONGO_URI & JWT_SECRET
npm run seed              # isi 16 materi + kuis + 2 akun demo (idempotent)
npm run dev               # http://localhost:5000/api
```

Butuh MongoDB lokal (`mongod`) atau MongoDB Atlas. Jika memakai Atlas, isi `MONGO_URI` dengan connection string Atlas.

### Akun demo (dibuat oleh `npm run seed`)

| Email | Password |
|-------|----------|
| `demo@skilllearn.test` | `rahasia123` |
| `mahasiswa@skilllearn.test` | `rahasia123` |

Password di-hash bcrypt saat seed (lewat hook `pre('save')` pada model `User`). Ganti password dengan env saat seeding:

```bash
SEED_USER_PASSWORD="PasswordKuat123" npm run seed:users
```

`seed:users` hanya mengurus user (materi tidak disentuh) dan **me-reset** password akun demo ke nilai terbaru — berguna setelah deploy ke Atlas. Akun demo ini untuk pengujian; hapus/timpa sebelum dipakai publik.

## Perintah

| Perintah | Keterangan |
|----------|-----------|
| `npm run dev` | Jalankan server dengan watch mode |
| `npm start` | Jalankan server produksi |
| `npm run seed` | Seed idempotent — 16 materi, 4 kategori, 16 kuis, 2 akun demo |
| `npm run seed:reset` | Seed + hapus materi di luar data seed |
| `npm run seed:users` | Seed/reset akun demo saja (materi tidak disentuh) |

## Struktur

```
backend/
├── api/index.js              # entry Vercel serverless
├── vercel.json               # rewrite /api/* → api/index.js
└── src/
    ├── app.js                # express app + middleware global
    ├── server.js             # entry lokal
    ├── config/{env,db}.js    # env + koneksi MongoDB ter-cache
    ├── models/               # users, materis, kuis, favorites, riwayats, quizAttempts
    ├── controllers/          # auth, materi, favorite, riwayat, kuis
    ├── routes/               # router per resource
    ├── middleware/           # auth JWT, ensureDb, error handler
    ├── utils/                # ApiError, asyncHandler, validasi
    └── seed/                 # data.js + seed.js
```

## Endpoint

Base URL: `/api`

| Method | Path | Auth | Keterangan |
|--------|------|------|-----------|
| GET | `/health` | — | Cek status API |
| POST | `/auth/register` | — | Registrasi (`name, email, password`) |
| POST | `/auth/login` | — | Login (`email, password`) |
| GET | `/auth/me` | JWT | Profil pengguna |
| GET | `/materi` | — | List materi (`category, type, search, page, limit`) |
| GET | `/materi/categories` | — | Daftar kategori + jumlah materi |
| GET | `/materi/trending` | — | 5 materi paling sering diakses |
| GET | `/materi/:id` | opsional | Detail materi + ringkasan kuis + `isFavorite` |
| GET | `/favorites` | JWT | Daftar favorit |
| POST | `/favorites/:materiId` | JWT | Tambah favorit (idempotent) |
| DELETE | `/favorites/:materiId` | JWT | Hapus favorit |
| GET | `/riwayat` | JWT | Riwayat belajar (terbaru dulu) |
| POST | `/riwayat/:materiId` | JWT | Update riwayat (`progress`, `completed`) |
| GET | `/kuis/:materiId` | — | Soal kuis (tanpa kunci jawaban) |
| POST | `/kuis/:materiId/submit` | JWT | Submit jawaban, skor dihitung server |
| GET | `/kuis/history` | JWT | Riwayat percobaan kuis |

Format respons: `{ success, message?, data?, meta?, details? }`.

Header auth: `Authorization: Bearer <token>`.

## Deploy ke Vercel

1. Import folder `backend` sebagai project Vercel (root directory = `backend`).
2. Set env: `MONGO_URI`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `CORS_ORIGIN`.
3. Deploy. Semua request `/api/*` diarahkan ke `api/index.js`.
4. Koneksi MongoDB di-cache di `src/config/db.js` (aman untuk serverless warm instance).
