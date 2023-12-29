// konsep scope pada javascript

//global scope
let nama = "Amri Firdaus";
const umur = 20;

function fungsi1() {
  //local scope
  let alamat = "jl.gatot subroto"

  return console.log(nama, umur, alamat)
};

console.log(nama, umur) //Amri Firdaus,18
console.log(alamat) //undefined
console.log(fungsi1); //Amri Firdaus,18,jl.gatot subroto