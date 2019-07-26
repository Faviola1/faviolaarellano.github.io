	/*header and setion elements and store them in variables*/
    
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

        var c=0;
        var town = jsonObj['towns'];
        //var nameTown = ["Preston", "Soda Springs", "Fish Haven"];
  
       for (var i = 0; i<town.length; i++) {
          if(town[i].name=='Preston'||town[i].name=='Soda Springs'||town[i].name=='Fish Haven') 
            {
                var myArticle = document.createElement('section');
                var image=document.createElement('img');
                var myH2 = document.createElement('h2');
                var myH3 = document.createElement('h3');
                var myPara1 = document.createElement('p');
                var myPara2 = document.createElement('p');
                var myPara3 = document.createElement('p');
             

               if(town[i].name='Preston'){
                    image.setAttribute('src','images/preston3.png'); 
                    image.setAttribute('alt', 'Preston-Idaho'); 
                }

                else if(town[i].name='Soda Springs'){
                    image.setAttribute('src','images/soda-spring3.png'); 
                    image.setAttribute('alt', 'Soda Springs-Idaho'); 
                }

                else {
                    image.setAttribute('src','images/fish-haven3.png'); 
                    image.setAttribute('alt', 'Fish Haven-Idaho'); 
                }
                myH2.textContent = town[i].name;
                myH3.textContent = town[i].motto;
                myPara1.textContent = 'Year Founded: ' + town[i].yearFounded;
                myPara2.textContent = 'Current Population: ' + town[i].currentPopulation;
                myPara3.textContent = 'Average Rainfall: ' + town[i].averageRainfall;
      
               // myArticle.appendChild(image);
                myArticle.appendChild(myH2);
                myArticle.appendChild(myH3);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myPara3);
           
                section.appendChild(myArticle);
                
                //var townsId = document.getElementById(town[i].name);

               // townsId.appendChild(section);
             // document.getElementByClass('town')[c].appendChild(myArticle);
  
        } 
    }

    }