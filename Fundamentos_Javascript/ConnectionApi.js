class ConnectionApi{

	constructor(){
		this.urlApi = "http://www.omdbapi.com/?apikey=6408a03a&"
		this.genericUrl = "http://www.omdbapi.com/";
	}


	infoMovie(url, string){
		return new Promise(function (resolve, reject) {
			var request = new XMLHttpRequest();
			request.open('GET', url + string, true);
			request.onload = function() {
			  	// response, request
				var data = JSON.parse(this.response);
				if(request.status == 200){
					resolve(data);
				}else{
			  		reject('Error, Validate Information')
			  	}
			};
			request.send();
		})
	}	
}

var connection = new ConnectionApi();

