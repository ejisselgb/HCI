
var data = JSON.parse(data)

var geo = 'https://www.neutrinoapi.com/api/geocode-reverse?user-id='
var params = {
}
navigator.geolocation.getCurrentPosition(function(position){
console.log(position);

if(position.coords.latitude === 3.3490582 && position.coords.longitude === -76.53155339999999)
	console.log("holi")
});

var apiurl = new connectionApi();

var infor = undefined
/*ppp= getInfoMovie();*/

console.log(data)

function searchMovie(){
	console.log("a");
	/*console.log(data.Title, data.Year, data.Poster);*/
	var string = document.getElementById('busqueda').value
	var p = apiurl.getInfoMovie("t="+string)
	p.then((data)=>{
		/*console.log(data.Title, data.Year, data.Poster);*/
		document.getElementById('title123').innerHTML = data.Title;
		document.getElementById("imagen12").src= data.Poster;
		document.getElementById("sinopsis").innerHTML = data.Plot;

	});
}

function loadcatalog(value){
	for(var i in data[0].movies){
		if(data[0].movies[i].gender == value){
			for(var k in data[0].movies[i].movies){
				infor = apiurl.getInfoMovie("t=" + data[0].movies[i].movies[k].nameMovie)
				createDom();
			}
			var quitar = document.getElementById("elemento");
			while (quitar.firstChild){

				quitar.removeChild(quitar.firstChild);
			}

		}

		}
}

function createDom(){
	infor.then((data)=>{
		var image = document.createElement('img')
		image.src = data.Poster
		document.getElementById("elemento").appendChild(image).src=data.Poster

		/*var title = document.createElement("H1")
		title.innerHTML = data.title;
		document.getElementById("elemento").appenchield(title)*/

	});

}
/*getInfoMovie(apiurl, "t=nemo")*/

