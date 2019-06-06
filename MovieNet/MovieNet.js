var data = JSON.parse(data)
var connection = new connectionApi()
var apiurl = "http://www.omdbapi.com/?apikey=d1fa16e7&"

function search(){
	var pelicula = document.getElementById("pelicula")
	var string = pelicula.value
	string = "t=" + string
	var p = connection.getInfoMovie(string)
	
	p.then((data)=>{
		console.log(data)
		document.getElementById("imgcarousel").src = data.Poster
		document.getElementById("plot").src = data.Plot
	})
}

var m;

function loadCatalog(value){
	for(let i in data[0].movies){
		if(data[0].movies[i].gender == value){
			for(let j in data[0].movies[i].movies){
				//var hijos 
				m = connection.getInfoMovie(data[0].movies[i].movies[j].nameMovie)
				createDom()
			}
	//		removeDom(hijos)
		}
	}
}

function createDom(){
	m.then((resolve)=>{
		console.log(resolve)
		var image = document.createElement('img')
		image.src = resolve.Poster
		document.getElementById('elemento').appendChild(image)
		var title = document.createElement('H1')
		title.innerHTML = resolve.title
		var hijo = document.getElementById('elemento').childNodes
		//hijos.push(hijo)
		/*for(let i in hijos){
			document.getElementById('elemento').removeChild(hijos[i])
		}*/		
	})
}
/*
function removeDom(hijos){
	hijos = document.getElementById('elemento').childNodes
	for(let i in hijos){
		for(let j in hijos[i]){
			document.getElementById('elemento').removeChild(hijos[i][j])
		}
	}
}*/