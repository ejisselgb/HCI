$('.search-button').click(function(){
  $(this).parent().toggleClass('open');
});




var Api1 = "http://www.omdbapi.com/?apikey=68507ea3&"

function getInfoMovie(url,string){
	
	return new Promise(function(resolve,reject){

		var request = new XMLHttpRequest();
		request.open('GET',url + string, true);
		request.onload = function () {
			if(request.status===200){
				var data = JSON.parse(this.response);
				resolve(data)
			}
		}
		request.send();
		
	});

}

function Search(){
	var string= document.getElementById('Buscador').value;
	if(string!==""){
		var info= getInfoMovie(Api1,"t="+string)
		//console.log(string)
		info.then((data)=>{
			document.getElementById('exampleModalLabel').innerHTML= data.Title+"("+data.Year+")"
			document.getElementById("imagen").src=data.Poster
			document.getElementById("sipno").innerHTML = "Overview: "+ data.Plot
			document.getElementById("direc").innerHTML = "Director: "+ data.Director
			document.getElementById("act").innerHTML="Actors: "+data.Actors
		});
	}
	document.getElementById('Buscador').value=""
}

