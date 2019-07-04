//URL http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
//APIKEY: c2f1a30c08bf1465f982f10da498c31a
// Preston id: 5604473
// ****** FORECAST ***
let forecastRequest = new XMLHttpRequest();
let apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=c2f1a30c08bf1465f982f10da498c31a'

forecastRequest.open('GET', apiURLforecast, true);
forecastRequest.send();

forecastRequest.onload =  function ()
 {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);

    var forecastlist = forecastData.list;
   // var fdate= [];
    var fday=[];
    var ficon = [];
    var ftemp = [];
    var fdesc = [];
   // var day=new Date;

    for(i = 0; i < forecastlist.length; i++){
        
        if(forecastlist[i].dt_txt.includes ('18:00:00')) {  
            
            fday.push(forecastData.list[i].dt_txt);
            ficon.push(forecastData.list[i].weather[0].icon);
            ftemp.push(forecastData.list[i].main.temp);
            fdesc.push(forecastData.list[i].weather[0].description);
        }
    }

  /*  for(i=0;i<5;i++)
    {
        var day=f.date[i];
        fday[i]=day.getDay();
    }*/

let day01= fday[0];     
let img01 = ficon[0];
let temp01 = ftemp[0];
let desc01 = fdesc[0];

let day02= fday[1];     
let img02 = ficon[1];
let temp02 = ftemp[1];
let desc02 = fdesc[1];

let day03= fday[2];     
let img03 = ficon[2];
let temp03 = ftemp[2];
let desc03 = fdesc[2];

let day04= fday[3];     
let img04 = ficon[3];
let temp04 = ftemp[3];
let desc04 = fdesc[3];

let day05= fday[4];     
let img05 = ficon[4];
let temp05 = ftemp[4];
let desc05 = fdesc[4];

document.getElementById("day1").innerHTML = day01;
document.getElementById("day2").innerHTML = day02;
document.getElementById("day3").innerHTML = day03;
document.getElementById("day4").innerHTML = day04;
document.getElementById("day5").innerHTML = day05;

document.getElementById("icon1").setAttribute("src", "http://openweathermap.org/img/w/" + img01 + ".png");
document.getElementById("icon2").setAttribute("src", "http://openweathermap.org/img/w/" + img02 + ".png");
document.getElementById("icon3").setAttribute("src", "http://openweathermap.org/img/w/" + img03 + ".png");
document.getElementById("icon4").setAttribute("src", "http://openweathermap.org/img/w/" + img04 + ".png");
document.getElementById("icon5").setAttribute("src", "http://openweathermap.org/img/w/" + img05 + ".png");

document.getElementById("icon1").setAttribute("alt", desc01);
document.getElementById("icon2").setAttribute("alt", desc02);
document.getElementById("icon3").setAttribute("alt", desc03);
document.getElementById("icon4").setAttribute("alt", desc04);
document.getElementById("icon5").setAttribute("alt", desc05);


document.getElementById("temp1").innerHTML = temp01.toFixed(1) + "&deg;F";
document.getElementById("temp2").innerHTML = temp02.toFixed(1) + "&deg;F";
document.getElementById("temp3").innerHTML = temp03.toFixed(1) + "&deg;F";
document.getElementById("temp4").innerHTML = temp04.toFixed(1) + "&deg;F";
document.getElementById("temp5").innerHTML = temp05.toFixed(1) + "&deg;F";


}