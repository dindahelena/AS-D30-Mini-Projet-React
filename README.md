# User Management App
Mini Aplikasi yang saya buat merupakan Aplikasi User Management sederhana yang menggunakan React dan terintegrasi dengan API publik Reqres. Mendukung fitur autentikasi (register, login), daftar user, detail user, pagination, dan proteksi halaman (Protected Route).

## Fitur
- Register user (endpoint register - success & unsuccess)
- Login user (endpoint login - success & unsuccess)
- Menampilkan daftar user (endpoint list users & pagination)
- Menampilkan detail user (endpoint single user)
- Protected route: halaman khusus hanya untuk user yang sudah login
- Responsive design (tampilan optimal di berbagai device)

## Struktur Folder Utama
- src/
  - components/
    - Register.js
    - Login.js
    - UserList.js
    - UserDetail.js
    - ProtectedRoute.js
  - pages/
    - Home.js
    - Detail.js
  - App.js
  - index.js


## Library yang Digunakan
- React
- React Router DOM
- Axios

## Cara Menjalankan
1. Clone repository
git clone https://github.com/dindahelena/AS-D30-Mini-Projet-React.git
cd AS-D30-Mini-Projet-React

2. Instal dependencies
npm install

3. Jalankan aplikasi
npm start

4. Buka aplikasi
Akses di browser: http://localhost:3000

## Link GitHub
(https://github.com/dindahelena/AS-D30-Mini-Projet-React/)
