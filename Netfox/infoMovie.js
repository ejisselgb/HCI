class ConnectionApi{
	constructor(){		
	}
	getInfoMovie(string){
	var url = "http://www.omdbapi.com/?apikey=a532b6c1&"
	return new Promise(function(resolve,reject){
		var request = new XMLHttpRequest();	
		request.open('GET', url + "t="+ string, true);
		request.onload = function(){
			var data = JSON.parse(this.response);
			if(request.status == 200){
				resolve(data)
			}
		}
		request.send();
	})
}
}