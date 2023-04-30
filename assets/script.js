var apiKey = 'f4350fd19defdd78556e8fb5cce853eb'
var city = 'toronto'


function getLocation ()  {
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
})

}


function getWeather (lat,lon) {
console.log (lat,lon)
fetch ('http://api.openweathermap.org/data/2.5/forecast?lat=' +lat + '&lon=' + lon + '&appid=' + apiKey)
.then(function (response) {
    return response.json();
}) .then (function (data) {
    console.log(data)
})
}

getLocation()

// console.log(city[3])