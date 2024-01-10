
function changeMode() {

    const bodyEl=document.querySelector("body");
    const butonToggle=document.querySelector(".toggle-btn")

    const isDark=bodyEl.classList.contains("dark")

    if(isDark){
       // body.classList.remove("dark")
        bodyEl.classList.toggle("dark")
        butonToggle.innerHTML=`<i class="fa-solid fa-moon"></i>`


    }else{
       // body.classList.add("dark")
        bodyEl.classList.toggle("dark")
        butonToggle.innerHTML=`<i class="fa-solid fa-sun"></i>`
    }




  
    
}