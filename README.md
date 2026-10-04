# Kartu 21
# Raicha Azka Sanubari-2510131210022
### Project individu mata kuliah Pemrograman Web

### Languages and Tools:
[HTML5] 
[CSS3]
[JavaScript]
[Figma]

## Design Reference
Figma Design = https://www.figma.com/design/pyJEP0dP8qRZkleKLsXxnc/Raicha-Azka-Sanubari---Kartu-21?node-id=37-840&t=i7kCjitqysG9O6eS-0

## Tentang Aplikasi
**Kartu 21** adalah game kartu berbasis web satu pemain melawan komputer. Tujuan permainan adalah mendapatkan total nilai kartu sedekat mungkin dengan angka **21** tanpa melewatinya.

Pemain dapat memilih **Ambil Kartu** untuk menambah kartu atau **Cukup** untuk mengakhiri giliran. Setelah itu, komputer akan membuka kartu yang tertutup dan mengambil kartu secara otomatis.

Aplikasi dibuat menggunakan HTML5, CSS3, dan JavaScript murni tanpa framework. Desain UI/UX dibuat menggunakan Figma dan tampilan website dibuat responsif untuk desktop, tablet, dan mobile.

## Fitur Utama
- **Mulai Permainan**: membagikan dua kartu untuk pemain dan komputer.
- **Ambil Kartu**: menambahkan satu kartu kepada pemain.
- **Cukup**: mengakhiri giliran pemain dan memulai giliran komputer.
- **Perhitungan Nilai**: menghitung nilai kartu secara otomatis.
- **Nilai As Fleksibel**: kartu As dapat bernilai 1 atau 11 sesuai kondisi.
- **Giliran Komputer**: komputer mengambil kartu jika nilainya masih di bawah 17.
- **Hasil Permainan**: menentukan hasil menang, kalah, atau seri.
- **Statistik**: mencatat jumlah menang, kalah, dan seri selama halaman masih terbuka.
- **Animasi Kartu**: memberikan efek saat kartu baru ditampilkan.
- **Jeda Permainan**: menggunakan setTimeout() pada giliran komputer dan sebelum halaman hasil.
- **Responsif**: tampilan menyesuaikan ukuran desktop, tablet, dan mobile.

## Aturan Permainan
- Kartu angka 2–10 memiliki nilai sesuai angka.
- J, Q, dan K bernilai 10.
- As dapat bernilai 1 atau 11.
- Pemain dan komputer mendapatkan dua kartu.
- Salah satu kartu komputer ditutup selama giliran pemain.
- Jika nilai komputer masih di bawah 17, komputer akan mengambil kartu lagi.
- Nilai lebih dari 21 dinyatakan kalah.
- Nilai yang paling dekat dengan 21 menjadi pemenang.
- Jika nilai pemain dan komputer sama, hasilnya seri.

## Struktur Project

| File | Kegunaan |
| --- | --- |
| `index.html` | Struktur Menu Utama, Permainan, dan halaman Hasil. |
| `style.css` | Mengatur warna, layout, kartu, tombol, animasi, dan responsive design. |
| `script.js` | Mengatur logika permainan, perhitungan nilai, giliran komputer, dan perubahan tampilan. |
| `assets` | Menyimpan ikon dan gambar yang digunakan pada kartu. |
