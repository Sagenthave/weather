var apiKey = 'f4350fd19defdd78556e8fb5cce853eb'
const dataList = JSON.parse(localStorage.getItem('city') || '[]');
const history = document.getElementById("history");


//EVENT LISTENER FOR SEARCH BUTTON
document.getElementById("search-btn").addEventListener('click', getCity);

//LOCAL STORAGE
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
//GRABBING LOCATION FROM API
function getLocation (city)  {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
.then(function (response) {
    return response.json();
}) 
getWeather(city);

};
//GRABBING WEATHER FROM API
function getWeather (city) {
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
.then(function (response) {
    return response.json();
}) .then (function (data) {
    console.log(data)
    console.log(data.list[0].main.temp);
console.log(data.list[0].dt_txt)

//TODAY WEATHER
var dayOne = document.getElementById("city-name");
dayOne.textContent = "City Name: " + data.city.name;

var dayOne = document.getElementById("weathericon");
dayOne.src =  `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`;

var date = document.getElementById('date');
date.textContent = new Date(data.list[0].dt_txt).toLocaleDateString();
var dayOne = document.getElementById('temp');
dayOne.textContent="Temperature: " + data.list[0].main.temp +  " Celsius";
var dayOne = document.getElementById("hum");
dayOne.textContent ="Humiditiy: " + data.list[0].main.humidity + '%';
var dayOne = document.getElementById("wind");
dayOne.textContent ="Wind: " + data.list[0].wind.gust + " mph";
getForcast(data)
})
}
//FUTURE FORCAST
function getForcast (data) {
    console.log ("getForcast", data);

    var dayTwo = document.getElementById("weathericon2");
    dayTwo.src =  `https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`;

var date2 = document.getElementById('date2');
date2.textContent = new Date(data.list[8].dt_txt).toLocaleDateString();
var dayTwo = document.getElementById('temp2');
dayTwo.textContent = "Temperature: " + data.list[8].main.temp +  " Celsius"
var dayTwo = document.getElementById('hum2');
dayTwo.textContent = "Humidity: " + data.list[8].main.humidity + "%";
var dayTwo = document.getElementById('wind2');
dayTwo.textContent = "Wind: " + data.list[8].wind.gust + " mph";

var dayThree = document.getElementById("weathericon3");
dayThree.src =  `https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`;
var date3 = document.getElementById('date3');
date3.textContent = new Date(data.list[16].dt_txt).toLocaleDateString();
var dayThree = document.getElementById("temp3");
dayThree.textContent = "Temperature: " + data.list[16].main.temp +  " Celsius";
var dayThree = document.getElementById("hum3");
dayThree.textContent = "Humidity: " + data.list[16].main.humidity + "%";
var dayThree = document.getElementById("wind3");
dayThree.textContent = "Wind: " + data.list[16].wind.gust + " mph";

var dayFour = document.getElementById("weathericon4");
dayFour.src =  `https://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png`;
var date4 = document.getElementById('date4');
date4.textContent = new Date(data.list[24].dt_txt).toLocaleDateString();
dayFour = document.getElementById("temp4");
dayFour.textContent = "Temperature: " + data.list[24].main.temp +  " Celsius";
dayFour = document.getElementById("hum4");
dayFour.textContent = "Humidity: " + data.list[24].main.humidity + "%";
dayFour = document.getElementById("wind4");
dayFour.textContent = "Wind: " + data.list[24].wind.gust + " mph";

var dayFive = document.getElementById("weathericon5");
dayFive.src =  `https://openweathermap.org/img/wn/${data.list[32].weather[0].icon}.png`;
var date5 = document.getElementById('date5');
date5.textContent = new Date(data.list[32].dt_txt).toLocaleDateString();
dayFive = document.getElementById("temp5");
dayFive.textContent = "Temperature: " + data.list[32].main.temp +  " Celsius";
dayFive = document.getElementById("hum5");
dayFive.textContent = "Humidity: " + data.list[32].main.humidity + "%";
dayFive = document.getElementById("wind5");
dayFive.textContent = "Wind: " + data.list[32].wind.gust + " mph";

var daySix = document.getElementById("weathericon6");
daySix.src =  `https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}.png`;
var date6 = document.getElementById('date6');
date6.textContent = new Date(data.list[39].dt_txt).toLocaleDateString();
daySix = document.getElementById("temp6");
daySix.textContent = "Temperature: " + data.list[39].main.temp +  " Celsius";
daySix = document.getElementById("hum6");
daySix.textContent = "Humidity: " + data.list[39].main.humidity + "%";
daySix = document.getElementById("wind6");
daySix.textContent = "Wind: " + data.list[39].wind.gust + " mph";
}