class connectionApi{
	constructor(){
	}

	getInfoMovie(string){

	let url = 'http://www.omdbapi.com/?apikey=68507ea3&';

	return new Promise(function(resolve,reject){

		var request = new XMLHttpRequest();
		request.open('GET',url +"t="+string, true);
		request.onload = function () {
			if(request.status===200){
				var data = JSON.parse(this.response);
				resolve(data)
			}
		}
		request.send();
		
	});

}

}