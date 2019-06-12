//current date dynamically in the following date format: Monday, 6 April 2020

var month = new Array ("January","February","March","April","May","June","July","Augst","September","October","November","December");
var dayofweek = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var d=new Date();
document.write(dayofweek[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear());
