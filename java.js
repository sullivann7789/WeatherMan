var usercity = document.getElementById('input');
var city = usercity.value;
var MrWeatherManKey = "192a57d57d5d52c033c3ff8f0bae517c";
var button = document.getElementById('go');
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + MrWeatherManKey + "&units=imperial"
var div = document.getElementsByClassName('marketing-site-content-section-block');
var forecastqueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + MrWeatherManKey + "&units=imperial"



button.addEventListener('click', function(event){
//event.preventDefault();
fetch(queryURL).then(function(response) {
 return response.json();
})
.then(function(data) {
        
    var weatherresults = JSON.stringify(data);
    var parseresults = JSON.parse(weatherresults);
    var temp = parseresults.main.temp;
    var feelslike = parseresults.main.feels_like;
    var tempmin = parseresults.main.temp_min;
    var tempmax = parseresults.main.temp_max;
    var pressure = parseresults.main.pressure;
    var humidity = parseresults.main.humidity;
    var cityresults = document.getElementById('firstcity');
    console.log(parseresults.main.temp);
    //for (let i = 0; i < 5;  i++) {
      //  var list = $("marketing-site-content-section-block").append('<ul>');
        //var listings = list.append('<li>');
        //listings.innerHTML = temp;
        
    //}
    $("h3").text(city);
    $("#firstcity").text("temperature: " + temp + " F \n feels like: " + feelslike +  " F \n min temp: " + tempmin + " F \n max temp: " + tempmax + " F \n pressure: " + pressure + "\n humidity: " + humidity + " %");
    console.log(data);
})
});

