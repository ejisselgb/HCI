
var conecction = new ConnectionApi()
var loaddata = JSON.parse(data)
var p;
console.log(loaddata)
function loadCatalogo(val){
	generos = loaddata[0].movies
	var div = document.getElementById("elemento")
	while (div.firstChild){
		div.removeChild(div.firstChild)
	}
	if(document.getElementById("elemento"))
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
		img.src = resolve.Poster
		document.getElementById('elemento').appendChild(img)
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


