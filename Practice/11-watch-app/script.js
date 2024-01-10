const data =[
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
  ];
  

  let productsContainer=document.querySelector(".products")
  let searhcInput=document.querySelector(".search")
  let categoriesContainer=document.querySelector(".cats")
  let priceRange=document.querySelector(".priceRange")
  let priceValue=document.querySelector(".priceValue")


  const displayProducts = (filteredProducts) => {

    let showFilterProducts=filteredProducts.map((product)=> `
    <div class="product">
                <img src=${product.img} alt="">
                <span class="name">${product.name} </span>
                <span class="priceText">$ ${product.price}</span>
            </div>
    `).join("")
    productsContainer.innerHTML=showFilterProducts
 
   }

   displayProducts(data)

   searhcInput.addEventListener("keyup",(e)=>{

   let value=e.target.value.toLowerCase().trim();
  // console.log(value)

  
  if(value){
    displayProducts(data.filter((item)=>item.name.toLowerCase().includes(value)))
  }else{
    displayProducts(data)
  }

   })


   const setCategories = () => { 

   let allCategories=  data.map((item)=>item.cat)
   console.log(allCategories)


 let filteredCategories=["All", ...allCategories.filter((cats,index)=>{
    return allCategories.indexOf(cats)==index

   })]

// console.log(filteredCategories)

categoriesContainer.innerHTML=filteredCategories.map((item)=>`<span>${item}</span> `).join("")

categoriesContainer.addEventListener("click",(e)=>{

 let selectedCats= e.target.textContent;


 selectedCats=="All" ? displayProducts(data) : displayProducts(data.filter((item)=>item.cat==selectedCats))

})

const setPrices = () => { 

 let priceList= data.map((item)=>item.price);

 let minPrice=Math.min(...priceList);
 let maxPrice=Math.max(...priceList);

priceRange.min=minPrice;
priceRange.max=maxPrice;
priceRange.value=maxPrice


priceValue.textContent=`$ ${maxPrice}`

priceRange.addEventListener("input",(e)=>{
  let val=e.target.value;
  priceValue.textContent=`$ ${val}`

  displayProducts(data.filter((item)=>item.price<=val))
}) 


 }





  setPrices()

    }
 
    setCategories()
   