let now = new Date(); 
 let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let li = document.querySelector("#showDate"); 
    showDate.innerHTML = `${day} ${hours}; ${minutes}`; 
    

function displayWeather(response){
  console.log(response.data);
document.querySelector("#temperature").innerHTML = Math.round
(response.data.main.temp);
document.querySelector("#humidity").innerHTML= (response.data.main.humidity);
document.querySelector("#wind").innerHTML= (response.data.wind.speed);
document.querySelector("#weatherInfo").innerHTML =(response.data.weather[0].description);
}

function search(event){
  event.preventDefault ();
  let apiKey= "85c0dd980504ee728ffc354a13608856";
  let cityInput = document.querySelector("#search-city");
  let city = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeather); 
  

let cityElement = document.querySelector("#city");
  let searchCity = document.querySelector("#search-city");
cityElement.innerHTML = searchCity.value;
}

  let searchForm = document.querySelector("#search");
    searchForm.addEventListener("submit", search);


    