button.addEventListener('click', function(event){
    event.preventDefault();
    fetch(forecastqueryURL).then(function(response) {
     return response.json();
    })
    .then(function(data) {
       for (let i = 0; i < 9; i++) {
         //  var fivedaycast = parseresults.list[i].main
        var weatherresults = JSON.stringify(data);
        var parseresults = JSON.parse(weatherresults);
        var day1 = {
            temp: JSON.stringify(parseresults.list[0].main.temp),
            feelslike: JSON.stringify(parseresults.list[0].main.feels_like),
            tempmax: JSON.stringify(parseresults.list[0].main.temp_max),
            tempmin: JSON.stringify(parseresults.list[0].main.temp_min),
            humidity: JSON.stringify(parseresults.list[0].main.humidity), 
            clouds: JSON.stringify(parseresults.list[0].weather[0].description),
            windspeed: JSON.stringify(parseresults.list[0].wind.speed),
            windgust: JSON.stringify(parseresults.list[0].wind.gust)
            }
        var day2 = {
            temp: JSON.stringify(parseresults.list[1].main.temp),
            feelslike: JSON.stringify(parseresults.list[1].main.feels_like),
            tempmax: JSON.stringify(parseresults.list[1].main.temp_max),
            tempmin: JSON.stringify(parseresults.list[1].main.temp_min),
            humidity: JSON.stringify(parseresults.list[1].main.humidity), 
            clouds: JSON.stringify(parseresults.list[1].weather[0].description),
            windspeed: JSON.stringify(parseresults.list[1].wind.speed),
            windgust: JSON.stringify(parseresults.list[1].wind.gust)
        }
        var day3 = {
            temp: JSON.stringify(parseresults.list[2].main.temp),
            feelslike: JSON.stringify(parseresults.list[2].main.feels_like),
            tempmax: JSON.stringify(parseresults.list[2].main.temp_max),
            tempmin: JSON.stringify(parseresults.list[2].main.temp_min),
            humidity: JSON.stringify(parseresults.list[2].main.humidity), 
            clouds: JSON.stringify(parseresults.list[2].weather[0].description),
            windspeed: JSON.stringify(parseresults.list[2].wind.speed),
            windgust: JSON.stringify(parseresults.list[2].wind.gust)
        }
        var day4 = {
            temp: JSON.stringify(parseresults.list[3].main.temp),
            feelslike: JSON.stringify(parseresults.list[3].main.feels_like),
            tempmax: JSON.stringify(parseresults.list[3].main.temp_max),
            tempmin: JSON.stringify(parseresults.list[3].main.temp_min),
            humidity: JSON.stringify(parseresults.list[3].main.humidity), 
            clouds: JSON.stringify(parseresults.list[3].weather[0].description),
            windspeed: JSON.stringify(parseresults.list[3].wind.speed),
            windgust: JSON.stringify(parseresults.list[3].wind.gust)
        }
        var day5 = {
            temp: JSON.stringify(parseresults.list[4].main.temp),
            feelslike: JSON.stringify(parseresults.list[4].main.feels_like),
            tempmax: JSON.stringify(parseresults.list[4].main.temp_max),
            tempmin: JSON.stringify(parseresults.list[4].main.temp_min),
            humidity: JSON.stringify(parseresults.list[4].main.humidity), 
            clouds: JSON.stringify(parseresults.list[4].weather[0].description),
            windspeed: JSON.stringify(parseresults.list[4].wind.speed),
            windgust: JSON.stringify(parseresults.list[4].wind.gust)
        }
        $(".fiveday").html("<div class='day-5'>" + "<h4> Day 1</h4>" + "<br>"+ "Temperature: " + day1.temp + "<br>" + "Min. Temperature: " + day1.tempmin + "<br>" + "Max. Temperature: " + day1.tempmax + "<br>" + "Feels Like: " + day1.feelslike + "<br>" + "Clouds: " + day1.clouds + "<br>" + "Humidity: " + day1.humidity + "<br>" + "Windspeed: " + day1.windspeed + "<br>" + "Windgust: " + day1.windgust +"</div>");
        $(".fiveday").append("<div class='day-5'>" +"<h4> Day 2</h4>" + "<br>"+  "Temperature: " + day2.temp + "<br>" + "Min. Temperature: " + day2.tempmin + "<br>" + "Max. Temperature: " + day2.tempmax + "<br>" + "Feels Like: " + day2.feelslike + "<br>" + "Clouds: " + day2.clouds + "<br>" + "Humidity: " + day2.humidity + "<br>" + "Windspeed: " + day2.windspeed + "<br>" + "Windgust: " + day2.windgust +"</div>");
        $(".fiveday").append("<div class='day-5'>" +"<h4> Day 3</h4>" + "<br>"+  "Temperature: " + day3.temp + "<br>" + "Min. Temperature: " + day3.tempmin + "<br>" + "Max. Temperature: " + day3.tempmax + "<br>" + "Feels Like: " + day3.feelslike + "<br>" + "Clouds: " + day3.clouds + "<br>" + "Humidity: " + day3.humidity + "<br>" + "Windspeed: " + day3.windspeed + "<br>" + "Windgust: " + day3.windgust +"</div>");
        $(".fiveday").append("<div class='day-5'>" +"<h4> Day 4</h4>" + "<br>"+  "Temperature: " + day4.temp + "<br>" + "Min. Temperature: " + day4.tempmin + "<br>" + "Max. Temperature: " + day4.tempmax + "<br>" + "Feels Like: " + day4.feelslike + "<br>" + "Clouds: " + day4.clouds + "<br>" + "Humidity: " + day4.humidity + "<br>" + "Windspeed: " + day4.windspeed + "<br>" + "Windgust: " + day4.windgust +"</div>");
        $(".fiveday").append("<div class='day-5'>" + "<h4> Day 5</h4>" + "<br>"+ "Temperature: " + day5.temp + "<br>" + "Min. Temperature: " + day5.tempmin + "<br>" + "Max. Temperature: " + day5.tempmax + "<br>" + "Feels Like: " + day5.feelslike + "<br>" + "Clouds: " + day5.clouds + "<br>" + "Humidity: " + day5.humidity + "<br>" + "Windspeed: " + day5.windspeed + "<br>" + "Windgust: " + day5.windgust +"</div>");
        var cityresults = document.getElementById('firstcity');
        console.log(parseresults.list);
        //for (let i = 0; i < 5;  i++) {
          //  var list = $("marketing-site-content-section-block").append('<ul>');
            //var listings = list.append('<li>');
            //listings.innerHTML = temp;
            
        //}
       // $(".fiveday").text(day1 + "\n " + day2 + "\n " + day3 + "\n " + day4 + "\n " + day5);
        console.log(data);
       }
    })
    });

/*fetch("http://api.openweathermap.org/data/2.5/weather?q=houston&appid=192a57d57d5d52c033c3ff8f0bae517c").then(function(event){
    return event.json();
})
.then(function(data){
    console.log(data);
})*/