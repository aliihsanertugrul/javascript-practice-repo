
import { countries } from "../data/countries.js";


document.querySelector("#ddlCountries").addEventListener("change",(e)=>{
  let countryCode =e.target.value;
  let country =getCountry(countryCode)
  loadTable(country)
})

const loadData = () => {

    let optionCountries=""
    for(let country  of countries){

   optionCountries+=`<option value="${country.ccn3} " > ${country.name.common}  </option>  `
 //console.log(country.ccn3)


    }
    let selectedCountries=document.querySelector("#ddlCountries").innerHTML= optionCountries;
    return optionCountries;
 }

 const loadTable = (country) => { 

    let capitalCity=country.capital.join(" - ")
    let currencies=Object.keys(country.currencies).join(" - ")  
    let languages=Object.values(country.languages).join(" - ")
    let area=country.area;
    let mapLink=`<a href="https://www.google.com/maps/place/${country.latlng.toString()}" target="_blank" >Go to Map</a>`


    document.querySelector("#tblCountries tr:nth-child(1) td").innerHTML=capitalCity
    document.querySelector("#tblCountries tr:nth-child(2) td").innerHTML=currencies
    document.querySelector("#tblCountries tr:nth-child(3) td").innerHTML=languages
    document.querySelector("#tblCountries tr:nth-child(4) td").innerHTML=area
    document.querySelector("#tblCountries tr:nth-child(5) td").innerHTML=mapLink
   




   // console.log(country.capital)

  }

 const getCountry = (countryCode) => { 
   let filteredCountries=  countries.filter((country)=>country.ccn3==countryCode);
//console.log(filteredCountries)
   return filteredCountries.length > 0 ? filteredCountries[0]:null

  }

let code=getCountry(792)
loadTable(code)
 loadData()