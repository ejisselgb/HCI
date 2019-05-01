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

function showInfo(title, poster, plot, year, director, writer, genre){
	if(title != undefined){
		document.getElementById("movieTitle").innerHTML = title + " - " + year;
		document.getElementById("moviePoster").src = poster;
		document.getElementById("moviePlot").innerHTML = "Sinopsis: " + plot;
		document.getElementById("director").innerHTML = "Director(s): " + director;
		document.getElementById("writer").innerHTML = "Writer(s): " + writer;
		document.getElementById("genre").innerHTML = "Genre: " + genre;
		
	}
}

function infoMovie(url, string){

	var request = new XMLHttpRequest();
	request.open('GET', url + string, true);

	request.onload = function(){
		var data = JSON.parse(this.response)
		console.log(data)
		showInfo(data.Title, data.Poster, data.Plot, data.Year, data.Director, data.Writer, data.Genre)
	};

	request.send();

}

function getData(){ 
	var movie_name = document.getElementById("name").value;
	infoMovie(api, "t="+movie_name);
}
