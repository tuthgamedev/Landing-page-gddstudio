# Panduan Ilustrasi Landing Page GDD Builder

Cara merancang ilustrasi yang konsisten untuk landing page, dari konsep sampai pembuatan.

## 1. Ilustrasikan fungsi produknya, bukan produknya

Kamu tidak perlu menggambar "dokumen" atau "editor" secara harfiah. Ilustrasi referensi tidak menggambar "AI" atau "data". Ia menggambar **kotak masuk, mesin, kotak keluar**, dan dari situ orang paham prosesnya.

Untuk GDD Builder, tanyakan pada diri sendiri: *apa yang berubah dari awal sampai akhir?* Jawabannya: ide yang berantakan menjadi dokumen yang rapi. Maka ceritanya:

**Blok-blok ide (mekanik, karakter, level) → masuk ke mesin → keluar sebagai dokumen GDD.**

## 2. Tentukan aturan gaya dulu, baru menggambar

Ilustrasi terlihat profesional karena konsisten, bukan karena detail. Tulis 5 aturan ini dan patuhi di semua aset:

- **Sudut pandang**: isometrik (miring 30°) atau datar. Pilih satu.
- **Garis**: satu ketebalan, misalnya 2 px, berwarna gelap.
- **Warna**: maksimal 3. Satu warna gelap untuk garis, satu warna terang untuk isian, satu warna aksen (oranye di landing page) hanya untuk bagian yang ingin disorot.
- **Bentuk**: kotak, silinder, dan lembaran saja. Tanpa gradasi atau bayangan rumit.
- **Detail**: satu hal kecil saja per objek (baut, garis putus-putus, atau layar kecil).

## 3. Ide ilustrasi per bagian

| Bagian | Ilustrasi |
| --- | --- |
| **Hero** | Blok ide di jalur menuju mesin, keluar sebagai tumpukan dokumen rapi. Satu blok berwarna oranye (blok yang sedang dibantu AI). |
| **Masalah dan solusi** | Kiri: kertas berserakan dan miring. Kanan: satu dokumen tegak dengan garis rapi. |
| **Fitur utama** | 6 ikon kecil: kerangka halaman (template), blok tersusun (editor), percikan (AI), panah keluar (export), awan (cloud), balon komentar (review). |
| **Cara kerja** | 3 ilustrasi kecil: pilih kartu, tulis, kirim. |
| **CTA akhir** | Potongan kecil dari ilustrasi hero, misalnya hanya mesinnya. |

### Masalah dan solusi: penjelasan ilustrasi dan animasi sentuh

Dua ilustrasi dibuat sebagai pasangan sebelum dan sesudah. Keduanya isometrik datar dengan sudut, garis, dan palet yang sama dengan hero, sehingga pengunjung langsung membandingkan "berantakan" dengan "rapi".

| Sisi | Apa yang digambar | Artinya | Gaya |
| --- | --- | --- | --- |
| Kiri: Tanpa GDD Builder | Lima atau enam lembar kertas tumpang tindih dengan sudut miring berbeda, dua di antaranya melayang dengan bayangan putus-putus, satu kertas diremas, satu baris teks dicoret oranye | Dokumen tercecer, tidak berurutan, dan mudah hilang | Lembar krem dengan garis cokelat tua tipis, bentuk sedikit melengkung agar tidak kaku, oranye hanya untuk coretan |
| Kanan: Dengan GDD Builder | Tumpukan tiga lembar yang sejajar: judul oranye dengan tabel, teks dua kolom, dan gambar | Satu dokumen yang tersusun, tiap bagian punya tempat | Semua lembar memakai sudut isometrik yang sama dengan jarak antar lembar seragam, oranye hanya untuk judul |

**Animasi saat disentuh (30°)**

Saat disentuh (arahkan kursor di komputer, ketuk di ponsel), gerakan mengikuti sumbu isometrik, yaitu garis 30° dari horizontal. Geser sejauh *d* sepanjang sumbu itu berarti bergerak *d* × 0,866 ke samping dan *d* × 0,5 ke bawah. Gerak naik mengikuti sumbu vertikal.

