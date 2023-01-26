var usercity = document.getElementById('input');
var city = usercity.value;
var MrWeatherManKey = "192a57d57d5d52c033c3ff8f0bae517c";
var button = document.getElementById('go');
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + MrWeatherManKey;



button.addEventListener('click', function(event){
event.preventDefault();
fetch(queryURL).then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})
});

/*fetch("http://api.openweathermap.org/data/2.5/weather?q=houston&appid=192a57d57d5d52c033c3ff8f0bae517c").then(function(event){
    return event.json();
})
.then(function(data){
    console.log(data);
})*/