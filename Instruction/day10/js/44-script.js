//!declaration func

function topla(a, b) {
  return a + b;
}

console.log(topla(3, 6));

//!expression func

let carpma = function (a, b) {
  return a * b;
};
console.log(carpma(4, 6));

//!arrow func

let yasHesapla = (dogumYili) => 2023 - dogumYili;

console.log(yasHesapla(2000));

const sum = (x, y) => {
  return x + y;
};
console.log(sum(5, 9));

const uzunluguBul = (str) => {
  return str.length;
};
console.log(uzunluguBul("merhaba"));

