//URL http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
//APIKEY: c2f1a30c08bf1465f982f10da498c31a
// Preston id: 5604473
// **** WEATHER ***

let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c2f1a30c08bf1465f982f10da498c31a'

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () 
{
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    //Calulate Wind Child
    var max = weatherData.main.temp_max;
    var min = weatherData.main.temp_min; 
    var speed = weatherData.wind.speed;
    var temp = (max+min)/2;
    var pow = Math.pow(speed,0.16);
    var chill = 35.74 + (0.6215*temp)-(35.75*pow) + (0.4275*temp*pow);
    
    //var chill = 35.74 + 0.6215 * t - 35.75 * Math.pow( s, 0.16 ) + 0.4275 * t * Math.pow( s, 0.16 );

    document.getElementById('currently').innerHTML = weatherData.weather[0].description;
    document.getElementById('temperature').innerHTML = weatherData.main.temp_max;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('wind-speed').innerHTML = weatherData.wind.speed;
    document.getElementById('chill').innerHTML = chill.toFixed( 2 );
}