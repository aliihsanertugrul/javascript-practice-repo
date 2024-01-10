import { countries } from "../data/countries.js";
/* console.log(countries)  */

const loadData = () => {

    let optionCountries=""

    for(let country  of countries){

   optionCountries+=`<option> ${country.name.common}  </option>  `
     // console.log(country.name.common)

    }

    let selectedCountries=document.querySelector("#slctCountries").innerHTML= optionCountries;

    return optionCountries;
 }

 loadData()