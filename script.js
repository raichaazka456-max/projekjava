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