var apiurl = "http://www.omdbapi.com/?apikey=a532b6c1&";

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

function getInfoMovie(url,string){
	return new Promise(function(resolve,reject){
		var request = new XMLHttpRequest();	
		request.open('GET', url + string, true);
		request.onload = function(){
			var data = JSON.parse(this.response);
			if(request.status == 200){
				resolve(data)
			}
		}
		request.send();
	})
}

function showInfo(url, string){
	console.log("hole-----");
	var p = getInfoMovie(url, string);
	p.then((data)=>{
		console.log(data);
		document.getElementById('imagen').src = data.Poster
	})
}

function search(){
	let elemento = document.getElementById("buscar");
	let string = elemento.value
	string = "t=" + string
	showInfo(apiurl, string)
}