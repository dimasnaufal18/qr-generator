# QR Generator

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**QR Generator** adalah tool web sederhana untuk membuat **QR Code** dari teks, URL, atau informasi lainnya. QR Code dapat dikustomisasi dari segi ukuran serta warna, kemudian hasilnya dapat langsung disimpan dalam format **PNG**.

Tool ini dibuat menggunakan **HTML, CSS, JavaScript**, dan library **qrcode.js**. Tidak membutuhkan proses instalasi sehingga dapat langsung digunakan melalui browser.

---

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Cara Pakai](#cara-pakai)
- [Contoh](#contoh)
- [Struktur Project](#struktur-project)
- [Live Demo](#live-demo)
- [Troubleshooting](#troubleshooting)
- [Kontribusi](#kontribusi)
- [Author](#author)
- [Lisensi](#lisensi)

---

## Fitur

- Generate QR Code dari **teks atau URL**
- Mengatur ukuran QR Code dari **200–500 px**
- Mengatur **warna QR Code**
- Mengatur **warna background**
- Download hasil QR Code sebagai **PNG**
- Tampilan **responsif** untuk mobile dan desktop
- Tidak perlu instalasi, cukup **buka di browser**
- Menggunakan **error correction level tinggi (H)** untuk membantu QR Code tetap dapat terbaca meskipun mengalami kerusakan ringan

---

## Teknologi

Project ini menggunakan teknologi berikut:

| Teknologi | Keterangan |
|---|---|
| **HTML5** | Membuat struktur halaman web |
| **CSS3** | Mengatur tampilan, layout, dan responsivitas |
| **JavaScript** | Menangani proses generate dan download QR Code |
| **qrcode.js** | Library untuk menghasilkan QR Code |
| **Web Browser** | Menjalankan aplikasi tanpa instalasi tambahan |

Library yang digunakan:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
```

---

## Cara Pakai

Karena aplikasi berjalan langsung di browser, tidak diperlukan instalasi atau konfigurasi khusus.

### 1. Clone Repository

Jika project tersedia di GitHub, clone repository dengan:

```bash
git clone https://github.com/dimasnaufal18/qr-generator.git
```

Masuk ke folder project:

```bash
cd qr-generator
```

### 2. Buka Project

Buka file berikut menggunakan browser:

```text
index.html
```

Anda dapat menggunakan Google Chrome, Microsoft Edge, Mozilla Firefox, atau browser modern lainnya.

### 3. Masukkan Teks atau URL

Masukkan teks, URL, atau informasi yang ingin dibuat menjadi QR Code pada textarea.

Contoh:

```text
https://github.com/dimasnaufal18
```

### 4. Atur QR Code

Jika diperlukan, Anda dapat mengatur:

- Ukuran QR Code antara **200–500 px**
- Warna QR Code
- Warna background

### 5. Generate QR Code

Klik tombol:

```text
Generate QR
```

QR Code akan dibuat secara otomatis berdasarkan data yang dimasukkan.

### 6. Download

Jika QR Code sudah sesuai, klik:

```text
Download PNG
```

Hasil QR Code akan tersimpan sebagai file gambar PNG.

---

## Contoh

### Contoh Input

```text
https://github.com/dimasnaufal18
```

### Contoh Penggunaan

Misalnya Anda ingin membuat QR Code untuk membagikan profil GitHub. Masukkan URL berikut ke dalam textarea:

```text
https://github.com/dimasnaufal18
```

Kemudian:

1. Pilih ukuran QR Code, misalnya **300 px**.
2. Atur warna QR Code jika diperlukan.
3. Atur warna background jika diperlukan.
4. Klik **Generate QR**.
5. Klik **Download PNG** untuk menyimpan hasilnya.

> **Tips:** Gunakan kombinasi warna yang memiliki kontras cukup tinggi agar QR Code tetap mudah dipindai oleh kamera atau aplikasi pembaca QR.

---

## Struktur Project

Struktur folder project adalah sebagai berikut:

```text
qr-generator/
├── index.html
├── style.css
├── script.js
├── README.md
└── LICENSE
```

### Penjelasan File

| File | Fungsi |
|---|---|
| `index.html` | Struktur utama halaman aplikasi |
| `style.css` | Styling dan responsive layout |
| `script.js` | Logika generate dan download QR Code |
| `README.md` | Dokumentasi project |
| `LICENSE` | Informasi lisensi MIT |

---

## Live Demo

Project ini dapat dijalankan langsung melalui browser setelah repository dipublikasikan menggunakan GitHub Pages atau layanan hosting statis lainnya.

**Live Demo:**

> Belum tersedia. Setelah project di-deploy, tambahkan URL Live Demo di bagian ini.

Contoh:

```text
https://dimasnaufal18.github.io/qr-generator/
```

Jika menggunakan **GitHub Pages**, pastikan file `index.html` berada pada lokasi yang sesuai dan Pages telah diaktifkan pada repository.

---

## Troubleshooting

### QR Code Tidak Muncul

Pastikan:

- Textarea tidak kosong.
- Browser yang digunakan merupakan browser modern.
- Library `qrcode.js` berhasil dimuat.
- Koneksi internet tersedia jika library digunakan melalui CDN.

Jika menggunakan CDN, periksa bagian berikut pada `index.html`:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
```

### Tombol Download Tidak Berfungsi

Pastikan QR Code sudah berhasil dibuat sebelum menekan tombol **Download PNG**.

Coba juga membuka Developer Tools pada browser dengan:

```text
F12
```

Kemudian periksa tab **Console** untuk melihat apakah terdapat error JavaScript.

### QR Code Sulit Dipindai

Gunakan kombinasi warna yang memiliki kontras tinggi. Hindari penggunaan warna QR Code dan background yang terlalu mirip.

Untuk penggunaan umum, kombinasi berikut biasanya lebih mudah dibaca:

```text
QR Code  : Hitam
Background: Putih
```

### Tampilan Kurang Baik di Mobile

Pastikan browser menggunakan versi terbaru dan ukuran viewport tidak dibatasi secara manual. Project dirancang agar dapat digunakan pada perangkat desktop maupun mobile.

---

## Kontribusi

Kontribusi sangat terbuka untuk pengembangan project ini.

Jika ingin berkontribusi:

1. Fork repository.
2. Buat branch baru untuk perubahan Anda.

```bash
git checkout -b fitur-baru
```

3. Lakukan perubahan dan pengujian.
4. Commit perubahan.

```bash
git add .
git commit -m "Menambahkan fitur baru"
```

5. Push branch ke repository.

```bash
git push origin fitur-baru
```

6. Buat **Pull Request** dan jelaskan perubahan yang dilakukan.

Pastikan perubahan yang dibuat tetap sederhana, mudah dipahami, dan tidak mengganggu fungsi utama QR Generator.

---

## Author

**Mhd Dimas Naufal**

- GitHub: [@dimasnaufal18](https://github.com/dimasnaufal18)

---

## Lisensi

Project ini menggunakan **MIT License**.

Dengan lisensi MIT, project ini dapat digunakan, disalin, dimodifikasi, digabungkan, dipublikasikan, didistribusikan, dan digunakan untuk keperluan komersial sesuai dengan ketentuan lisensi.

Informasi lengkap dapat dilihat pada file [`LICENSE`](LICENSE).

---

**QR Generator** — sederhana, cepat, dan praktis untuk membuat QR Code langsung dari browser.
