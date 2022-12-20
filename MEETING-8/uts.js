let string = "POLITEKNIK WBI ULANG TAHUN KE 7";
let split_length = string.split(" ");

console.log(split_length);

let wbi = split_length[1];
console.log(wbi[1]);
let year = split_length[3];
console.log(year[3]);
let _7 = split_length[5];
console.log(_7[5]);
let wbi_tahun_7 = split_length[1][3][5];
console.log(wbi,tahun,7[1][3][5]);


let kalimat = string.slice(0, 31);
let change = kalimat.replace("POLITEKNIK WBI ULANG TAHUN KE 7","politeknik wbi ulang tahun ke 7");

console.log(change);

let tahun = split_length[3].length;

console.log(tahun);

let number = Number(split_length[5]);

console.log(number);
console.log(typeof(number));