var input = document.getElementById("name");
if(input != null){
	input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
	event.preventDefault();
	document.getElementById("btn").click();
	}
	});
}
var api = "http://www.omdbapi.com/?apikey=25a73872&"

function showInfo(title, poster, plot, director, writer, genre){
	if(title != undefined){
		document.getElementById("movieTitle").innerHTML = title;
		document.getElementById("moviePoster").src = poster;
		document.getElementById("moviePlot").innerHTML = plot;
		document.getElementById("director").innerHTML = director;
		document.getElementById("writer").innerHTML = writer;
		document.getElementById("genre").innerHTML = genre;
	
	}
}

function infoMovie(url, string){
	return new Promise(function(resolve, reject){
		var request = new XMLHttpRequest();
		request.open('GET', url + string, true);
		request.onload = function(){
			var data = JSON.parse(this.response)
			resolve(data)
		}
		request.send();
	});
}

function getData(){
	var movie_name = document.getElementById("name").value;
	var p = infoMovie(api, "t="+movie_name);
	p.then((data)=>{
		if(data.Response == "True"){
			showInfo(data.Title + " - " + data.Year, data.Poster, "Plot: " + data.Plot, "Director(s): " + data.Director,
			"Write(s): " + data.Writer, "Genre: " + data.Genre);
		}
		else{
			showInfo("Search for a movie", "", "", "", "", "")

		}
	});
}
