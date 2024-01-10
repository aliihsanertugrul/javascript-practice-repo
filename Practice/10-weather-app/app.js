const button=document.querySelector(".btn")
const cityInput=document.querySelector(".inputText")

button.addEventListener("click",async(e)=>{
    e.preventDefault()

   const cityName= cityInput.value;
   console.log(cityName)
   const weatherData=await getWeatherData(cityName)
displayResult(weatherData)

})

const getWeatherData = async (cityName) => { 

    const API_KEY="e4b10158e23084dcb28c8f251c911878";
    const BASE_URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=tr`
   // console.log(BASE_URL)

   try {
    const res=await fetch(BASE_URL)
     const data=await res.json()
  //  console.log(data) 
     return data;


    
   } catch (error) {
    console.error("Hata olustu: ",error)
    
   }
 }

const displayResult = (data) => { 
console.log(data)

const cityName=document.getElementById("sehir");
cityName.innerHTML=`${data.name}, ${data.sys.country}`
const temprature=document.querySelector(".sicaklik");
temprature.innerHTML= kelvinToCelcius(`${data.main.temp}`) 
const stateWeather=document.querySelector("#havaDurumu");
stateWeather.innerHTML=`${data.weather[0].description}`
const feelsLike=document.querySelector("#hissedilen")
feelsLike.innerHTML= kelvinToCelcius(`${data.main.feels_like}`) 

}

const kelvinToCelcius = (temprature) => { 
    return `${(temprature-272.15).toFixed(0)}`
 }