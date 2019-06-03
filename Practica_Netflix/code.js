var data = JSON.parse(data)
var connection = new connectionApi()
var apiurl = "http://www.omdbapi.com/?apikey=cab589b0&";

navigator.geolocation.getCurrentPosition(function(position){
	if(position.coords.latitude == 3.317467 && position.coords.longitude == -76.551787){
		console.log(position)
	}
})

function search(){
	var pelicula = document.getElementById("test")
	var string = pelicula.value
  console.log(string);
	var p = connection.getInfoMovie(string)

	p.then((data)=>{
		console.log(data)
    document.getElementById("imgPeli").src = data.Poster
    document.getElementById("ti").innerHTML = data.Title
	})
}

var m;

function loadCatalog(value){
	for(let i in data[0].movies){
		if(data[0].movies[i].gender == value){
			for(let j in data[0].movies[i].movies){
				m = connection.getInfoMovie(data[0].movies[i].movies[j].nameMovie)
				createDom()
			}
			var hijos = document.getElementById('elemento')
			while (hijos.firstChild){
    			hijos.removeChild(hijos.firstChild);
			}
		}
	}
}

function createDom(){
	m.then((resolve)=>{
		console.log(resolve)
		var image = document.createElement('img')
		image.src = resolve.Poster
		document.getElementById('elemento').appendChild(image)
	})
}

navigator.geolocation.getCurrentPosition(function(position){
	console.log(position)
	if(position.coords.latitude != 3.3502761999999997 || position.coords.longitude == -76.5314704 ){
		console.log("flag 1")
	}
})
