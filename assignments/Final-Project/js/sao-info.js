//URL http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
//APIKEY: c2f1a30c08bf1465f982f10da498c31a
// Brazil zipcode: 52574

// **** WEATHER SUMARY ***
let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=47834,us&units=imperial&APPID=c2f1a30c08bf1465f982f10da498c31a'

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

/**** TEMPLE INFO EVENTS */
/*header and setion elements and store them in variables*/
    

var section = document.querySelector('section');

/*To obtain the JSON*/
var requestURL = 'https://faviola1.github.io/faviolaarellano.github.io/assignments/lesson-13/temple.json';

/*Create a request*/
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var infotemples = request.response;
    show(infotemples);
}

//Creating the town information
function show(jsonObj) {

    var temple = jsonObj['temple'];
    
   for (var i = 0; i<temple.length; i++) {
      if(temple[i].name=='São Paulo')
      
        {   var myArticle = document.createElement('article');
            var myH31 = document.createElement('h3');
            var myH32 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');
            var myList = document.createElement('ul');

            myH31.textContent = 'Name : ' +temple[i].name;
            myH32.textContent = 'Country : ' +temple[i].country;
            myPara1.textContent = 'Address : ' + temple[i].address;
            myPara2.textContent = 'Telephone : ' + temple[i].telephone;
            myPara3.textContent = 'Announcement : ' + temple[i].announcement;
            myPara4.textContent = 'Dedication : ' + temple[i].dedication;
            myPara5.textContent = 'Services : ';

            myList.textContent; 
            var templeServices = temple[i].services;
            for (var j = 0; j < templeServices.length; j++) {
                           
                var listItem = document.createElement('li');
                listItem.textContent = templeServices[j];
                myList.appendChild(listItem);
            }
  
            myArticle.appendChild(myH31);
            myArticle.appendChild(myH32);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);
            myArticle.appendChild(myList);
            section.appendChild(myArticle);
    } 
}

}