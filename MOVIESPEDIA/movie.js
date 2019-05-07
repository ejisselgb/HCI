var apiurl = "http://www.omdbapi.com/?apikey=a532b6c1&";

var clase = new connectionApi();

var Data = JSON.parse(data)
console.log(data)

// function getInfoMovie(url,string){
// 	return new Promise(function(resolve,reject){
// 		var request = new XMLHttpRequest();	
// 		request.open('GET', url + string, true);
// 		request.onload = function(){
// 			var data = JSON.parse(this.response);
// 			if(request.status == 200){
// 				resolve(data)
// 			}
// 		}
// 		request.send();
// 	})
// }

var p
function loadCatalog(value){
	for(var i in Data[0].movies){
		if(Data[0].movies[i].gender == value){
			for(var k in Data[0].movies[i].movies){
				console.log(Data[0].movies[i].movies[k].nameMovie)
				p = clase.getInfoMovie(Data[0].movies[i].movies[k].nameMovie)
				createDom()
			}
		}
	}
}

function createDom(){
	p.then((resolve) =>{
		console.log(resolve)
		var image = document.createElement('img')
		image.src = resolve.Poster
		document.getElementById('elemento').appendChild(image)
	})
}

function showInfo(string){
	//console.log("hole-----");
	var p = clase.getInfoMovie(string);
	p.then((data)=>{
		console.log(data);
		//document.getElementById('imagen').src = data.Poster
	})
}

function search(){
	let elemento = document.getElementById("buscar");
	let string = elemento.value
	string = "t=" + string
	showInfo(apiurl, string)
}