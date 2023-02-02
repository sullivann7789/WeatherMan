
console.log(dayjs().format('dddd'));
console.log(dayjs().add(1, 'day').format('dddd'));
var button = document.getElementById('go');
var returncity = localStorage.getItem('cities-saved');
var returncityparsed = JSON.parse(returncity);
console.log(returncityparsed)
var citiessaved = returncityparsed;
if(citiessaved == null){
   var citiessaved = {};
}
button.addEventListener('click', weatherman);

function weatherman(ev) {
ev.preventDefault();
var usercity = document.getElementById('input');
var city = usercity.value;
citynospace= city.replace(/\s/g, '');
var cityencoded = encodeURIComponent(city);
console.log(cityencoded);
var MrWeatherManKey = "192a57d57d5d52c033c3ff8f0bae517c";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityencoded + "&appid=" + MrWeatherManKey + "&units=imperial"
var div = document.getElementsByClassName('marketing-site-content-section-block');
var forecastqueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityencoded + "&appid=" + MrWeatherManKey + "&units=imperial"
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
    var icon = parseresults.weather[0].icon;
    var cityresults = document.getElementById('firstcity');
    console.log(parseresults.weather[0].icon);
    //for (let i = 0; i < 5;  i++) {
      //  var list = $("marketing-site-content-section-block").append('<ul>');
        //var listings = list.append('<li>');
        //listings.innerHTML = temp;
      
    //}
    //console.log(icon);
    //var currentimg = icon.replace(/\"/g, "");
    var fiveday = document.getElementById(city)
    $(".marketing-site-content-section").append("<div class='right'id ='"+ citynospace +"'><h3>"+ dayjs().format('dddd')+" in " + city +"<img class='icon' src='http://openweathermap.org/img/wn/"+ icon +  "@2x.png'>"+ "</h3><button class='save'>Save</button><button class='clear'>Clear</button><p>" + "Temperature: " + temp + " F \n Feels like: " + feelslike +  " F \n Min Temp: " + tempmin + " F \n Max Temp: " + tempmax + " F \n Pressure: " + pressure + " hPa \n Humidity: " + humidity + " %</p></div>");
    //var h3 = document.querySelectorAll("h3");
    //var todaycast = document.querySelectorAll("p");
    //for(i=0; i<10; i++){
     console.log(data);
     var savebutton = document.getElementsByClassName("save");

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
            $(".marketing-site-content-section").append("<div class='day-5 "+citynospace+"'>" + "<h4>"+dayjs().add(1, 'day').format('dddd')+"</h4>" + "<br>"+ "<img class='icon' src='http://openweathermap.org/img/wn/" + day1img + "@2x.png'>" + "Temperature: " + day1.temp + " F<br>" + "Min. Temperature: " + day1.tempmin + " F<br>" + "Max. Temperature: " + day1.tempmax + " F<br>" + "Feels Like: " + day1.feelslike + "<br>" + "Clouds: " + day1.clouds + "<br>" + "Humidity: " + day1.humidity +"%"+ "<br>" + "Windspeed: " + day1.windspeed + " Mp/h"+"<br>" + "Windgust: " + day1.windgust +" Mp/h"+"</div>");
            $(".marketing-site-content-section").append("<div class='day-5 "+citynospace+"'>" +"<h4> "+dayjs().add(2, 'day').format('dddd')+"</h4>" + "<br>"+ "<img class='icon' src='http://openweathermap.org/img/wn/" + day2img + "@2x.png'>"+  "Temperature: " + day2.temp + " F<br>" + "Min. Temperature: " + day2.tempmin + " F<br>" + "Max. Temperature: " + day2.tempmax + " F<br>" + "Feels Like: " + day2.feelslike + "<br>" + "Clouds: " + day2.clouds + "<br>" + "Humidity: " + day2.humidity +"%"+  "<br>" + "Windspeed: " + day2.windspeed + " Mp/h"+"<br>" + "Windgust: " + day2.windgust +" Mp/h"+"</div>");
            $(".marketing-site-content-section").append("<div class='day-5 "+citynospace+"'>" +"<h4>"+dayjs().add(3, 'day').format('dddd')+"</h4>" + "<br>"+ "<img class='icon' src='http://openweathermap.org/img/wn/" + day3img + "@2x.png'>"+  "Temperature: " + day3.temp + " F<br>" + "Min. Temperature: " + day3.tempmin + " F<br>" + "Max. Temperature: " + day3.tempmax + " F<br>" + "Feels Like: " + day3.feelslike + "<br>" + "Clouds: " + day3.clouds + "<br>" + "Humidity: " + day3.humidity + "%"+ "<br>" + "Windspeed: " + day3.windspeed + " Mp/h"+"<br>" + "Windgust: " + day3.windgust +" Mp/h"+"</div>");
            $(".marketing-site-content-section").append("<div class='day-5 "+citynospace+"'>" +"<h4>"+dayjs().add(4, 'day').format('dddd')+"</h4>" + "<br>"+ "<img class='icon' src='http://openweathermap.org/img/wn/" + day4img + "@2x.png'>"+  "Temperature: " + day4.temp + " F<br>" + "Min. Temperature: " + day4.tempmin + " F<br>" + "Max. Temperature: " + day4.tempmax + " F<br>" + "Feels Like: " + day4.feelslike + "<br>" + "Clouds: " + day4.clouds + "<br>" + "Humidity: " + day4.humidity +"%"+  "<br>" + "Windspeed: " + day4.windspeed + " Mp/h"+"<br>" + "Windgust: " + day4.windgust +" Mp/h"+"</div>");
            $(".marketing-site-content-section").append("<div class='day-5 "+citynospace+"'>" + "<h4>"+dayjs().add(5, 'day').format('dddd')+"</h4>" + "<br>"+ "<img class='icon' src='http://openweathermap.org/img/wn/" + day5img + "@2x.png'>"+ "Temperature: " + day5.temp + " F<br>" + "Min. Temperature: " + day5.tempmin + " F<br>" + "Max. Temperature: " + day5.tempmax + " F<br>" + "Feels Like: " + day5.feelslike + "<br>" + "Clouds: " + day5.clouds + "<br>" + "Humidity: " + day5.humidity +"%"+  "<br>" + "Windspeed: " + day5.windspeed + " Mp/h"+"<br>" + "Windgust: " + day5.windgust +" Mp/h"+"</div>");
            var cityresults = document.getElementById('firstcity');
            console.log(data);
            //for (let i = 0; i < 5;  i++) {
            //  var list = $("marketing-site-content-section-block").append('<ul>');
                //var listings = list.append('<li>');
                //listings.innerHTML = temp;
                
            //}
        // $(".fiveday").text(day1 + "\n " + day2 + "\n " + day3 + "\n " + day4 + "\n " + day5);
            console.log(data.city.timezone);
            usercity.value = "";
            var callidclick = $("#"+citynospace+"")
            console.log(callidclick['0'].childNodes[1]);
            var thysavebootin = callidclick['0'].childNodes[1];
            $(thysavebootin).click(function(){
                
                var citysaved = $("#"+citynospace+"");
                var citysavedforecast = $("."+citynospace+"");
                var day1cast = citysavedforecast['0'].outerHTML;
                var day2cast = citysavedforecast['1'].outerHTML;
                var day3cast = citysavedforecast['2'].outerHTML;
                var day4cast = citysavedforecast['3'].outerHTML;
                var day5cast = citysavedforecast['4'].outerHTML;
                console.log(citysavedforecast);
                var citysavedhtml = citysaved['0'].outerHTML;
                var combination = citysavedhtml + day1cast + day2cast + day3cast + day4cast + day5cast;
                console.log(combination); 
                //console.log(returncity);
                citiessaved[citynospace] = combination;
                var savecity = localStorage.setItem('cities-saved', JSON.stringify(citiessaved));
             })
            var thyclearbootin = callidclick['0'].childNodes[2];
            console.log(thyclearbootin);
            $(".clear").click(function(){
                console.log(JSON.parse(returncity));
                var parent = this.parentNode
                var parentid = parent.id
                console.log(parent.id);
                delete citiessaved[parentid];
                $("."+parentid+"").remove()
                //citiessaved.splice($(".clear").parentNode, 1);
                //var citysaved = $("#"+citynospace+"");
                $("#"+parentid+"").remove();
                //var citysavedforecast = $("."+citynospace+"");
                //citysavedforecast.html('');
                //$(".marketing-site-content-section").html('');
                localStorage.setItem('cities-saved', JSON.stringify(citiessaved));
             });
        //  }
        })
        })
        var clearstorage = document.getElementById('clearstorage');
        var dsc = $("#DSC"); 
        if(clearstorage.hasChildNodes()){
            
        } else{
        $("#clearstorage").append("<button id='DSC'>Delete Saved Cities</button>");
        }
        //console.log((JSON.parse(JSON.stringify(Object.values(returncityparsed)[i]).replace(/\[/g, "").replace(/\]/g, "")))); 
        $("#DSC").click(function(){
            $(".day-5").remove();
            $(".right").remove();
            localStorage.clear();
            
            $("#DSC").remove();
        })

};

    $("#savedlocations").click(function(){
        for (let i = 0; i < Object.values(returncityparsed).length; i++) {
            //Object.values(returncityparsed)[i];
    
            (JSON.parse(JSON.stringify(Object.values(returncityparsed)[i]).replace(/\[/g, "").replace(/\]/g, "")));
            //console.log(derp);
            $(".marketing-site-content-section").append(Object.values(returncityparsed)[i]);
        }
        var clearstorage = document.getElementById('clearstorage');
        var dsc = $("#DSC"); 
        if(clearstorage.hasChildNodes()){
            
        } else{
        $("#clearstorage").append("<button id='DSC'>Delete all Cities and Saved Info</button>");
        }
        //console.log((JSON.parse(JSON.stringify(Object.values(returncityparsed)[i]).replace(/\[/g, "").replace(/\]/g, "")))); 
        $("#DSC").click(function(){
            $(".day-5").remove();
            $(".right").remove();
            localStorage.clear();
            
            $("#DSC").remove();
        })
    });


    //var returncity = localStorage.getItem('cities-saved');
    //var returncityparsed = JSON.parse(returncity);
    //var citynames = Object.keys(returncityparsed)
    console.log(Object.values(returncityparsed)[0]);
    console.log(Object.values(returncityparsed).length);

    console.log((JSON.stringify(Object.values(returncityparsed)).replace(/\[/g, "").replace(/\]/g, "")));
    //var whoathatsalottacode = (JSON.stringify(Object.values(returncityparsed)).replace(/\[/g, "").replace(/\]/g, ""))

    //$(".marketing-site-content-section").html(JSON.parse(whoathatsalottacode))

    

    

/*fetch("http://api.openweathermap.org/data/2.5/weather?q=houston&appid=192a57d57d5d52c033c3ff8f0bae517c").then(function(event){
    return event.json();
})
.then(function(data){
    console.log(data);
})*/