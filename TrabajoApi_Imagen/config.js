
var conecction = new ConnectionApi()
var loaddata = JSON.parse(data)
var p;
console.log(loaddata)
//var apiurl = "http://www.omdbapi.com/?apikey=a532b6c1&";

//let = local

// function infoMovie(url,string){
// 	var request = new XMLHttpRequest();
// 	request.open('GET', url + string, true);
// 	request.onload = function(){
// 		var data = JSON.parse(this.response);
// 		console.log(data);
// 	};
// 	request.send();
// }
// var string = "t=shrek"
// infoMovie(url,string);
function loadCatalogo(val){
	//var nombre = document.createElement('img')
	generos = loaddata[0].movies
	if(document.getElementById("elemento"))
	for (var i in generos) {
			//console.log(loaddata[0].movies[i])
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