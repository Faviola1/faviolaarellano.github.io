	/*header and setion elements and store them in variables*/
    
    var h2 = document.querySelector('h2');
    var section = document.querySelector('section');

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
  
      //  for (var i = 0; i < town.length; i++) {
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
           // var myList = document.createElement('ul');

           myH2.textContent = town[2].name;
           myH3.textContent = town[2].motto;
           myPara1.textContent = 'Year Founded: ' + town[2].yearFounded;
           myPara2.textContent = 'Current Population: ' + town[2].currentPopulation;
           myPara3.textContent = 'Average Rainfall: ' + town[2].averageRainfall;
      //  }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
     //   myArticle.appendChild(myList);
        section.appendChild(myArticle);
        

    }