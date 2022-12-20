// let buah_buahan = ["Apel", "Kiwi", "Mangga"];
// console.log(buah_buahan);
// buah_buahan.push("Pisang");
// console.log(buah_buahan);
// buah_buahan.unshift("Nanas");
// console.log(buah_buahan);
// buah_buahan.shift();
// console.log(buah_buahan);
// buah_buahan.pop();
// console.log(buah_buahan);

//Push => Menambahkan element baru diakhir
//Pop => Menghapus element terakhir
//Shift => Menghapus element paling awal
//unshift => Menambahan element baru di awal
//splice => untuk menghapus dan menambahkan element di index tertentu

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(1, 2);
console.log(fruits);
