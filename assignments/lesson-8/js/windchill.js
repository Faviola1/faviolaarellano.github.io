/*The formula to calculate the wind chill factor is:*/

var t = parseFloat(document.getElementById('temperature').innerHTML);
var s = parseFloat(document.getElementById('wind-speed').innerHTML);
var pow = Math.pow(s,0.16);
var result = 35.74 + (0.6215*t)-(35.75*pow) + (0.4275*t*pow);
document.getElementById('chill').innerHTML=result.toFixed(1) + "°";
//document.write(result+"°");
