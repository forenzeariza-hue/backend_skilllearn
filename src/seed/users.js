// Akun demo untuk pengujian lokal/produksi.
// Password bisa ditimpa lewat env SEED_USER_PASSWORD agar tidak memakai nilai default.
const password = process.env.SEED_USER_PASSWORD || 'rahasia123';

const seedUsers = [
  {
    name: 'Demo Siswa',
    email: 'demo@skilllearn.test',
    password,
  },
  {
    name: 'Demo Mahasiswa',
    email: 'mahasiswa@skilllearn.test',
    password,
  },
];

module.exports = seedUsers;
