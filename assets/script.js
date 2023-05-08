var apiKey = 'f4350fd19defdd78556e8fb5cce853eb'
// var city = 'toronto'

// var search = document.getElementById("search-input").value;
// console.log(search)

document.getElementById("search-btn").addEventListener('click', getCity);

function getCity (event) {
    event.preventDefault();
    var search = document.getElementById("search-input").value;
    // console.log(search)   
    // alert(search)
    localStorage.setItem('city', search);
    getLocation(search)
}

function getLocation (city)  {
fetch ('http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=' + apiKey)
.then(function (response) {
    // console.log(response);
    return response.json();
}) .then (function (data) {
    // console.log(data);
    // console.log(data[0].lat)
    var lat = data[0].lat
    var lon = data[0].lon
    // console.log (data[0].lon)
    getWeather(lat,lon)
});
}


function getWeather (lat,lon) {
console.log (lat,lon)
fetch ('http://api.openweathermap.org/data/2.5/forecast?&units=metric&lat=' +lat + '&lon=' + lon + '&appid=' + apiKey)
.then(function (response) {
    return response.json();
}) .then (function (data) {
    console.log(data)
    console.log(data.list[0].main.temp);
console.log(data.list[0].dt_txt)

var dayOne = document.getElementById('date');
dayOne.textContent = "Date: " + data.list[0].dt_txt

var dayOne = document.getElementById("city-name");
dayOne.textContent = "City Name: " + data.city.name;

var dayOne = document.getElementById("weathericon");

dayOne.src =  `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`;
// dayOne.textContent = "Weather: " + `<img src= "https://openweathermap.org/img/wn/${weatherImage}.png">`
var dayOne = document.getElementById('temp');
dayOne.textContent="Temperature: " + data.list[0].main.temp +  " Celsius";
var dayOne = document.getElementById("hum");
dayOne.textContent ="Humiditiy: " + data.list[0].main.humidity;
var dayOne = document.getElementById("wind");
dayOne.textContent ="Wind: " + data.list[0].wind.gust;
getForcast(data)
})
}

function getForcast (data) {
    console.log ("getForcast", data);

    var dayOne = document.getElementById("weathericon");
    dayOne.src =  `https://openweathermap.org/img/wn/${data.list[8].weather[8].icon}.png`;

var date2 = document.getElementById('date2');
date2.textContent = new Date(data.list[8].dt_txt).toLocaleDateString();
var dayTwo = document.getElementById('temp2');
dayTwo.textContent = "Temperature: " + data.list[8].main.temp +  " Celsius"
var dayTwo = document.getElementById('hum2');
dayTwo.textContent = "Humidity: " + data.list[8].main.humidity;
var dayTwo = document.getElementById('wind2');
dayTwo.textContent = "Wind: " + data.list[8].wind.gust;

var dayThree = document.getElementById("temp3");
dayThree.textContent = "Temperature: " + data.list[16].main.temp +  " Celsius";
var dayThree = document.getElementById("hum3");
dayThree.textContent = "Humidity: " + data.list[16].main.humidity;
var dayThree = document.getElementById("wind3");
dayThree.textContent = "Wind: " + data.list[16].wind.gust;

dayFour = document.getElementById("temp4");
dayFour.textContent = "Temperature: " + data.list[24].main.temp +  " Celsius";
dayFour = document.getElementById("hum4");
dayFour.textContent = "Humidity: " + data.list[24].main.humidity;
dayFour = document.getElementById("wind4");
dayFour.textContent = "Wind: " + data.list[24].wind.gust;

dayFive = document.getElementById("temp5");
dayFive.textContent = "Temperature: " + data.list[32].main.temp +  " Celsius";
dayFive = document.getElementById("hum5");
dayFive.textContent = "Humidity: " + data.list[32].main.humidity;
dayFive = document.getElementById("wind5");
dayFive.textContent = "Wind: " + data.list[32].wind.gust;
}

getLocation()







// console.log(city[3])