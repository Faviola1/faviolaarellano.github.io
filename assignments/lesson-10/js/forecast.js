//URL http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
//APIKEY: c2f1a30c08bf1465f982f10da498c31a
// Preston id: 5604473
// ****** FORECAST ***
let forecastQuery = new XMLHttpRequest();
let apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=c2f1a30c08bf1465f982f10da498c31a'

forecastQuery.open('GET', apiURLforecast, true);
forecastQuery.send();

forecastQuery.onload =  function ()
 {
    let forecastData = JSON.parse(forecastQuery.responseText);
    console.log(forecastData);

    var time = forecastData.list;

    var icon = [];
    var temp = [];
    var desc = [];

    for(i = 0; i < time.length; i++){
        
        if(time[i].dt_txt.includes ('18:00:00')) {  
            
            wicon.push(forecastData.list[i].weather[0].icon);
            wtemp.push(forecastData.list[i].main.temp);
            wdesc.push(forecastData.list[i].weather[0].description);
        }
    }
let img01 = icon[0];
let temp01 = temp[0];
let desc01 = desc[0];

let img02 = icon[1];
let temp02 = temp[1];
let desc02 = desc[1];

let img03 = icon[2];
let temp03 = temp[2];
let desc03 = desc[2];

let img04 = icon[3];
let temp04 = temp[3];
let desc04 = desc[3];

let img05 = icon[4];
let temp05 = temp[4];
let desc05 = desc[4];


document.getElementById('day1').innerHTML = temp01.toFixed(0)+" &deg;F";
document.getElementById('icon1').setAttribute("src", "https://openweathermap.org/img/w/" + img01 + ".png");


document.getElementById('day2').innerHTML = temp02.toFixed(0)+" &deg;F";
document.getElementById('icon2').setAttribute("src", "https://openweathermap.org/img/w/" + img02 + ".png");


document.getElementById('day3').innerHTML = temp03.toFixed(0)+" &deg;F";
document.getElementById('icon3').setAttribute("src", "https://openweathermap.org/img/w/" + img03 + ".png");


document.getElementById('day4').innerHTML = temp04.toFixed(0)+" &deg;F";
document.getElementById('icon4').setAttribute("src", "https://openweathermap.org/img/w/" + img04 + ".png");

document.getElementById('day5').innerHTML = temp05.toFixed(0)+" &deg;F";
document.getElementById('icon5').setAttribute("src", "https://openweathermap.org/img/w/" + img05 + ".png");


document.getElementById('icon1').setAttribute("alt", desc01);
document.getElementById('icon2').setAttribute("alt", desc02);
document.getElementById('icon3').setAttribute("alt", desc03);
document.getElementById('icon4').setAttribute("alt", desc04);
document.getElementById('icon5').setAttribute("alt", desc05);
}