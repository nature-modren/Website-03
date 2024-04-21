const layar = document.querySelector(".divlayar");
const tombol = document.querySelectorAll(".divtombol button");

let nilaiSebelumnya = "";
let operasi = undefined;
let nilaiSekarang = "";

tombol.forEach((button) => {
  button.addEventListener("click", () => {
    inputDigit(button.innerText);
  });
});

function inputDigit(digit) {
  if (digit === "." && nilaiSekarang.includes(".")) return;
  nilaiSekarang += digit;
  updateLayar();
}

function updateLayar() {
  layar.innerText = nilaiSekarang;
}

// Tambahkan event listener untuk tombol operasi
document.querySelector(".tombol11").addEventListener("click", () => {
  pilihOperasi("+");
});

document.querySelector(".tombol12").addEventListener("click", () => {
  pilihOperasi("-");
});

document.querySelector(".tombol13").addEventListener("click", () => {
  pilihOperasi("/");
});

document.querySelector(".tombol14").addEventListener("click", () => {
  pilihOperasi("*");
});

document.querySelector(".tombol15").addEventListener("click", () => {
  hitung();
});

document.querySelector(".tombol16").addEventListener("click", () => {
  hapustampilan();
});

function pilihOperasi(op) {
  if (nilaiSekarang === "") return;
  if (nilaiSebelumnya !== "") {
    hitung();
  }
  operasi = op;
  nilaiSebelumnya = nilaiSekarang;
  nilaiSekarang = "";
}

function hitung() {
  let hasil;
  const prev = parseFloat(nilaiSebelumnya);
  const current = parseFloat(nilaiSekarang);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operasi) {
    case "+":
      hasil = prev + current;
      break;
    case "-":
      hasil = prev - current;
      break;
    case "*":
      hasil = prev * current;
      break;
    case "/":
      hasil = prev / current;
      break;
    default:
      return;
  }
  nilaiSekarang = hasil.toString();
  operasi = undefined;
  nilaiSebelumnya = "";
  updateLayar();
}

function hapustampilan() {
  nilaiSebelumnya = "";
  nilaiSekarang = "";
  operasi = undefined;
  updateLayar();
}
