var api = "http://www.omdbapi.com/?apikey=25a73872&"

function showOnScreen(title, poster){
	document.getElementById("movieTitle").innerHTML = title;
	document.getElementById("poster").src = poster;

}


function infoMovie(url, string){
	var request = new XMLHttpRequest();
	request.open('GET', url + string, true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		console.log(data.Title, data.Poster);
		showOnScreen(data.Title, data.Poster);
	};
	request.send();
}
infoMovie(api, "t=a serbian film");






