class connectionApi{
	constructor(){
		this.apiurl = "http://www.omdbapi.com/?apikey=a532b6c1&";
	}
	getInfoMovie(string){
		let url = "http://www.omdbapi.com/?apikey=a532b6c1&";
		return new Promise(function(resolve,reject){
			var request = new XMLHttpRequest();	
			request.open('GET', url + "t="+ string, true);
			request.onload = function(){
				var data = JSON.parse(this.response);
				//console.log(data)
				if(request.status == 200){
					resolve(data)
				}
			}
			request.send();
		})
	}
	loadJson(data){
	}

}

//funcion asincrona: se ejecuta en paralelo y se queda esperando la respuesta
