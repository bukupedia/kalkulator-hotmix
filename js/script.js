// Ambil elemen form
const form = document.getElementById("hotmixForm");

// Fungsi validasi angka
function isValidNumber(value) {
    return value !== "" && !isNaN(value) && Number(value) >= 0;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil nilai input
    const luasInput = document.getElementById("luas");
    const bjInput = document.getElementById("bj");
    const tebalInput = document.getElementById("tebal");
    const wasteInput = document.getElementById("waste");

    const luas = parseFloat(luasInput.value);
    const bj = parseFloat(bjInput.value);
    const tebalCm = parseFloat(tebalInput.value);
    const waste = parseFloat(wasteInput.value);

    let isValid = true;

    // Reset validasi
    [luasInput, bjInput, tebalInput, wasteInput].forEach(input => {
        input.classList.remove("is-invalid");
    });

    // Validasi input
    if (!isValidNumber(luas)) {
        luasInput.classList.add("is-invalid");
        isValid = false;
    }

    if (!isValidNumber(bj)) {
        bjInput.classList.add("is-invalid");
        isValid = false;
    }

    if (!isValidNumber(tebalCm)) {
        tebalInput.classList.add("is-invalid");
        isValid = false;
    }

    if (!isValidNumber(waste)) {
        wasteInput.classList.add("is-invalid");
        isValid = false;
    }

    if (!isValid) return;

    // Konversi ketebalan cm ke meter
    const tebalMeter = tebalCm / 100;

    // Perhitungan
    const volume = luas * tebalMeter;
    const kebutuhanAwal = volume * bj;
    const tambahanWaste = kebutuhanAwal * (waste / 100);
    const totalHotmix = kebutuhanAwal + tambahanWaste;

    // Tampilkan hasil dengan 2 desimal
    document.getElementById("hasilAwal").textContent = kebutuhanAwal.toFixed(2);
    document.getElementById("hasilWaste").textContent = tambahanWaste.toFixed(2);
    document.getElementById("hasilTotal").textContent = totalHotmix.toFixed(2);

    // Tampilkan box hasil
    document.getElementById("hasilBox").classList.remove("d-none");
});
