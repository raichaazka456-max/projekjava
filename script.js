let tumpukan = [];
let kartuPemain = [];
let kartuKomputer = [];
let bermain = false;
let komputerAktif = false;
let komputerTerbuka = false;
let waktuTunggu = null;
let ronde = 0;
let menang = 0;
let kalah = 0;
let seri = 0;

const jenisKartu = ["spade", "heart", "club", "diamond"];
const angkaKartu = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const namaJenis = { spade: "sekop", heart: "hati", club: "keriting", diamond: "wajik" };
const JEDA_KARTU = 1000; 
const JEDA_HASIL = 2000; 

function mulaiPermainan() {
    document.getElementById("halamanMenu").hidden = true;
    document.getElementById("halamanGame").hidden = false;
}

function kembaliMenu() {
    document.getElementById("halamanMenu").hidden = false;
    document.getElementById("halamanGame").hidden = true;
}

function gambarSimbol(jenis, bagian, ukuran) {
    let besar = "32", kecil = "32";
    if (bagian === "sudut") { besar = "14"; kecil = "14"; }
    if (ukuran === "hero") {
        besar = bagian === "sudut" ? "22_5" : "70";
    } else if (ukuran === "permainan") {
        besar = bagian === "sudut" ? "15_75" : "49";
    } else {
        kecil = bagian === "sudut" ? "12_6" : "28_8";
    }
    return '<picture><source media="(max-width: 700px)" srcset="assets/' + jenis + '-' + kecil + '.svg">' +
        '<img src="assets/' + jenis + '-' + besar + '.svg" alt=""></picture>';
}

function buatKartu(kartu, ukuran) {
    let warna = "hitam";
    if (kartu.jenis === "heart" || kartu.jenis === "diamond") warna = "merah";
    let sudut = gambarSimbol(kartu.jenis, "sudut", ukuran);
    let tengah = gambarSimbol(kartu.jenis, "tengah", ukuran);
    return '<div class="kartu ' + ukuran + '-kartu ' + warna + '" role="img" aria-label="' + kartu.angka + ' ' + namaJenis[kartu.jenis] + '">' +
        '<div class="sudut"><span>' + kartu.angka + '</span>' + sudut + '</div>' +
        '<div class="simbol-tengah">' + tengah + '</div>' +
        '<div class="sudut bawah">' + sudut + '<span>' + kartu.angka + '</span></div></div>';
}

function tampilkanKartu(idElemen, daftarKartu, ukuran) {
    let tampilan = "";
    for (let i = 0; i < daftarKartu.length; i++) {
        tampilan += buatKartu(daftarKartu[i], ukuran);
    }
    document.getElementById(idElemen).innerHTML = tampilan;
}

tampilkanKartu("kartuContoh", [{ angka: "A", jenis: "heart" }, { angka: "K", jenis: "spade" }], "hero");
