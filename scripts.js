var i = 0;	//data iterator
var data;	//api data
var xhr;	//xmlHttp request
const d = new Date();
let month = d.getMonth();
let day = d.getDay() + 1;
document.getElementById("matchup").innerHTML = "Real Madrid" + "<br/>" + "VS" + "<br/>" + "PSG";
document.getElementById("prediction").innerHTML = "Prediction: X";
document.getElementById("date").innerHTML = "12.12.2021 21:00";

//getData(day, month);	//store API data locally