- **Kiri**: tiap lembar bergeser sepanjang sumbu 30° dengan arah berbeda (kanan-bawah atau kiri-bawah) sejauh sekitar 20 px, lalu kembali saat sentuhan dilepas. Kesannya kertas tertiup, jadi kekacauannya terasa nyata.
- **Kanan**: ketiga lembar terpisah ke atas secara bertahap (lembar atas naik sekitar 24 px, tengah 12 px, bawah diam), seperti tampilan bongkar pasang. Pengunjung melihat bahwa dokumen terdiri dari tiga lapis yang tertata. Saat dilepas, lembar kembali menumpuk.
- **Durasi**: sekitar 0,45 detik dengan gerak melambat di akhir, supaya terasa halus dan tidak mengganggu.

```css
.sheet { transition: transform .45s cubic-bezier(.2,.8,.2,1); }
/* kiri: geser 20px sepanjang sumbu 30 derajat */
.scene:hover .a { transform: translate(17px, 10px); }
.scene:hover .b { transform: translate(-17px, 10px); }
/* kanan: lapisan terpisah ke atas */
.stack:hover .l1 { transform: translateY(-24px); }
.stack:hover .l2 { transform: translateY(-12px); }
@media (prefers-reduced-motion: reduce) { .sheet { transition: none; } }
```

Catatan teknis:

- Di ponsel `:hover` tidak andal, jadi tambahkan kelas aktif saat ketukan (`pointerdown`) dan lepas saat `pointerup`.
- Tiap lembar harus berupa grup SVG sendiri (`<g class="sheet a">`). Ilustrasi kiri saat ini masih satu kumpulan bentuk, dan tumpukan kanan masih satu gambar PNG utuh, jadi keduanya perlu digambar ulang sebagai SVG berlapis sebelum animasinya bisa dipasang.

### Cara kerja: gaya isometrik datar dan animasi

Tiga ilustrasi "Cara kerja" paling aman dibuat dengan isometrik datar: satu sudut pandang, warna solid tanpa gradasi, dan satu gerakan kecil yang berulang (loop) per ilustrasi.

**Referensi gaya isometrik datar**

