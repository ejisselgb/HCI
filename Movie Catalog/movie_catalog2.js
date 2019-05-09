var input = document.getElementById("name");
let temp;
if(input != null){
	input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
	event.preventDefault();
	document.getElementById("btn").click();
	}
	});
}

var connection = new ConnectionApi()
var loadData = JSON.parse(data)

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

function getData(){
	var movie_name = document.getElementById("name").value;
	var p = connection.infoMovie("t="+movie_name);
	p.then((data)=>{
		if(data.Response == "True"){
			showInfo(data.Title + " - " + data.Year, data.Poster, "Plot: " + data.Plot, "Director(s): " + data.Director,
			"Writer(s): " + data.Writer, "Genre: " + data.Genre);
		}
		else{
			showInfo("Search for a movie", "", "", "", "", "")

		}
	});
}

function loadCatalog(value){
	var a;
	for(var i in loadData[0].movies){
		if(value == loadData[0].movies[i].genre){
			a = loadData[0].movies[i].movies
		}
	}
	for(var i in a){
		let p = connection.infoMovie("t=" + a[i].nameMovie);
		createDom(p, value);
 	}
 	var nodeParent = document.getElementById("elemento");
		while (nodeParent.firstChild){
    	nodeParent.removeChild(nodeParent.firstChild);
	}
}

function createDom(p, value){
	temp = value;
	p.then((resolve)=>{
		var nodeParent = document.getElementById('elemento');
		var image = document.createElement('img');
		image.setAttribute("src", resolve.Poster);
		nodeParent.appendChild(image)

	})
}

function catalog(){
	var action = ["Avengers Endgame", "Avengers Age of ultron", "Avengers", "Avengers Infinity War", "X-men origins: Wolverine", "Deadpool"]
	var horror = ["Nightmare on elm street", "Friday the 13th", "The conjuring", "Halloween", "Chucky", "The ring", "Annabelle"]
	var fiction = ["The lord of the rings", "Star Wars", "Star Trek", "The hobbit", "Avatar"]
	var anime = ["Akira", "grave of the fireflies", "My neighbour totoro", "Dragon Ball Super", "Spirited Away"]
}
catalog()