// TAHAP 1: temukan dan tangkap SEMUA ELEMEN YANG DIPERLUKAN
const inputNama = document.getElementById('inputNama'); // <-- contoh mendapatkan Input untuk nama
const inputGambar = document.getElementById('inputGambar'); // <-- contoh Input untuk URL gambar

const cardBio = document.getElementById('cardBio'); // <-- contoh mendapatkan Elemen bio di kartu
const cardImage = document.getElementById('cardImage'); // <-- contoh mendapatkan Elemen img di kartu

// TAHAP 2: BUAT FUNGSI UNTUK live "MENG-UPDATE" KARTU
/**
 * Memperbarui teks di kartu berdasarkan input.
 * @param {HTMLElement} inputElement - Elemen <input> atau <textarea> sumber.
 * @param {HTMLElement} outputElement - Elemen target (di kartu) untuk diubah.
 * @param {string} placeholderText - Teks default jika input kosong.
 */
function updateCardText(inputElement, outputElement, placeholderText) { // <-- Nama fungsi diubah agar lebih spesifik
    const value = inputElement.value;
    outputElement.textContent = value.length === 0 ? placeholderText : value;
}

// coba buat fungsi terpisah untuk gambar karena manipulasi atribut berbeda.


// TAHAP 3: PASANG EVENT LISTENER
inputNama.addEventListener('input', function() {
    updateCardText(inputNama, cardNama, 'Nama Kau muncul di sini nantinya...');
});

inputPekerjaan.addEventListener('input', function() {
    updateCardText(inputPekerjaan, cardPekerjaan, 'Pekerjaan Anda');
});

inputGambar.addEventListener('input', function() {
    updateCardImage(inputGambar, cardImage, '');
});

// Panggil updateCardText secara manual agar placeholder muncul jika input kosong.
updateCardText(inputBio, cardBio, 'Bio Anda akan muncul di sini...');
// Dan juga untuk gambar
updateCardImage(inputGambar, cardImage, 'https://placehold.co/300x200');