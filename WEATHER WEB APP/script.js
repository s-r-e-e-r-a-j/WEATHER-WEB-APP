
const form=document.querySelector("#form");
const input=document.querySelector("#input")
const output=document.querySelector("#output");

form.addEventListener("submit",async(e)=>{

e.preventDefault();
  output.style.display="block"
  try{

let api=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&unit=metric`
let apikey="2691a8ef6debec9416140d77a76c01b7"

let response=await fetch(api + `&appid=${apikey}`)
let data=await response.json();
output.innerText=`Humidity ${data.main.humidity}\nWindSpeed:${data.wind.speed} km/h\nTemperature:${Math.floor(data.main.temp)} F\n Location:${data.name} \nStatus : ${data.weather[0].description}`
     console.log(data)
  }catch(error){
    console.log(error)
  }


})
