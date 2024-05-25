const apikey='97544f19d2e5d8b5f6c632623a090953';
const city="pune";
function fetchWeatherData(){
   const response=await fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={apikey}');
   const data= await response.json();
   console.log(data);
   console.log(data.main.temp);
   console.log(data.name);
   console.log(data.wind.speed);
   console.log(data.main.humidity);
   console.log(data.visibility);
   updateWeatherUI(data);
}
const city=document.querySelector(".city");
const temperature=document.querySelector(".temp");
const windspeed=document.querySelector(".wind-speed");
const humidity=document.querySelector(".humidity");
fetchWeatherData();
function updateWeatherUI(){
    cityElement.textcontent=data.name;
    temperature.textContent='${Math.round(data.main.temp)}';
    windspeed.textcontent='${data.wind.speed} km/h';
    humidity.textcontent='${data.main.humidity}';
}
