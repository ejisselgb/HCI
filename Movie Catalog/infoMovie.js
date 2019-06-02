class ConnectionApi{
		
	infoMovie(string){
	let apiUrl = "http://www.omdbapi.com/?apikey=25a73872&";
	return new Promise(function(resolve, reject){
		var request = new XMLHttpRequest();
		request.open('GET', apiUrl + string, true);
		request.onload = function(){
			var data = JSON.parse(this.response)
			resolve(data)
		}
		request.send();
	});


}
}