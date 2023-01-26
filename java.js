var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + MrWeatherManKey;
var city = input.innerHTML;
var MrWeatherManKey = "192a57d57d5d52c033c3ff8f0bae517c";

fetch(queryURL);