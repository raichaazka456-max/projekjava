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

// 2. MEMBUAT 52 KARTU, LALU MENGAMBIL SATU SECARA ACAK
function buatTumpukan() {
    tumpukan = [];
    for (let i = 0; i < jenisKartu.length; i++) {
        for (let j = 0; j < angkaKartu.length; j++) {
            tumpukan.push({ angka: angkaKartu[j], jenis: jenisKartu[i] });
        }
    }
}

function ambilAcak() {
    let indeks = Math.floor(Math.random() * tumpukan.length);
    return tumpukan.splice(indeks, 1)[0];
}

function nilaiKartu(kartu) {
    if (kartu.angka === "A") return 11;
    if (kartu.angka === "J" || kartu.angka === "Q" || kartu.angka === "K") return 10;
    return Number(kartu.angka);
}

// As awalnya 11. Jika melewati 21, ubah As menjadi 1 (kurangi 10).
function hitungNilai(daftarKartu) {
    let total = 0;
    let jumlahAs = 0;
    for (let i = 0; i < daftarKartu.length; i++) {
        total += nilaiKartu(daftarKartu[i]);
        if (daftarKartu[i].angka === "A") jumlahAs++;
    }
    while (total > 21 && jumlahAs > 0) {
        total -= 10;
        jumlahAs--;
    }
    return total;
}

function mulaiPermainan() {
    clearTimeout(waktuTunggu);
    waktuTunggu = null;
    komputerAktif = false;
    komputerTerbuka = false;
    document.getElementById("halamanGame").dataset.hasil = "";
    buatTumpukan();
    kartuPemain = [ambilAcak(), ambilAcak()];
    kartuKomputer = [ambilAcak(), ambilAcak()];
    ronde++;
    bermain = true;
    document.getElementById("nomorRonde").textContent = "RONDE " + String(ronde).padStart(2, "0");
    document.getElementById("tombolCukup").disabled = false;
    perbaruiMeja();
    tampilkanHalaman("halamanGame");
}

function ambilKartu() {
    if (!bermain || komputerAktif || hitungNilai(kartuPemain) >= 21) return;
    kartuPemain.push(ambilAcak());
    perbaruiMeja();
    if (hitungNilai(kartuPemain) > 21) {
        selesaiPermainan();
    } else if (hitungNilai(kartuPemain) === 21) {
        document.getElementById("tombolCukup").focus();
    }
    animasiKartu("kartuPemain", "kartu-baru");
}

function cukup() {
    if (!bermain || komputerAktif) return;
    komputerAktif = true;
    komputerTerbuka = true;
    perbaruiMeja();
    animasiKartu("kartuKomputer", "kartu-dibuka");
    document.getElementById("pesanGame").textContent = "Giliran komputer. Kartu yang tertutup dibuka.";
    waktuTunggu = setTimeout(giliranKomputer, JEDA_KARTU);
}

function giliranKomputer() {
    if (!bermain || !komputerAktif) return;
    waktuTunggu = null;
    if (hitungNilai(kartuKomputer) < 17) {
        kartuKomputer.push(ambilAcak());
        perbaruiMeja();
        document.getElementById("pesanGame").textContent = "Komputer mengambil kartu. Totalnya sekarang " + hitungNilai(kartuKomputer) + ".";
        if (hitungNilai(kartuKomputer) < 17) {
            waktuTunggu = setTimeout(giliranKomputer, JEDA_KARTU);
        } else {
            selesaiPermainan();
        }
        animasiKartu("kartuKomputer", "kartu-baru");
    } else {
        selesaiPermainan();
    }
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
