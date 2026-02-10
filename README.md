# Aplikasi penghitung kebutuhan aspal hotmix

## Cara Kerja

- Pengguna mengisi luas area, berat jenis, ketebalan, dan persentase waste pada form.
- JavaScript melakukan validasi wajib isi dan memastikan nilai tidak negatif.
- Ketebalan dikonversi dari cm ke meter sebelum perhitungan.
- Volume dihitung dari luas × ketebalan, lalu dikalikan berat jenis untuk kebutuhan awal.
- Waste dihitung sebagai persentase tambahan dari kebutuhan awal.
- Hasil akhir ditampilkan dalam ton dengan pembulatan 2 angka desimal secara responsif menggunakan Bootstrap.
