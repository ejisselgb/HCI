var apiurl = "http://www.omdbapi.com/?apikey=2cbac9d4&";

var conecction = new ConnectionApi()
var loaddata = JSON.parse(data)
var p;
console.log(loaddata)

function infoMovie(){
	var data =  document.getElementById("Pelicula").value
	var p = getInfoMovie(apiurl,"t="+ data)
	console.log(p)
	p.then((resolve)=>{
		console.log(resolve)
		document.getElementById("img1").src = resolve.Poster ;
	})
};

function getInfoMovie(url, string){
  return new Promise(function(resolve, reject){
        var request = new XMLHttpRequest();
				request.open('GET',url + string, true);
				request.onload = function(){
					var data = JSON.parse(this.response);
					if (request.status == 200){
							resolve(data)
					}
				};
				request.send();
	;});
};




navigator.geolocation.getCurrentPosition(function(position){
	console.log(position)
	if(position.cords.latitude == 3.3502761999999997 || position.coords.longitude == -76.5314704){
		console.log("boi")
	}
})

function loadCatalog(val){
	generos = loaddata[0].movies

	
		var Div = document.getElementById("elemento")
		while(Div.firstChild){
			Div.removeChild(Div.firstChild)
		}
	
	
	
	for (var i in generos) {
		if (val == generos[i].gender) {
			var peliculas = generos[i].movies
			for (var e in peliculas) {
				p  = conecction.getInfoMovie(peliculas[e].nameMovie)
				createDom(p)
			}		
  		}
	}
}

function createDom(p){
	p.then((resolve) =>{
		var img = document.createElement('img')
		img.src = resolve.Poster;
		img.id = "imgTest"
		document.getElementById('elemento').appendChild(img)
		
	})
}
function showInfo(string){
	var p = getInfoMovie(string);
	p.then((data)=>{
		console.log(data);
		document.getElementById('imagen').src = data.Poster
	})
}

function search(){
	let elemento = document.getElementById("buscar");
	let string = elemento.value
	string = "t=" + string
	showInfo(string)
}