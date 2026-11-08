const data = [
  {
    materi: {
      title: 'Dasar Pemrograman JavaScript untuk Pemula',
      slug: 'dasar-pemrograman-javascript-untuk-pemula',
      category: 'Pemrograman',
      type: 'artikel',
      level: 'pemula',
      description: 'Mengenal variabel, tipe data, fungsi, dan kontrol alur di JavaScript.',
      content:
        'JavaScript adalah bahasa pemrograman yang berjalan di browser maupun server. Pada materi ini kamu akan mempelajari variabel (let/const), tipe data dasar, operator, percabangan if-else, perulangan, dan fungsi. Latihan: buat fungsi yang menghitung total harga belanja dengan diskon.',
      videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
      thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800',
      durationMinutes: 25,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Dasar JavaScript',
      passingScore: 70,
      questions: [
        {
          question: 'Kata kunci untuk mendeklarasikan konstanta di JavaScript adalah?',
          options: ['var', 'let', 'const', 'static'],
          answerIndex: 2,
        },
        {
          question: 'Hasil dari 2 + "3" adalah?',
          options: ['5', '"23"', '23', 'Error'],
          answerIndex: 1,
        },
        {
          question: 'Tipe data untuk nilai benar/salah adalah?',
          options: ['boolean', 'string', 'number', 'object'],
          answerIndex: 0,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Membangun Halaman Web dengan HTML & CSS',
      slug: 'membangun-halaman-web-dengan-html-css',
      category: 'Pemrograman',
      type: 'video',
      level: 'pemula',
      description: 'Menyusun struktur HTML semantik dan menata tampilan dengan CSS.',
      content:
        'Materi ini membahas struktur dokumen HTML, elemen semantik (header, nav, main, section, footer), selector CSS, box model, flexbox, dan cara membuat layout responsif dengan media query.',
      videoUrl: 'https://www.youtube.com/watch?v=qz0aGYrrlhU',
      thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
      durationMinutes: 40,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis HTML & CSS',
      passingScore: 70,
      questions: [
        {
          question: 'Elemen HTML untuk konten utama halaman adalah?',
          options: ['<div>', '<main>', '<section>', '<aside>'],
          answerIndex: 1,
        },
        {
          question: 'Properti CSS untuk mengatur tata letak satu dimensi adalah?',
          options: ['grid', 'flexbox', 'position', 'float'],
          answerIndex: 1,
        },
        {
          question: 'Media query digunakan untuk?',
          options: [
            'Menambah gambar',
            'Membuat layout responsif',
            'Mengubah font',
            'Menyimpan data',
          ],
          answerIndex: 1,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Latihan Membuat CRUD dengan Express & MongoDB',
      slug: 'latihan-membuat-crud-express-mongodb',
      category: 'Pemrograman',
      type: 'latihan',
      level: 'menengah',
      description: 'Praktik membuat REST API CRUD sederhana dengan Express dan Mongoose.',
      content:
        'Pada latihan ini kamu akan membuat model Mongoose, route GET/POST/PUT/DELETE, validasi input, dan menguji endpoint dengan Postman. Target: API to-do list dengan autentikasi sederhana.',
      videoUrl: 'https://www.youtube.com/watch?v=fgTGADljAeg',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      durationMinutes: 60,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Dasar Express & MongoDB',
      passingScore: 75,
      questions: [
        {
          question: 'Method HTTP untuk memperbarui data adalah?',
          options: ['GET', 'POST', 'PUT', 'DELETE'],
          answerIndex: 2,
        },
        {
          question: 'Library ODM untuk MongoDB di Node.js adalah?',
          options: ['Sequelize', 'Mongoose', 'Prisma', 'TypeORM'],
          answerIndex: 1,
        },
        {
          question: 'Status code untuk data berhasil dibuat adalah?',
          options: ['200', '201', '204', '400'],
          answerIndex: 1,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Prinsip Dasar Desain Grafis dan Komposisi',
      slug: 'prinsip-dasar-desain-grafis-dan-komposisi',
      category: 'Desain Grafis',
      type: 'artikel',
      level: 'pemula',
      description: 'Memahami keseimbangan, kontras, hierarki, dan komposisi visual.',
      content:
        'Materi ini menjelaskan elemen dasar desain (garis, bentuk, warna, tekstur) dan prinsip komposisi (keseimbangan, kontras, hierarki, repetisi, whitespace). Kamu akan menganalisis contoh poster untuk melihat penerapannya.',
      videoUrl: 'https://www.youtube.com/watch?v=YqQx75OPRa0',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      durationMinutes: 20,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Prinsip Desain',
      passingScore: 70,
      questions: [
        {
          question: 'Prinsip yang membuat mata fokus ke elemen utama disebut?',
          options: ['Repetisi', 'Hierarki', 'Simetri', 'Tekstur'],
          answerIndex: 1,
        },
        {
          question: 'Ruang kosong di sekitar elemen desain disebut?',
          options: ['Grid', 'Margin', 'Whitespace', 'Border'],
          answerIndex: 2,
        },
        {
          question: 'Kontras biasanya dihasilkan dari perbedaan?',
          options: ['Ukuran file', 'Warna dan nilai', 'Format gambar', 'Jumlah layer'],
          answerIndex: 1,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Belajar Adobe Photoshop: Seleksi dan Masking',
      slug: 'belajar-adobe-photoshop-seleksi-dan-masking',
      category: 'Desain Grafis',
      type: 'video',
      level: 'menengah',
      description: 'Teknik seleksi objek dan masking untuk komposit foto.',
      content:
        'Video ini membahas use of Magic Wand, Quick Selection, Pen Tool, layer mask, dan clipping mask. Di akhir sesi terdapat latihan menggabungkan dua foto menjadi satu komposisi natural.',
      videoUrl: 'https://www.youtube.com/watch?v=fE1_nHllIp8',
      thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800',
      durationMinutes: 45,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Photoshop Dasar',
      passingScore: 70,
      questions: [
        {
          question: 'Layer mask menggunakan warna apa untuk menyembunyikan area?',
          options: ['Putih', 'Hitam', 'Merah', 'Biru'],
          answerIndex: 1,
        },
        {
          question: 'Tool untuk seleksi manual berbasis titik dan kurva adalah?',
          options: ['Lasso', 'Pen Tool', 'Eraser', 'Brush'],
          answerIndex: 1,
        },
        {
          question: 'Format file yang mendukung layer adalah?',
          options: ['JPG', 'PNG', 'PSD', 'GIF'],
          answerIndex: 2,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Latihan Mendesain Poster Event dengan Figma',
      slug: 'latihan-mendesain-poster-event-figma',
      category: 'Desain Grafis',
      type: 'latihan',
      level: 'pemula',
      description: 'Praktik membuat poster acara lengkap dengan tipografi dan grid.',
      content:
        'Latihan membuat poster ukuran A3 di Figma: menyusun grid 12 kolom, memilih pasangan tipografi, membuat komponen tombol, dan mengekspor ke PDF/PNG. Sertakan hasil export di dokumen tugas.',
      videoUrl: 'https://www.youtube.com/watch?v=5OrsHJQ8fTY',
      thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
      durationMinutes: 50,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Dasar Figma',
      passingScore: 70,
      questions: [
        {
          question: 'Fitur Figma untuk membuat elemen yang dapat digunakan ulang adalah?',
          options: ['Frame', 'Component', 'Slice', 'Effect'],
          answerIndex: 1,
        },
        {
          question: 'Shortcut untuk menduplikasi objek adalah?',
          options: ['Ctrl/Cmd + D', 'Ctrl/Cmd + G', 'Ctrl/Cmd + R', 'Ctrl/Cmd + T'],
          answerIndex: 0,
        },
        {
          question: 'Fitur untuk membuat halaman saling terhubung menjadi prototype adalah?',
          options: ['Auto layout', 'Prototype', 'Constraints', 'Styles'],
          answerIndex: 1,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Dasar Digital Marketing untuk Pemula',
      slug: 'dasar-digital-marketing-untuk-pemula',
      category: 'Digital Marketing',
      type: 'artikel',
      level: 'pemula',
      description: 'Mengenal funnel marketing, channel digital, dan metrik utama.',
      content:
        'Materi ini membahas perbedaan organic dan paid channel, tahapan funnel (awareness, consideration, conversion, retention), serta metrik seperti CTR, CPC, CPA, dan ROAS.',
      videoUrl: 'https://www.youtube.com/watch?v=nU-IIXBWlS4',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      durationMinutes: 30,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Dasar Digital Marketing',
      passingScore: 70,
      questions: [
        {
          question: 'CPA adalah singkatan dari?',
          options: ['Cost Per Action', 'Click Per Ad', 'Content Per Audience', 'Conversion Page Analytics'],
          answerIndex: 0,
        },
        {
          question: 'Tahap funnel ketika pengguna baru mengenal brand adalah?',
          options: ['Awareness', 'Consideration', 'Conversion', 'Retention'],
          answerIndex: 0,
        },
        {
          question: 'Metrik persentase klik dari total impresi adalah?',
          options: ['CPC', 'CTR', 'ROAS', 'CPM'],
          answerIndex: 1,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Optimasi Instagram Ads untuk UMKM',
      slug: 'optimasi-instagram-ads-untuk-umkm',
      category: 'Digital Marketing',
      type: 'video',
      level: 'menengah',
      description: 'Setup campaign, targeting, dan evaluasi iklan Instagram.',
      content:
        'Video membahas struktur campaign-ad set-ads, tujuan kampanye, audiens kustom, penempatan, budget harian, serta cara membaca hasil dan melakukan A/B test kreatif.',
      videoUrl: 'https://www.youtube.com/watch?v=q7W4hgLb2mE',
      thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800',
      durationMinutes: 35,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Instagram Ads',
      passingScore: 70,
      questions: [
        {
          question: 'Urutan struktur kampanye Meta Ads yang benar adalah?',
          options: [
            'Ad Set - Campaign - Ads',
            'Campaign - Ad Set - Ads',
            'Ads - Campaign - Ad Set',
            'Campaign - Ads - Ad Set',
          ],
          answerIndex: 1,
        },
        {
          question: 'Tujuan kampanye untuk mendapatkan pesan masuk adalah?',
          options: ['Traffic', 'Engagement', 'Messages', 'Reach'],
          answerIndex: 2,
        },
        {
          question: 'A/B test digunakan untuk?',
          options: [
            'Menghapus iklan',
            'Membandingkan dua variasi',
            'Menambah budget',
            'Mengubah akun',
          ],
          answerIndex: 1,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Latihan Menyusun Konten Kalender Media Sosial',
      slug: 'latihan-menyusun-konten-kalender-media-sosial',
      category: 'Digital Marketing',
      type: 'latihan',
      level: 'pemula',
      description: 'Membuat kalender konten 30 hari dengan pilar konten.',
      content:
        'Latihan menyusun kalender konten 30 hari: menentukan 3-4 pilar konten, menentukan format (carousel, reels, story), menulis caption dengan hook, serta menyusun jadwal posting mingguan.',
      videoUrl: 'https://www.youtube.com/watch?v=43pg1XX9YnU',
      thumbnail: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800',
      durationMinutes: 55,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Kalender Konten',
      passingScore: 70,
      questions: [
        {
          question: 'Pilar konten berfungsi untuk?',
          options: [
            'Menentukan tema utama konten',
            'Mengatur budget iklan',
            'Menghitung followers',
            'Membuat logo',
          ],
          answerIndex: 0,
        },
        {
          question: 'Bagian caption untuk menarik perhatian di awal disebut?',
          options: ['CTA', 'Hook', 'Hashtag', 'Bio'],
          answerIndex: 1,
        },
        {
          question: 'Kalender konten sebaiknya dibuat untuk periode?',
          options: ['1 hari', '1 minggu hingga 1 bulan', '1 tahun', '5 tahun'],
          answerIndex: 1,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Pengenalan Kecerdasan Artifisial dan Machine Learning',
      slug: 'pengenalan-kecerdasan-artifisial-dan-machine-learning',
      category: 'Teknologi',
      type: 'artikel',
      level: 'pemula',
      description: 'Konsep AI, ML, supervised vs unsupervised, dan contoh penerapan.',
      content:
        'Materi ini menjelaskan perbedaan AI, machine learning, dan deep learning; jenis pembelajaran (supervised, unsupervised, reinforcement); serta contoh penerapan seperti rekomendasi produk dan klasifikasi gambar.',
      videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      durationMinutes: 28,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Dasar AI',
      passingScore: 70,
      questions: [
        {
          question: 'Machine learning dengan data berlabel disebut?',
          options: ['Unsupervised', 'Supervised', 'Reinforcement', 'Clustering'],
          answerIndex: 1,
        },
        {
          question: 'Contoh penerapan AI di e-commerce adalah?',
          options: ['Pencetakan struk', 'Rekomendasi produk', 'Pengiriman paket', 'Pembuatan nota'],
          answerIndex: 1,
        },
        {
          question: 'Deep learning menggunakan struktur?',
          options: ['Neural network', 'Spreadsheet', 'Database relasional', 'Queue'],
          answerIndex: 0,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Dasar Keamanan Siber untuk Mahasiswa',
      slug: 'dasar-keamanan-siber-untuk-mahasiswa',
      category: 'Teknologi',
      type: 'video',
      level: 'pemula',
      description: 'Password kuat, autentikasi dua faktor, dan phishing.',
      content:
        'Video membahas ancaman umum (phishing, malware, social engineering), cara membuat password kuat, mengaktifkan 2FA, serta kebiasaan aman saat menggunakan Wi-Fi publik.',
      videoUrl: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
      durationMinutes: 32,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Keamanan Siber',
      passingScore: 75,
      questions: [
        {
          question: 'Email palsu yang meminta data pribadi disebut?',
          options: ['Spam', 'Phishing', 'Firewall', 'Backup'],
          answerIndex: 1,
        },
        {
          question: '2FA berarti?',
          options: [
            'Two-Factor Authentication',
            'Two-File Access',
            'Transfer File Aman',
            'Two-Function App',
          ],
          answerIndex: 0,
        },
        {
          question: 'Kebiasaan aman memakai Wi-Fi publik adalah?',
          options: [
            'Membuka semua akun',
            'Menggunakan VPN',
            'Mematikan antivirus',
            'Berbagi password',
          ],
          answerIndex: 1,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Latihan Deploy Aplikasi ke Vercel',
      slug: 'latihan-deploy-aplikasi-ke-vercel',
      category: 'Teknologi',
      type: 'latihan',
      level: 'menengah',
      description: 'Praktik deploy frontend React dan API serverless ke Vercel.',
      content:
        'Latihan: menyiapkan repo, menghubungkan ke Vercel, mengatur environment variable, menulis vercel.json untuk rewrite /api, serta menguji endpoint produksi dan mengatur domain.',
      videoUrl: 'https://www.youtube.com/watch?v=IeM1PGqmJT4',
      thumbnail: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800',
      durationMinutes: 40,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Deploy ke Vercel',
      passingScore: 70,
      questions: [
        {
          question: 'File konfigurasi routing di Vercel adalah?',
          options: ['vercel.json', 'package-lock.json', '.vercelignore', 'next.config.js'],
          answerIndex: 0,
        },
        {
          question: 'Environment variable di Vercel diatur di?',
          options: ['Project Settings', 'package.json', 'index.html', 'README.md'],
          answerIndex: 0,
        },
        {
          question: 'Serverless function di Vercel disimpan di folder?',
          options: ['/src', '/api', '/public', '/static'],
          answerIndex: 1,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Kuis Pemantapan Dasar Pemrograman',
      slug: 'kuis-pemantapan-dasar-pemrograman',
      category: 'Pemrograman',
      type: 'kuis',
      level: 'pemula',
      description: 'Uji pemahaman variabel, fungsi, dan alur logika dasar pemrograman.',
      content:
        'Kuis pemantapan untuk mengukur pemahaman dasar pemrograman: variabel, tipe data, operator, percabangan, dan fungsi. Kerjakan tanpa melihat catatan untuk hasil yang akurat.',
      videoUrl: '',
      thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
      durationMinutes: 15,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Pemantapan Pemrograman',
      passingScore: 70,
      questions: [
        {
          question: 'Struktur yang menjalankan blok kode berulang selama kondisi benar adalah?',
          options: ['if', 'while', 'switch', 'function'],
          answerIndex: 1,
        },
        {
          question: 'Nilai yang dikembalikan fungsi di JavaScript menggunakan kata kunci?',
          options: ['break', 'return', 'yield', 'throw'],
          answerIndex: 1,
        },
        {
          question: 'Operator untuk membandingkan nilai dan tipe sekaligus adalah?',
          options: ['==', '=', '===', '!='],
          answerIndex: 2,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Kuis Pemantapan Teori Warna dan Tipografi',
      slug: 'kuis-pemantapan-teori-warna-dan-tipografi',
      category: 'Desain Grafis',
      type: 'kuis',
      level: 'pemula',
      description: 'Uji pemahaman harmoni warna, kontras, dan pemilihan tipografi.',
      content:
        'Kuis ini menguji pemahaman roda warna, skema warna (analogus, komplementer, triadik), serta prinsip keterbacaan tipografi pada desain digital maupun cetak.',
      videoUrl: '',
      thumbnail: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800',
      durationMinutes: 15,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Teori Warna & Tipografi',
      passingScore: 70,
      questions: [
        {
          question: 'Warna yang berseberangan pada roda warna disebut?',
          options: ['Analogus', 'Komplementer', 'Monokromatik', 'Triadik'],
          answerIndex: 1,
        },
        {
          question: 'Tingkat keterbacaan teks paling dipengaruhi oleh?',
          options: ['Jumlah kata', 'Kontras teks dan latar', 'Ukuran file', 'Jumlah layer'],
          answerIndex: 1,
        },
        {
          question: 'Pasangan tipografi yang aman untuk judul dan isi adalah?',
          options: [
            'Dua font dekoratif',
            'Font tebal untuk judul, font netral untuk isi',
            'Semua huruf kapital',
            'Satu font dengan semua ukuran sama',
          ],
          answerIndex: 1,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Kuis Pemantapan Strategi Digital Marketing',
      slug: 'kuis-pemantapan-strategi-digital-marketing',
      category: 'Digital Marketing',
      type: 'kuis',
      level: 'menengah',
      description: 'Uji pemahaman funnel, metrik iklan, dan evaluasi kampanye.',
      content:
        'Kuis ini menguji pemahaman funnel pemasaran, pemilihan tujuan kampanye, metrik utama (CTR, CPC, CPA, ROAS), serta cara mengevaluasi hasil kampanye digital.',
      videoUrl: '',
      thumbnail: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800',
      durationMinutes: 15,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Strategi Digital Marketing',
      passingScore: 75,
      questions: [
        {
          question: 'ROAS mengukur?',
          options: [
            'Perbandingan pendapatan terhadap biaya iklan',
            'Jumlah klik',
            'Jumlah tayangan',
            'Kecepatan situs',
          ],
          answerIndex: 0,
        },
        {
          question: 'Kampanye dengan tujuan awareness sebaiknya diukur dengan?',
          options: ['CPA', 'Reach dan impresi', 'ROAS', 'Bounce rate'],
          answerIndex: 1,
        },
        {
          question: 'Langkah pertama evaluasi kampanye adalah?',
          options: [
            'Menghapus iklan',
            'Membandingkan hasil dengan target/KPI',
            'Mengganti akun',
            'Menambah budget',
          ],
          answerIndex: 1,
        },
      ],
    },
  },
  {
    materi: {
      title: 'Kuis Pemantapan Dasar Teknologi & Keamanan',
      slug: 'kuis-pemantapan-dasar-teknologi-dan-keamanan',
      category: 'Teknologi',
      type: 'kuis',
      level: 'pemula',
      description: 'Uji pemahaman konsep AI, komputasi awan, dan keamanan data.',
      content:
        'Kuis pemantapan yang mencakup konsep dasar AI dan machine learning, model layanan cloud (IaaS, PaaS, SaaS), serta praktik keamanan data pribadi.',
      videoUrl: '',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      durationMinutes: 15,
      author: 'Tim SkillLearn',
    },
    kuis: {
      title: 'Kuis Dasar Teknologi & Keamanan',
      passingScore: 70,
      questions: [
        {
          question: 'Layanan yang menyediakan platform siap pakai untuk developer disebut?',
          options: ['IaaS', 'PaaS', 'SaaS', 'DaaS'],
          answerIndex: 1,
        },
        {
          question: 'Data yang di-hash dengan baik bersifat?',
          options: ['Dapat dibalik', 'Satu arah', 'Selalu sama panjang nol', 'Tidak aman'],
          answerIndex: 1,
        },
        {
          question: 'Enkripsi berfungsi untuk?',
          options: [
            'Mempercepat internet',
            'Menjaga kerahasiaan data',
            'Menambah kapasitas',
            'Menghapus data',
          ],
          answerIndex: 1,
        },
      ],
    },
  },
];

module.exports = data;
