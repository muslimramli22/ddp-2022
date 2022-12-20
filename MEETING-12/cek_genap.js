let arr = [1, 4, 3, 5, 12, 19, 9];

// Buat array kosong untuk menampung bilangan genap dan ganjil
let evenNumbers = [];
let oddNumbers = [];

// Lakukan perulangan untuk setiap elemen di dalam array
for (let i = 0; i < arr.length; i++) {
  // Cek apakah elemen tersebut bilangan genap atau ganjil
  if (arr[i] % 2 === 0) {
    // Jika elemen tersebut bilangan genap, tambahkan ke dalam array evenNumbers
    evenNumbers.push(arr[i]);
  } else {
    // Jika elemen tersebut bilangan ganjil, tambahkan ke dalam array oddNumbers
    oddNumbers.push(arr[i]);
  }
}

// Tampilkan hasilnya
console.log("Bilangan genap:", evenNumbers);
console.log("Bilangan ganjil:", oddNumbers);

let arr = [1, 4, 3, 5, 12, 19, 9];

// Buat array kosong untuk menampung bilangan genap dan ganjil
let evenNumbers = [];
let oddNumbers = [];

// Lakukan perulangan untuk setiap elemen di dalam array
for (let i = 0; i < arr.length; i++) {
  // Cek apakah elemen tersebut bilangan genap atau ganjil
  if (arr[i] % 2 === 0) {
    // Jika elemen tersebut bilangan genap, cek apakah sudah termasuk dalam array evenNumbers
    if (!evenNumbers.includes(arr[i])) {
      // Jika belum termasuk, tambahkan ke dalam array evenNumbers
      evenNumbers.push(arr[i]);
    }
  } else {
    // Jika elemen tersebut bilangan ganjil, cek apakah sudah termasuk dalam array oddNumbers
    if (!oddNumbers.includes(arr[i])) {
      // Jika belum termasuk, tambahkan ke dalam array oddNumbers
      oddNumbers.push(arr[i]);
    }
  }
}

// Tampilkan hasilnya
console.log("Bilangan genap:", evenNumbers);
console.log("Bilangan ganjil:", oddNumbers);
