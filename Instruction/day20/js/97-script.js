let hourEl=document.getElementById("hour")
let minuteEl=document.getElementById("minutes")
let secondEl=document.getElementById("seconds")
let ampmEl=document.getElementById("am-pm")


const updateClock = () => { 

   // console.log(new Date)

   let hour=new Date().getHours()
   let minutes=new Date().getMinutes()
   let seconds=new Date().getSeconds()
   let ampm="AM";

   if(hour>12){
   hour=hour-12 
   ampm="PM"

   }

hour=hour<10 ? "0"+hour:hour;
minutes=minutes<10? "0"+minutes:minutes
seconds=seconds<10? "0"+seconds:seconds


hourEl.innerText=hour
minuteEl.innerText=minutes
secondEl.innerText=seconds
ampmEl.innerText=ampm

 }

 let timer=setInterval(()=>{
 updateClock()

 },1000)

 setInterval(updateClock,clearTimeout(timer))


