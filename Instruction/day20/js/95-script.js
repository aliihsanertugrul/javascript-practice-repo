import { countries } from "../data/countries.js";

let timer=null;

const filteredData = (val) => { 
    if(!val) return [];
 let filtrelenmisData= countries.filter((country)=>
country.name.common.toLowerCase().includes(val.toLowerCase()))
  console.log(filtrelenmisData)
    return filtrelenmisData;

 }

const setList = (items) => { 

    let listEl=document.getElementById("list");
    listEl.innerHTML="";

    items.forEach((item) => {

     let liEl=   document.createElement("li")
     liEl.innerText=item.name.common;
     listEl.appendChild(liEl)
        
    });

 }


document.getElementById("txtSearch").addEventListener("input",(e)=>{
if(timer) clearTimeout(timer)
 timer=setTimeout(()=>{
 let fd= filteredData(e.target.value)
 setList(fd)
},1000)


})



