/*header and setion elements and store them in variables*/
    
var h2 = document.querySelector('h2');
var section = document.querySelector('article');

/*To obtain the JSON*/
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

/*Create a request*/
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var infotowns = request.response;
    show(infotowns);
}

//Creating the town information
function show(jsonObj) {

    var town = jsonObj['towns'];
    var c=0;

   for (var i = 0; i<town.length; i++) {
      if(town[i].name=='Preston')
      //||town[i].name=='Soda Springs'||town[i].name=='Fish Haven') 
        {
            var myArticle = document.createElement('article');
            /*var myH2 = document.createElement('h2');
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');*/
            var myList = document.createElement('ul');

           /* myH2.textContent = town[i].name;
            myH3.textContent = town[i].motto;
            myPara1.textContent = 'Year Founded: ' + town[i].yearFounded;
            myPara2.textContent = 'Current Population: ' + town[i].currentPopulation;
            myPara3.textContent = 'Average Rainfall: ' + town[i].averageRainfall;*/
            myList.textContent; 

            var townEvents = town[i].events;
            for (var j = 0; j < townEvents.length; j++) {
                           
                var listItem = document.createElement('li');
                listItem.textContent = townEvents[j];
                myList.appendChild(listItem);
            }
    

         //  myArticle.appendChild(myH2);
           /* myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);*/
            myArticle.appendChild(myList);
           section.appendChild(myArticle);
         //  document.getElementById("info").innerHTML = section;
           //document.getElementByClass('container_home')[c].appendChild(myArticle);
          c++;
    } 
}

}