var urlApi = "http://www.omdbapi.com/?apikey=6408a03a&"
var genericUrl = "http://www.omdbapi.com/";
var urlImg = "http://img.omdbapi.com/?apikey=6408a03a&";

function infoMovie(url, string){

	return new Promise(function (resolve, reject) {
		var request = new XMLHttpRequest();
		request.open('GET', url + string, true);
		request.onload = function() {
		  	// response, request
			var data = JSON.parse(this.response);
			if(request.status == 200){
				resolve(data);
			}else{
		  		reject('Error, Validate Information')
		  	}
		};
		request.send();
	})
}


function searchMovie(){

	console.log(document.getElementById("search").value);
	let valueMovie = document.getElementById("search").value;
	var p = infoMovie(urlApi, "t="+valueMovie);
	let q = p.then((resolve) =>{
		console.log(resolve.Response);
		if(resolve.Response == "True"){
			elementsSearch(resolve.Title, resolve.Poster, resolve.Plot);
		}else{
			elementsSearch("LA PELÍCULA NO EXISTE", "", "");
		}
	});
}

function elementsSearch(title, poster, plot){
	document.getElementById("titleMovie").innerHTML = title;
	document.getElementById("imageMovie").src = poster;
	document.getElementById("titleInfo").innerHTML = plot;
}


function catalogMovies(){

	var p = infoMovie(genericUrl+"?s=frozen&apikey=6408a03a&", "");
	let q = p.then((resolve) =>{

		for(var i in resolve.Search){

			var containerMovie = document.createElement('div');
			containerMovie.id = resolve.Search[i].imdbID; 
			containerMovie.className = "MovieContainer";
			document.getElementById("Gallery").appendChild(containerMovie);

			var titleMovie = document.createElement('p'); 
			titleMovie.className = "movie";
		    titleMovie.innerHTML = resolve.Search[i].Title;
		    containerMovie.appendChild(titleMovie);

		    var imageMovie = document.createElement('img');
		    imageMovie.id = resolve.Search[i].imdbID; 
			imageMovie.className = "movie";
		    imageMovie.src = resolve.Search[i].Poster;
		    imageMovie.onclick = getIdImage;
		    containerMovie.appendChild(imageMovie);

		    
		}
	});
}

function getIdImage(e){

	var p = infoMovie(urlApi, "i="+e.target.id);
	let q = p.then((resolve, reject) =>{
		console.log(resolve);
	});
}






