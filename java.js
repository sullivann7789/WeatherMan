

var button = document.getElementById('go');
var citiessaved = []
button.addEventListener('click', weatherman);

function weatherman(ev) {
ev.preventDefault();
var usercity = document.getElementById('input');
var city = usercity.value;
var cityencoded = encodeURIComponent(city);
console.log(cityencoded);
var MrWeatherManKey = "192a57d57d5d52c033c3ff8f0bae517c";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityencoded + "&appid=" + MrWeatherManKey + "&units=imperial"
var div = document.getElementsByClassName('marketing-site-content-section-block');
var forecastqueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityencoded + "&appid=" + MrWeatherManKey + "&units=imperial"
function firstcall() {
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
    var fiveday = document.getElementById(city)
    $(".marketing-site-content-section").append("<div class='fiveday "+city+"'><div class='right'id ='"+ city +"'><h3>" + city + "</h3><button class='save'>Save</button><button class='clear'>Clear</button><p>" + "temperature: " + temp + " F \n feels like: " + feelslike +  " F \n min temp: " + tempmin + " F \n max temp: " + tempmax + " F \n pressure: " + pressure + "\n humidity: " + humidity + " %</p></div></div>");
    //var h3 = document.querySelectorAll("h3");
    //var todaycast = document.querySelectorAll("p");
    //for(i=0; i<10; i++){
     console.log(data);
     var savebutton = document.getElementsByClassName("save");
    
     $(".save").click(function(){
        var citysaved = $("#"+city+"");
        citiessaved.push(citysaved.prevObject.context.all[24].innerHTML);
        var savecity = localStorage.setItem('cities-saved', JSON.stringify(citiessaved));
        console.log(citiessaved);
     })
     function clear(ev){
        ev.preventDefault();

     }
     $(".clear").click(function(){
        //citiessaved.splice($(".clear").parentNode, 1);
        $(".fiveday").remove();
        $(".marketing-site-content-section").remove();
        localStorage.setItem('cities-saved', JSON.stringify(citiessaved));
     });

     

})
}

