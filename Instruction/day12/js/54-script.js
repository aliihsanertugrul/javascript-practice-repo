let car = {
  brand: "BMW",
  model: "x6",
  color: "purple",
  years: 2023,
  doors: 2,
  engine: 3.0,
};

const listeyiDoldur = () => {
  let carKeys = Object.keys(car);
  let formSelect = document.querySelector("#slctForm");

  //console.log(carKeys)

  let strHtml = "";

  for (let i = 0; i < carKeys.length; i++) {
    strHtml += ` <option > ${carKeys[i]}  </option> `;
  }
  formSelect.innerHTML = strHtml;
};

document.querySelector("#slctForm").addEventListener("click",(e)=>{
  let carValue= e.target.value;  

  //document.querySelector("#slctForm").value

document.querySelector("#snc").innerHTML=car[carValue];

})



listeyiDoldur();
