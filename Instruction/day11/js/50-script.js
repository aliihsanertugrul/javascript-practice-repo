let btnTahminEl = document.querySelector(".btn-tahmin");
let btnBaslaEl = document.querySelector(".btn-basla");
let inputEl = document.querySelector("#txtNumber");
let sonucEl = document.querySelector("#lbl-rslt");

let randomNumber;

const randomNumberOlustur = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

//console.log(randomNumberOlustur(300,5))

const basla = () => {
  randomNumber = randomNumberOlustur(100, 1);
  btnTahminEl.style.display = "inline";
  btnBaslaEl.style.display = "none";
  inputEl.focus();
};

const tahminEt = () => {
  let number = Number(inputEl.value);
  number ??= 0;

  if (number < 1 || number > 100) {
    sonucEl.innerHTML = `1 ile 100 arasında bir sayi giriniz`;
    return;
  }

  if (number > randomNumber) {
    sonucEl.innerHTML = ` kucuk bir sayi gir`;
  } else if (number < randomNumber) {
    sonucEl.innerHTML = ` buyuk bir sayi gir`;
  } else {
    sonucEl.innerHTML = ` Tebrikler kazandiniz`;
    btnTahminEl.style.display = "none";
    btnBaslaEl.style.display = "inline";
  }

  inputEl.value = "";
  inputEl.focus();
};
