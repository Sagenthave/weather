var apiKey = 'f4350fd19defdd78556e8fb5cce853eb'
const dataList = JSON.parse(localStorage.getItem('city') || '[]');
const history = document.getElementById("history");



document.getElementById("search-btn").addEventListener('click', getCity);

function getCity(event) {
    event.preventDefault();
    var search = document.getElementById("search-input").value.trim();
    if (search !== '') {
      if (!dataList.includes(search)) {
        dataList.push(search);
        localStorage.setItem('city', JSON.stringify(dataList));
        showCities();
      }
      getLocation(search);
    }
  }
showCities();
  function showCities() {
    if (history) {
        history.innerHTML = '';
    dataList.forEach(city => {
        const historyList = document.createElement('p');
        historyList.textContent = city;
        history.appendChild(historyList);
        historyList.addEventListener('click', () => {
       
            const buttonCity = historyList.textContent;
            city.value = buttonCity;
            getLocation(city);
          });
    })
  }}

function getLocation (city)  {
// fetch ('http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=' + apiKey)
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
.then(function (response) {
    // console.log(response);
    return response.json();
}) .then (function (data) {
    // var dayTwo = document.getElementById("weathericon2");
    // dayTwo.src =  `https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`;
console.log(data.main.temp)
var date6 = document.getElementById('date6');
// date6.textContent = new Date(data.list[0].dt_txt).toLocaleDateString();
// var daySix = document.getElementById('temp6');
date6.textContent = "Temperature: " + data.main.temp +  " Celsius"
// var daySix = document.getElementById('hum6');
// daySix.textContent = "Humidity: " + data.list[8].main.humidity;
// var daySix = document.getElementById('wind6');
// daySix.textContent = "Wind: " + data.list[8].wind.gust;
//     // console.log(data);
    // console.log(data[0].lat)
    // var lat = data[0].lat
    // var lon = data[0].lon
    // console.log (data[0].lon)
    // getWeather(lat,lon)
getWeather(city);

});
}



function getWeather (city) {
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
.then(function (response) {
    return response.json();
}) .then (function (data) {
    console.log(data)
    console.log(data.list[0].main.temp);
console.log(data.list[0].dt_txt)


var dayOne = document.getElementById("city-name");
dayOne.textContent = "City Name: " + data.city.name;

var dayOne = document.getElementById("weathericon");
dayOne.src =  `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`;

var date = document.getElementById('date');
date.textContent = new Date(data.list[0].dt_txt).toLocaleDateString();
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

    var dayTwo = document.getElementById("weathericon2");
    dayTwo.src =  `https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`;

var date2 = document.getElementById('date2');
date2.textContent = new Date(data.list[8].dt_txt).toLocaleDateString();
var dayTwo = document.getElementById('temp2');
dayTwo.textContent = "Temperature: " + data.list[8].main.temp +  " Celsius"
var dayTwo = document.getElementById('hum2');
dayTwo.textContent = "Humidity: " + data.list[8].main.humidity;
var dayTwo = document.getElementById('wind2');
dayTwo.textContent = "Wind: " + data.list[8].wind.gust;

var dayThree = document.getElementById("weathericon3");
dayThree.src =  `https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`;
var date3 = document.getElementById('date3');
date3.textContent = new Date(data.list[16].dt_txt).toLocaleDateString();
var dayThree = document.getElementById("temp3");
dayThree.textContent = "Temperature: " + data.list[16].main.temp +  " Celsius";
var dayThree = document.getElementById("hum3");
dayThree.textContent = "Humidity: " + data.list[16].main.humidity;
var dayThree = document.getElementById("wind3");
dayThree.textContent = "Wind: " + data.list[16].wind.gust;

var dayFour = document.getElementById("weathericon4");
dayFour.src =  `https://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png`;
var date4 = document.getElementById('date4');
date4.textContent = new Date(data.list[24].dt_txt).toLocaleDateString();
dayFour = document.getElementById("temp4");
dayFour.textContent = "Temperature: " + data.list[24].main.temp +  " Celsius";
dayFour = document.getElementById("hum4");
dayFour.textContent = "Humidity: " + data.list[24].main.humidity;
dayFour = document.getElementById("wind4");
dayFour.textContent = "Wind: " + data.list[24].wind.gust;

var dayFive = document.getElementById("weathericon5");
dayFive.src =  `https://openweathermap.org/img/wn/${data.list[32].weather[0].icon}.png`;
var date5 = document.getElementById('date5');
date5.textContent = new Date(data.list[32].dt_txt).toLocaleDateString();
dayFive = document.getElementById("temp5");
dayFive.textContent = "Temperature: " + data.list[32].main.temp +  " Celsius";
dayFive = document.getElementById("hum5");
dayFive.textContent = "Humidity: " + data.list[32].main.humidity;
dayFive = document.getElementById("wind5");
dayFive.textContent = "Wind: " + data.list[32].wind.gust;
}







// console.log(city[3])