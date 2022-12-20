let arr = [1, 4, 3, 5, 12, 9, 43];
let ganjil = [];
let genap = [];

//ngecek satu per satu
// console.log(arr.length); // fungsi untuk hitung jumlah element
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    //cek setiap index apakah genap?
    genap.push(arr[i]); //kalau genap push ke keranjang genap
  } else {
    ganjil.push(arr[i]); //kalau ganjil push ke keranjang ganjil
  }
}

console.log(genap); //tampilkan genap
console.log(ganjil); //tampilkan ganjil

let new_arr = [2, 3, 5, 2, 4, 5, 34, 56, 43, 3, 45]; // tampilkan angka yang lebih besar
//dari 20
//34,56,43,45

let angka = [];

for (let i = 0; i < new_arr.length; i++) {
  if (new_arr[i] > 20) {
    angka.push(new_arr[i]);
  }
}

console.log(angka);