- **Sudut dan grid**: semua objek mengikuti grid isometrik yang sama, dengan titik jangkar jatuh di persimpangan garis grid ([IBM](https://www.ibm.com/design/language/illustration/isometric-style/design)). Antar sumbu x, y, z ada sudut 120°, dan garis sejajar tidak pernah bertemu ([Blue Compass](https://www.bluecompass.com/blog/flat-design-goes-3d-isometric-flat-design)).
- **Bentuk dasar**: bangun objek dari kotak, persegi panjang, lingkaran, dan segitiga. Lengkung memakai seperempat, setengah, atau lingkaran penuh ([IBM](https://www.ibm.com/design/language/illustration/isometric-style/design)).
- **Cahaya**: satu sumber cahaya dan satu gaya bayangan di seluruh ilustrasi ([IBM](https://www.ibm.com/design/language/illustration/isometric-style/design)). Agar tetap "datar", beri tiap objek tiga warna solid: sisi atas terang, kiri sedang, kanan gelap. Ini saranku, sama dengan ilustrasi hero. IBM sendiri masih memakai gradasi, jadi larangan gradasi adalah pilihan kita.
- **Tetap sederhana**: ilustrasi isometrik mudah terlalu ramai karena menampilkan beberapa sisi sekaligus, jadi kurangi detail ([Blue Compass](https://www.bluecompass.com/blog/flat-design-goes-3d-isometric-flat-design)).
- **Cocok untuk**: proses, objek berlapis, dan ikon ([Blue Compass](https://www.bluecompass.com/blog/flat-design-goes-3d-isometric-flat-design)). Ketiganya sesuai dengan kebutuhan bagian ini.

**Animasi tiap ilustrasi**

| Langkah | Ilustrasi | Animasi | Durasi |
| --- | --- | --- | --- |
| 1. Pilih template | Tiga kartu template bertumpuk, satu kartu oranye terangkat | Kartu oranye naik dan turun pelan (melayang) | 4 detik, ulang terus |
| 2. Tulis dengan bantuan AI | Lembar dokumen dengan baris teks, bintang oranye (AI) di sampingnya | Baris teks tergambar satu per satu dari kiri, bintang berkedip lembut | 0,4 detik per baris, jeda 2 detik lalu ulang |
| 3. Export atau bagikan | Dokumen rapi keluar dari kotak ke jalur menuju awan atau tautan | Dokumen meluncur di jalur, garis putus-putus mengalir | 3 detik, ulang terus |

Objek yang melayang memberi kesan ringan dan teratur, dan IBM menyebut hal yang sama untuk gaya isometriknya ([IBM](https://www.ibm.com/design/language/illustration/isometric-style/design)). Saranku: gerak kecil (maksimal sekitar 12 px), lambat, dan satu gerakan utama per ilustrasi.

**Teknik animasi**

- Pakai SVG inline dan animasikan hanya `transform` dan `opacity`, supaya halus dan ringan.
- Garis yang mengalir: `stroke-dasharray` ditambah animasi `stroke-dashoffset`.
- Hormati `prefers-reduced-motion`: matikan animasi untuk pengguna yang memintanya.
- Mulai animasi saat ilustrasi terlihat di layar dan jeda saat di luar layar (IntersectionObserver).
- Untuk tiga loop sederhana cukup CSS. Lottie atau GSAP baru perlu kalau urutannya rumit.

```css
.flow { stroke-dasharray: 6 6; animation: flow 1.2s linear infinite; }
@keyframes flow { to { stroke-dashoffset: -12; } }
.float { animation: float 4s ease-in-out infinite; }
@keyframes float { 50% { transform: translateY(-8px); } }
@media (prefers-reduced-motion: reduce) { .flow, .float { animation: none; } }
```

**Sumber**

- [IBM Design Language: Isometric style](https://www.ibm.com/design/language/illustration/isometric-style/design)
- [Blue Compass: Flat Design Goes 3D: Isometric Flat Design](https://www.bluecompass.com/blog/flat-design-goes-3d-isometric-flat-design)

## 4. Cara membuatnya

Dari yang paling praktis:

1. **Dibuat bersama Claude dalam bentuk SVG.** Versi awal dibuat di chat, lalu direvisi sampai pas. Cocok untuk gaya garis geometris seperti referensi. Keterbatasannya, hasilnya tidak sehalus karya ilustrator, tapi jauh lebih baik daripada placeholder.
2. **Figma, dengan bentuk dasar.** Gambar kotak, putar jadi isometrik, tambahkan garis. Lebih lambat, tapi kendali penuh ada padamu dan bisa diubah kapan saja.
3. **Generator gambar AI.** Cepat, tapi hasilnya sulit konsisten antar gambar dan biasanya berupa PNG, bukan SVG. Cek juga ketentuan lisensi penggunaan komersialnya.
4. **Pesan ke ilustrator.** Hasil terbaik, dan ilustrasi hero yang bagus bisa jadi pembeda produk. Tapi ada biaya, jadi sebaiknya nanti setelah produk berjalan.
5. **Pustaka ilustrasi gratis.** Paling murah, tapi biasanya terlihat generik dan dipakai banyak situs. Periksa lisensinya.

## Saran prioritas

Jangan membuat semuanya sekaligus. Untuk peluncuran awal, cukup **satu ilustrasi hero**, **satu screenshot editor asli**, dan **6 ikon fitur**. Sisanya bisa menyusul. Satu ilustrasi yang kuat lebih berharga daripada sepuluh ilustrasi yang biasa saja.

## Status saat ini

- **Hero**: sudah dibuat sebagai SVG. Konsepnya diubah dari jalur-mesin-dokumen menjadi pusat dengan platform di sekelilingnya (GDD Builder di tengah, terhubung ke Template, AI, Cloud Sync, Review, dan Editor), dengan gaya krem, cokelat tua, dan aksen oranye.
- **Palet landing page**: sudah disesuaikan ke krem, cokelat, dan oranye agar serasi dengan ilustrasi.
- **Berikutnya**: 6 ikon fitur dan ilustrasi bagian masalah-solusi dengan gaya yang sama.

*Catatan: gambar referensi adalah karya pihak lain, jadi gunakan hanya sebagai inspirasi gaya, bukan untuk ditiru persis.*
