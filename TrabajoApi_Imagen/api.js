var apiurl = "http://www.omdbapi.com/?apikey=2cbac9d4&";

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
