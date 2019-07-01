let weatherQuery = new XMLHttpRequest();
let apiurl = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=735c55b5712d6e13581d3eae04c8d957";
weatherQuery.open('Get', apiurl, true);
weatherQuery.send();

weatherQuery.onload = function(){
    let apiData = JSON.parse(weatherQuery.responseText);
    console.log(apiData);

    document.getElementById('jcur').innerHTML = apiData.weather[0].main;
    document.getElementById('jtempmax').innerHTML = apiData.main.temp_max + "&deg;F";
    document.getElementById('jhum').innerHTML = apiData.main.humidity + "%";
    document.getElementById('s').innerHTML = apiData.wind.speed + " mph";

}

let forecastQuery = new XMLHttpRequest();
let apiurl2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=735c55b5712d6e13581d3eae04c8d957";
forecastQuery.open('Get', apiurl2, true);
forecastQuery.send();

forecastQuery.onload = function(){
    let apiData2 = JSON.parse(forecastQuery.responseText);
    console.log(apiData2);


    var jlist = apiData2.list;

    var jcon = [];

    for(i = 0; i < jlist.length; i++){
        if(jlist[i].dt_txt.includes('18:00:00')){
        jcon.push(apiData2.list[i].weather[0].icon);
        }
    }

    let img01 = jcon[0];
    let img02 = jcon[1];
    let img03 = jcon[2];
    let img04 = jcon[3];
    let img05 = jcon[4];
    
    document.getElementById('jimg1').setAttribute("src", "http://openweathermap.org/img/w/" + img01 + ".png");
    document.getElementById('jimg2').setAttribute("src", "http://openweathermap.org/img/w/" + img02 + ".png");
    document.getElementById('jimg3').setAttribute("src", "http://openweathermap.org/img/w/" + img03 + ".png");
    document.getElementById('jimg4').setAttribute("src", "http://openweathermap.org/img/w/" + img04 + ".png");
    document.getElementById('jimg5').setAttribute("src", "http://openweathermap.org/img/w/" + img05 + ".png");

    var discon = [];

    for(x = 0; x < jlist.length; x++){
        if(jlist[x].dt_txt.includes('18:00:00')){
        discon.push(apiData2.list[x].weather[0].description);
        }
    }

    let dis1 = discon[0];
    let dis2 = discon[1];
    let dis3 = discon[2];
    let dis4 = discon[3];
    let dis5 = discon[4];

    document.getElementById('jimg1').setAttribute("alt", dis1);
    document.getElementById('jimg2').setAttribute("alt", dis2);
    document.getElementById('jimg3').setAttribute("alt", dis3);
    document.getElementById('jimg4').setAttribute("alt", dis4);
    document.getElementById('jimg5').setAttribute("alt", dis5);

    var jtemp = [];

    for(x = 0; x < jlist.length; x++){
        if(jlist[x].dt_txt.includes('18:00:00')){
        jtemp.push(apiData2.list[x].main.temp);
        }
    }

    let jtemp1 = jtemp[0];
    let jtemp2 = jtemp[1];
    let jtemp3 = jtemp[2];
    let jtemp4 = jtemp[3];
    let jtemp5 = jtemp[4];

    document.getElementById('jdaytemp1').innerHTML = jtemp1;
    document.getElementById('jdaytemp2').innerHTML = jtemp2;
    document.getElementById('jdaytemp3').innerHTML = jtemp3;
    document.getElementById('jdaytemp4').innerHTML = jtemp4;
    document.getElementById('jdaytemp5').innerHTML = jtemp5;
}