let dataMovies = JSON.parse(data);

//3.3933695999999998,  -76.5408961 casa
//3.348904, -76.531822 javeriana
//3.369541, -76.527540 jardin plaza
//3.476262, -76.527881 chipichape

navigator.geolocation.getCurrentPosition(function(position) {

	/*Traducir esto con el api https://www.neutrinoapi.com/api/geocode-reverse/ 
	
      https://neutrinoapi.com/geocode-reverse?user-id=ejissel&api-key=aP6Sq9xQf84lrQckW77cuwjDd2h8IMRcdM0xGBlYWNymGvUT&latitude=position.coords.latitude&longitude=position.coords.longitude
	*/
	if(position.coords.latitude == 3.3933695999999998 && position.coords.longitude == -76.5408961){

		console.log("Recomendar películas de romance");
	}

	else if(position.latitude == 3.348904 && position.longitude == -76.531822){
		console.log("Recomendar películas animadas");
	}
});



function loadCatalog(gender){
	
	let data = dataMovies[0].movies;

	if(document.getElementById("imgeMovieCat") != null) {
		var list = document.getElementById("catalog");  
		while (list.firstChild) list.removeChild(list.firstChild);
	}

	for(let i in data){
		if(gender.value == data[i].gender) functionLoadData(data[i].movies);
	}
}

function functionLoadData(dataMovies){

	const b = dataMovies.map((x) => connection.infoMovie(connection.urlApi, "t="+x.nameMovie));

	for(var i in b){
		b[i].then((resolve) => {
			var imageMovie = document.createElement('img');
			imageMovie.id = "imgeMovieCat";
		    imageMovie.src = resolve.Poster;
		    document.getElementById("catalog").appendChild(imageMovie);
			console.log(resolve);
		})
	}
}


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

	let valueMovie = document.getElementById("search").value;
	var p = connection.infoMovie(connection.urlApi, "t="+valueMovie);
	let q = p.then((resolve) =>{
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

	var p = connection.infoMovie(connection.genericUrl+"?s=frozen&apikey=6408a03a&", "");
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

	var p = connection.infoMovie(connection.urlApi, "i="+e.target.id);
	let q = p.then((resolve, reject) =>{
		console.log(resolve);
	});
}







