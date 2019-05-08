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
	console.log(value)
	var a;
	for(var i in loadData[0].movies){
		if(value == loadData[0].movies[i].gender){
			a = loadData[0].movies[i].movies
		}
	}
	for(var i in a){
		let p = connection.infoMovie("t=" + a[i].nameMovie);
		createDom(p, value);
 	}

 	
}

function createDom(p, value){

	temp = value;
	p.then((resolve)=>{
		var image = document.createElement('img')
		image.src = resolve.Poster
		document.getElementById('elemento').appendChild(image)
		var title = document.createElement('h1')
		title.innerHTML = resolve.Plot
	})
}

function catalog(){
	action = array("Avengers Endgame", "Avengers Age of ultron", "Avengers", "Avengers Infinity War", "X-men origins: Wolverine", "Deadpool")
	horror = array("Nightmare on elm street", "Friday the 13th", "The conjuring", "Halloween", "Chucky", "The ring", "Annabelle")
	fiction = array("The lord of the rings", "Star Wars", "Star Trek", "The hobbit", "Avatar")
	anime = array("Akira", "grave of the fireflies", "My neighbour totoro", "Dragon Ball Super", "Spirited Away")

}