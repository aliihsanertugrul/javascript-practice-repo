document.querySelector("#btnAverage").addEventListener("click", () => {
  let textScoreEl1 = document.querySelector("#txtScore1");
  let textScoreEl2 = document.querySelector("#txtScore2");
  let sonucEl = document.querySelector("#sonuc");

  if(!isScoreValid(textScoreEl1.value)||!isScoreValid(textScoreEl2.value)){

    alert("Lutfen gecerli bir not giriniz")
    return;

  }
  let score1=Number(textScoreEl1.value);
  let score2=Number(textScoreEl2.value);

  let average=getAverage(score1,score2);
  let letter=convertToLetter(average)


sonucEl.innerHTML=`Ortalamaniz: ${average} ve ortalama harf notunuz: ${letter}   `

});

const getAverage = (num1, num2) => {
  return (num1 + num2) / 2;
};

const convertToLetter = (score) => {
  let letter = "";

  if (score >= 90 && score <= 100) {
    letter = "A";
  } else if (score >= 80 && score < 90) {
    letter = "B";
  } else if (score >= 70 && score < 80) {
    letter = "C";
  } else if (score >=50 && score < 70) {
    letter = "D";
  } else {
    letter = "F";
  }

  return letter;

};

const isScoreValid = (point) => { 
return point && !isNaN(point) && point<=100 &&point>=0;

 }


