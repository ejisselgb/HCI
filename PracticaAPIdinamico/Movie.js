$('.search-button').click(function(){
  $(this).parent().toggleClass('open');
});




var Api1 = new connectionApi()
var data = JSON.parse(data)

var info2 = undefined

function catalogo(valor){
	for (var i in data[0].movies){
		if(data[0].movies[i].gender==valor){
			for (var k in data[0].movies[i].movies){
				info2=Api1.getInfoMovie(data[0].movies[i].movies[k].nameMovie)
				CreateDom()
			}
		}
	}
}

function CreateDom(){
	info2.then((data)=>{
		var title = document.createElement("H1")
		title.innerHTML=data.Title
		//document.getElementById("titulo2").appendChild(title)


		var image = document.createElement('img')
		image.src=data.Poster
		document.getElementById("elemento").appendChild(image)	


	});


}

function Search(){
	var string= document.getElementById('Buscador').value;
	if(string!==""){
			var info= Api1.getInfoMovie(string)
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

