class connectionApi{
	getInfoMovie(string) {
		let url = "http://www.omdbapi.com/?apikey=d1fa16e7&"
		return new Promise(function(resolve, reject){
			var request = new XMLHttpRequest();
			request.open('GET', url + "t=" + string, true);
			request.onload = function() {
				var data = JSON.parse(this.response);
				if(request.status == 200){
					resolve(data)
				}else{
					reject(data)
				}
			}
			request.send();	
		})
	}
	loadjson(datajson){
		
	}
}
