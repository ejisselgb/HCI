var uereeleApi = "http://www.omdbapi.com/?apikey=f40c3b22&"
function getInfoMovie(url, string){
	return new Promise(function(resolver,reject){
		var request = new XMLHttpRequest();
		request.open('GET', uereeleApi + string, true);
		request.onload = function(){
			var data = JSON.parse(this.response);
			console.log(data.Title + ": " + data.Plot)
		};
		request.send();
	})
};

function searchMovie(){
	var data = document.getElementById("Input").value
	var p = getInfoMovie(uereeleApi, "t=" + data)
	p.then((resolve) => {
		resolve.Image;
	})

};