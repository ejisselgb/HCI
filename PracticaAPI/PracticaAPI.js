var Api1 = "http://www.omdbapi.com/?apikey=68507ea3&"

function informacion(url,string){

	var request = new XMLHttpRequest();

	console.log(request);
	request.open('GET',url + string, true);
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data.Title,data.Year,data.Poster);
		

	};

	request.send();
}



informacion(Api1,"t=nemo")