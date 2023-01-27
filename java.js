var usercity = document.getElementById('input');
var city = usercity.value;
var MrWeatherManKey = "192a57d57d5d52c033c3ff8f0bae517c";
var button = document.getElementById('go');
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + MrWeatherManKey;
var div = document.getElementsByClassName('marketing-site-content-section-block');



button.addEventListener('click', function(event){
event.preventDefault();
fetch(queryURL).then(function(response) {
 return response.json();
})
.then(function(data) {
        
    var weatherresults = JSON.stringify(data.main);
    var parseresults = JSON.parse(weatherresults);
    var temp = parseresults.temp;
    var feelslike = parseresults.feels_like;
    var tempmin = parseresults.temp_min;
    var tempmax = parseresults.temp_max;
    var pressure = parseresults.pressure;
    var humidity = parseresults.humidity;
    var cityresults = document.getElementById('firstcity');
    console.log(weatherresults);
    //for (let i = 0; i < 5;  i++) {
      //  var list = $("marketing-site-content-section-block").append('<ul>');
        //var listings = list.append('<li>');
        //listings.innerHTML = temp;
        
    //}
    $("h3").text(city);
    cityresults.innerHTML = "temperature: " + temp + "\n feels like: " + feelslike + "\n min temp: " + tempmin + "\n max temp: " + tempmax + "\n pressure: " + pressure + "\n humidity: " + humidity;
    console.log(data);
})
});

/*fetch("http://api.openweathermap.org/data/2.5/weather?q=houston&appid=192a57d57d5d52c033c3ff8f0bae517c").then(function(event){
    return event.json();
})
.then(function(data){
    console.log(data);
})*/