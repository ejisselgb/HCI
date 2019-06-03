

class connectionApi{
	constructor(){
	}


	getInfoMovie(string){
		let url = "http://www.omdbapi.com/?apikey=35400f1e&"

	return new Promise(function(resolve, reject){
		var request = new XMLHttpRequest();
		request.open('GET', url + string, true);
		request.onload = function (){
		var data = JSON.parse(this.response);
		resolve(data)
		}
	request.send();
	});
}


}