//button.addEventListener('click', function(event){
   // event.preventDefault();
   function secondcall(){
    fetch(forecastqueryURL).then(function(response) {
     return response.json();
    })
    .then(function(data) {
      // for (let i = 0; i < 9; i++) {
      
         //  var fivedaycast = parseresults.list[i].main
        var weatherresults = JSON.stringify(data);
        var parseresults = JSON.parse(weatherresults);
        var timezone = data.city.timezone;
        var day1icon= JSON.stringify(parseresults.list[8].weather[0].icon)
        var day1img = day1icon.replace(/\"/g, "");
        var day1 = {
            temp: JSON.stringify(parseresults.list[8].main.temp),
            feelslike: JSON.stringify(parseresults.list[8].main.feels_like),
            tempmax: JSON.stringify(parseresults.list[8].main.temp_max),
            tempmin: JSON.stringify(parseresults.list[8].main.temp_min),
            humidity: JSON.stringify(parseresults.list[8].main.humidity), 
            clouds: JSON.stringify(parseresults.list[8].weather[0].description),
            windspeed: JSON.stringify(parseresults.list[8].wind.speed),
            windgust: JSON.stringify(parseresults.list[8].wind.gust)
            }
        var day2icon= JSON.stringify(parseresults.list[16].weather[0].icon)
        var day2img = day2icon.replace(/\"/g, "");    
        var day2 = {
            temp: JSON.stringify(parseresults.list[16].main.temp),
            feelslike: JSON.stringify(parseresults.list[16].main.feels_like),
            tempmax: JSON.stringify(parseresults.list[16].main.temp_max),
            tempmin: JSON.stringify(parseresults.list[16].main.temp_min),
            humidity: JSON.stringify(parseresults.list[16].main.humidity), 
            clouds: JSON.stringify(parseresults.list[16].weather[0].description),
            icon: JSON.stringify(parseresults.list[16].weather[0].icon),
            windspeed: JSON.stringify(parseresults.list[16].wind.speed),
            windgust: JSON.stringify(parseresults.list[16].wind.gust)
        }
        var day3icon= JSON.stringify(parseresults.list[24].weather[0].icon)
        var day3img = day3icon.replace(/\"/g, "");
        var day3 = {
            temp: JSON.stringify(parseresults.list[24].main.temp),
            feelslike: JSON.stringify(parseresults.list[24].main.feels_like),
            tempmax: JSON.stringify(parseresults.list[24].main.temp_max),
            tempmin: JSON.stringify(parseresults.list[24].main.temp_min),
            humidity: JSON.stringify(parseresults.list[24].main.humidity), 
            clouds: JSON.stringify(parseresults.list[24].weather[0].description),
            icon: JSON.stringify(parseresults.list[24].weather[0].icon),
            windspeed: JSON.stringify(parseresults.list[24].wind.speed),
            windgust: JSON.stringify(parseresults.list[24].wind.gust)
        }
        var day4icon= JSON.stringify(parseresults.list[32].weather[0].icon)
        var day4img = day4icon.replace(/\"/g, "");
        var day4 = {
            temp: JSON.stringify(parseresults.list[32].main.temp),
            feelslike: JSON.stringify(parseresults.list[32].main.feels_like),
            tempmax: JSON.stringify(parseresults.list[32].main.temp_max),
            tempmin: JSON.stringify(parseresults.list[32].main.temp_min),
            humidity: JSON.stringify(parseresults.list[32].main.humidity), 
            clouds: JSON.stringify(parseresults.list[32].weather[0].description),
            icon: JSON.stringify(parseresults.list[32].weather[0].icon).replace(/\"/g, ""),
            windspeed: JSON.stringify(parseresults.list[32].wind.speed),
            windgust: JSON.stringify(parseresults.list[32].wind.gust)
        }
        var day5icon= JSON.stringify(parseresults.list[39].weather[0].icon)
        var day5img = day5icon.replace(/\"/g, "");
        var day5 = {
            temp: JSON.stringify(parseresults.list[39].main.temp),
            feelslike: JSON.stringify(parseresults.list[39].main.feels_like),
            tempmax: JSON.stringify(parseresults.list[39].main.temp_max),
            tempmin: JSON.stringify(parseresults.list[39].main.temp_min),
            humidity: JSON.stringify(parseresults.list[39].main.humidity), 
            clouds: JSON.stringify(parseresults.list[39].weather[0].description),
            icon: JSON.stringify(parseresults.list[39].weather[0].icon),
            windspeed: JSON.stringify(parseresults.list[39].wind.speed),
            windgust: JSON.stringify(parseresults.list[39].wind.gust)
        }
        var citygrab = document.getElementsByClassName(city);
        $(".marketing-site-content-section").append("<div class='day-5'>" + "<h4> Day 1</h4>" + "<br>"+ "<img class='icon' src='http://openweathermap.org/img/wn/" + day1img + "@2x.png'>" + "Temperature: " + day1.temp + "<br>" + "Min. Temperature: " + day1.tempmin + "<br>" + "Max. Temperature: " + day1.tempmax + "<br>" + "Feels Like: " + day1.feelslike + "<br>" + "Clouds: " + day1.clouds + "<br>" + "Humidity: " + day1.humidity + "<br>" + "Windspeed: " + day1.windspeed + "<br>" + "Windgust: " + day1.windgust +"</div>");
        $(".marketing-site-content-section").append("<div class='day-5'>" +"<h4> Day 2</h4>" + "<br>"+ "<img class='icon' src='http://openweathermap.org/img/wn/" + day2img + "@2x.png'>"+  "Temperature: " + day2.temp + "<br>" + "Min. Temperature: " + day2.tempmin + "<br>" + "Max. Temperature: " + day2.tempmax + "<br>" + "Feels Like: " + day2.feelslike + "<br>" + "Clouds: " + day2.clouds + "<br>" + "Humidity: " + day2.humidity + "<br>" + "Windspeed: " + day2.windspeed + "<br>" + "Windgust: " + day2.windgust +"</div>");
        $(".marketing-site-content-section").append("<div class='day-5'>" +"<h4> Day 3</h4>" + "<br>"+ "<img class='icon' src='http://openweathermap.org/img/wn/" + day3img + "@2x.png'>"+  "Temperature: " + day3.temp + "<br>" + "Min. Temperature: " + day3.tempmin + "<br>" + "Max. Temperature: " + day3.tempmax + "<br>" + "Feels Like: " + day3.feelslike + "<br>" + "Clouds: " + day3.clouds + "<br>" + "Humidity: " + day3.humidity + "<br>" + "Windspeed: " + day3.windspeed + "<br>" + "Windgust: " + day3.windgust +"</div>");
        $(".marketing-site-content-section").append("<div class='day-5'>" +"<h4> Day 4</h4>" + "<br>"+ "<img class='icon' src='http://openweathermap.org/img/wn/" + day4img + "@2x.png'>"+  "Temperature: " + day4.temp + "<br>" + "Min. Temperature: " + day4.tempmin + "<br>" + "Max. Temperature: " + day4.tempmax + "<br>" + "Feels Like: " + day4.feelslike + "<br>" + "Clouds: " + day4.clouds + "<br>" + "Humidity: " + day4.humidity + "<br>" + "Windspeed: " + day4.windspeed + "<br>" + "Windgust: " + day4.windgust +"</div>");
        $(".marketing-site-content-section").append("<div class='day-5'>" + "<h4> Day 5</h4>" + "<br>"+ "<img class='icon' src='http://openweathermap.org/img/wn/" + day5img + "@2x.png'>"+ "Temperature: " + day5.temp + "<br>" + "Min. Temperature: " + day5.tempmin + "<br>" + "Max. Temperature: " + day5.tempmax + "<br>" + "Feels Like: " + day5.feelslike + "<br>" + "Clouds: " + day5.clouds + "<br>" + "Humidity: " + day5.humidity + "<br>" + "Windspeed: " + day5.windspeed + "<br>" + "Windgust: " + day5.windgust +"</div>");
        var cityresults = document.getElementById('firstcity');
        console.log(parseresults.list);
        //for (let i = 0; i < 5;  i++) {
          //  var list = $("marketing-site-content-section-block").append('<ul>');
            //var listings = list.append('<li>');
            //listings.innerHTML = temp;
            
        //}
       // $(".fiveday").text(day1 + "\n " + day2 + "\n " + day3 + "\n " + day4 + "\n " + day5);
        console.log(data.city.timezone);
        usercity.value = "";
      //  }
    })
    }
    firstcall();
    secondcall();

};
    var returncity = localStorage.getItem('cities-saved');
    var returncityparsed = JSON.parse(returncity);
    $(".marketing-site-content-section").html(returncityparsed);

    

/*fetch("http://api.openweathermap.org/data/2.5/weather?q=houston&appid=192a57d57d5d52c033c3ff8f0bae517c").then(function(event){
    return event.json();
})
.then(function(data){
    console.log(data);
})*/