// input ları seç
const txtWeight = document.querySelector("#txtWeight");
const txtHeight = document.querySelector("#txtHeight");

const formGroupWeight = document.querySelector("#formGroupWeight");
const formGroupHeight = document.querySelector("#formGroupHeight");


function calculate(e) {

    
  // değerleri number a çevirerek al
  const weight = Number(txtWeight.value);
  const height = Number(txtHeight.value);

  formGroupWeight.style.borderColor="rgb(159, 159, 159)";
  formGroupHeight.style.borderColor="rgb(159, 159, 159)";


  // değerleri kontrol et
  if (e.target.id === "txtWeight" && (!weight || weight <= 0 || weight > 500)) {
    formGroupWeight.style.borderColor="red";
    return;
  }
  
  if (e.target.id === "txtHeight" && !height || height <= 0 || height > 300) {
    formGroupHeight.style.borderColor="red";
    return;
  }


  // bmi hesapla
  const bmi = weight / (height / 100) ** 2;
  console.log(bmi);

  // indicator ı konumlandır

  const indicator = document.querySelector(".indicator");
  const indicatorLabel = document.querySelector(".indicator label");

  const leftPosition = bmi > 50 ? 100 : bmi * 2;
  indicator.style.left = `${leftPosition}%`;
  indicatorLabel.innerHTML = bmi.toFixed(0);

  console.log(leftPosition);

  if (leftPosition > 50) {
    indicatorLabel.style.left = "-5px";
    indicatorLabel.style.transform = "translateX(-100%)";
  } else {
    indicatorLabel.style.left = "20px";
    indicatorLabel.style.transform = "translateX(0)";
  }
}
