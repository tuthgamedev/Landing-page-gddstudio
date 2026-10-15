# Status Implementasi Redesign GDDStudio

**Acuan:** `GDDStudio_Redesign_Design_System_Specification_v1.0.docx`  
**Status:** Perubahan yang dapat dijalankan pada landing page statis telah diterapkan. Integrasi aplikasi dan layanan produksi masih menunggu backend.

## Sudah diimplementasikan

### Identitas visual

- Tema gelap menjadi tema awal, dengan grid halus dan aksen coral/oranye tetap dipertahankan.
- Pengunjung tetap dapat memilih tema terang melalui tombol tema.

### Coba sebelum mendaftar

- CTA utama hero membawa pengunjung ke sandbox tanpa meminta login.
- Pengunjung dapat mengetik ide game dan melihat cuplikan alur inti serta milestone pertama.
- Cuplikan secara eksplisit diberi label contoh lokal, bukan hasil AI.
- Pengunjung dapat kembali menyempurnakan ide atau membuka dialog untuk menyimpan ke ruang kerja.
- Ide sandbox tetap diproses di browser dan tidak dikirim ke layanan luar.

### Interactive Feature Showcase

- Enam tab fitur tetap menampilkan demo visual tanpa login; label pembatasan login pada pratinjau sudah dihapus.
- Perpindahan tab mendukung klik, tombol panah, Home/End, status ARIA, dan animasi panel.
- Navigasi bagian editor dan kartu template pada mockup dapat dicoba langsung tanpa membuka dialog login.
- Showcase mengikuti preferensi reduced motion yang diatur perangkat.

### Pricing dan paket indie

- Paket Starter menjelaskan bahwa proyek arsip bersifat hanya-baca dan tidak mengurangi kuota tiga proyek aktif.
- Tabel perbandingan memuat kebijakan proyek arsip.
- Paket Studio diberi label **“Recommended for indie teams”**. Label rekomendasi dipakai sebagai arahan positioning; belum ada data penggunaan untuk mendukung klaim “Most popular”.

### Pengukuran interaksi

- Halaman mengeluarkan event browser `gdds:metric`: `page_view`, `page_engaged`, `page_exit`, `sandbox_cta_clicked`, `sandbox_started`, `sandbox_teaser_completed`, `feature_preview_selected`, `editor_preview_section_selected`, `template_preview_selected`, `account_cta_clicked`, `public_sample_opened`, `sample_downloaded`, dan `pricing_plan_compared`.
- Event yang membawa properti hanya mengirim kategori seperti nama paket atau format unduhan, bukan teks ide game atau informasi pribadi.
- Event tidak memuat teks ide game atau informasi pribadi dan tidak dikirim ke server. Event ini siap diterima adapter analitik setelah provider dipilih.

## Belum diimplementasikan

Bagian berikut memerlukan aplikasi atau layanan yang tidak ada di repo saat ini. Repo hanya menyediakan `GDDStudio_Landing_Interactive.html` dan panduan ilustrasi; belum ada backend, API, database, autentikasi, billing, atau provider analytics.

- **AI sungguhan:** sandbox menghasilkan contoh deterministik di browser. Perlu layanan/model AI, API aman di server, batas pemakaian anonim, dan perlindungan biaya untuk membuat teaser AI sungguhan.
- **Akun dan sesi:** tombol akun hanya membuka dialog pratinjau. Login, pendaftaran, dan sesi pengguna belum terhubung.
- **Simpan cloud, sinkronisasi, dan ekspor untuk akun:** perlu backend dan penyimpanan dokumen beserta otorisasi pengguna.
- **Arsip proyek yang berfungsi:** landing page menjelaskan kebijakan paket, tetapi belum ada CRUD proyek, status arsip read-only, kuota tiga proyek aktif, pemulihan arsip, atau enforcement paket di server.
- **Pembayaran dan entitlement paket:** harga dan fitur yang tampil belum dikaitkan dengan billing atau pemeriksaan akses.
- **Dashboard analitik:** event hook tersedia, tetapi belum ada provider yang menyimpan event. Karena itu bounce rate, signup conversion, penyelesaian funnel, baseline, dan penggunaan arsip belum dapat dihitung.
- **Validasi keputusan produk:** tim produk perlu mengesahkan harga, fitur final tiap paket, kebijakan jumlah arsip, serta positioning Studio sebelum penawaran dianggap final.

## Alur setelah integrasi backend tersedia

1. Pengunjung mencoba sandbox tanpa akun dan melihat teaser AI yang benar-benar dihasilkan layanan.
2. Pengunjung dapat menyempurnakan konsep secara anonim.
3. Saat memilih simpan cloud, sinkronisasi, atau ekspor, aplikasi meminta login atau pendaftaran.
4. Setelah masuk, backend menerapkan kuota tiga proyek aktif dan aturan arsip read-only sesuai paket.
5. Provider analytics menerima event `gdds:metric`; tim menetapkan baseline sebelum rilis dan mengukur hasil setelah rilis.

## Verifikasi

Perubahan belum diuji atau ditinjau melalui browser pada sesi ini. Setelah backend dan provider analitik tersedia, alur akun, pembuatan AI, penyimpanan/arsip, entitlement, dan pengukuran perlu diverifikasi end-to-end.
