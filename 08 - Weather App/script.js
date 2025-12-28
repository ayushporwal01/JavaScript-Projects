let searchBox = document.querySelector('#search-bar');
let searchBtn = document.querySelector('#search-btn');
let weatherImg = document.querySelector('#weather-img');

const APIKEY = "5946f5b03d140b69d87678908bea2ee0";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`; 

async function checkWeather(city = 'Indore') {
    const res = await fetch(URL + city + `&appid=${APIKEY}`);
    let data = await res.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "+";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
}

searchBox.addEventListener("click", () => {
    if(e.key == "Enter") {
        checkWeather(searchBox.value.trim());
    }
})

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
})

checkWeather();