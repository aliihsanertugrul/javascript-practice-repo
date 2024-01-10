

let nameEl=document.querySelector(".name")
console.log(nameEl)
let name=nameEl.innerText
console.log(name)

let mesaj=`Hello ${name}`
console.log(mesaj)

let mesajEl=document.querySelector(".mesaj")
mesajEl.innerText=mesaj //set
