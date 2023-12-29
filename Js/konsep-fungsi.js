//konsep fungsi pada javascript

function nama(namaDepan, namaBelakang) {
  return namaDepan + " " + namaBelakang
};

const namaSaya = nama("Amri", "firdaus");

console.log(namaSaya);

function jumlahUang(uangAwal, uangAkhir) {
  return uangAwal - uangAkhir;
};

const pengeluaranSaya = jumlahUang(10000, 5000);

console.log(pengeluaranSaya);