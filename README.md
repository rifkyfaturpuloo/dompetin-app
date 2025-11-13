# DOMPETIN – Sistem Dompet Digital Pribadi
DOMPETIN adalah aplikasi web edukatif buatan siswa SMKN 12 Surabaya (XI PPLG 2) untuk membantu pelajar dan pemula mencatat pemasukan/pengeluaran secara modern. Seluruh data tersimpan aman di browser (localStorage) sehingga tetap privat, bisa dipakai offline, dan selalu siap dibagikan saat diperlukan.

## Apa yang kamu dapat?
- Landing page interaktif yang menjelaskan konsep, manfaat, dan cara kerja DOMPETIN secara ringkas.
- Panel sistem terintegrasi: set budget bulanan, pantau ringkasan realtime, isi form transaksi, dan lihat riwayat terbaru dalam satu halaman.
- Dukungan multi-bahasa (Indonesia & English), mode terang/gelap, serta skip-link dan navigasi responsif yang ramah aksesibilitas.
- Komponen dokumentasi tim & kontak sehingga pengguna tahu siapa pengembangnya dan ke mana harus melapor bug.
- Form kontak siap pakai yang memudahkan pengguna mengirim feedback langsung dari situs.

## Teknologi & arsitektur
- HTML5 semantik dengan struktur section yang jelas (`index.html`).
- CSS modern (Grid/Flex, glassmorphism, animasi halus) di `css/style.css` untuk tampilan profesional di desktop maupun mobile.
- JavaScript murni di `js/app.js` untuk logika budget, formatting Rupiah, tabel transaksi, dan penyimpanan localStorage.
- `js/theme.js` mengatur toggle mode terang/gelap mengikuti preferensi sistem.
- `js/i18n.js` memegang seluruh salinan teks supaya copywriting konsisten dalam dua bahasa.

## Cara pakai singkat
1. Isi budget bulanan sesuai kebutuhanmu lalu simpan.
2. Catat setiap pemasukan/pengeluaran lewat form (tanggal, kategori, tipe, nominal, catatan).
3. Pantau total pemasukan, total pengeluaran, sisa saldo, dan persentase penggunaan yang diperbarui otomatis.
4. Gunakan riwayat transaksi untuk menghapus entri yang tidak diinginkan dan bagikan angka ringkasan saat membuat laporan.

## Status & rencana berikutnya
- ✅ MVP front-end siap demo / hosting statis (GitHub Pages / Vercel).
- 🔜 Pengembangan tambahan: ekspor ke CSV/PDF, kategori kustom, autentikasi multi pengguna, serta integrasi backend bila dibutuhkan.
- SMKN 12 Surabaya, Jawa Timur

