function getData(day, month){	//makes the API call and stores the data locally

	xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	xhr.responseType = 'json';

	xhr.open("GET", "https://football-prediction-api.p.rapidapi.com/api/v2/predictions?federation=UEFA&iso_date=2021-"+day+"-"+month + "&market=classic");
	xhr.setRequestHeader("x-rapidapi-host", "football-prediction-api.p.rapidapi.com");
	xhr.setRequestHeader("x-rapidapi-key", "b2bc59d145mshe59398052477024p1bd251jsne9b034b4d937");

	xhr.send(data);

	
	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === this.DONE) {
			console.log('response', this.response); // JSON response 

        	console.log(this.response.data[i].home_team); 
			console.log("Data loaded");
		}
	});


	
}


function next(){
	document.getElementById("matchup").innerHTML = "Real Madrid" + "<br/>" + "VS" + "<br/>" + "PSG";
	/*if(i >= xhr.response.data.length ){
		document.getElementById("matchup").innerHTML = "Real Madrid" + "<br/>" + "VS" + "<br/>" + "PSG";
		//document.getElementById("root").innerHTML = "No more matches";
	}
	else{
	     document.getElementById("matchup").innerHTML = "Real Madrid" + "<br/>" + "VS" + "<br/>" + "PSG";
		document.getElementById("matchup").innerHTML = xhr.response.data[i].home_team + " <br/>" +" VS " + "<br/>" + xhr.response.data[i].away_team + "   Prediction:"+xhr.response.data[i].prediction;


		i++;
	}
*/
}
