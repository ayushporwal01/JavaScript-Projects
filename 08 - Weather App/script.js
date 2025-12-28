let searchBar = document.querySelector('#search-bar');
let searchBtn = document.querySelector('#search-btn');
let weatherImg = document.querySelector('#weather-img');
let temp = document.querySelector('.temp');
let city = document.querySelector('.city');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');

const APIKEY = "5946f5b03d140b69d87678908bea2ee0";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`; 

async function checkWeather(city = 'Indore') {
    const res = await fetch(URL + city + `&appid=${APIKEY}`);
    let data = await res.json();
    console.log(data);
}

checkWeather();