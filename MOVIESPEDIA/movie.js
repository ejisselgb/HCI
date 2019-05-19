var apiurl = "http://www.omdbapi.com/?apikey=a532b6c1&";

var clase = new connectionApi();

var Data = JSON.parse(data)
console.log(data)

var url = "https://neutrinoapi.com/geocode-reverse?user-id=ejissel&api-key=aP6Sq9xQf84lrQckw77cuwjDd2h8IMRcdM0xGBlYWNymGvUT&latitude=3.3502761999999997&longitude=-76.5314704"  
var params = {
    'user-id': 'ejissel',
    'api-key': 'aP6Sq9xQf84lrQckw77cuwjDd2h8IMRcdM0xGBlYWNymGvUT',
};

navigator.geolocation.getCurrentPosition(function(position){
	console.log(position)
	if(position.coords.latitude == 3.3502761999999997 || position.coords.longitude == -76.5314704 ){
		console.log("amor")
	}
})	

var p
function loadCatalog(value){

	if(document.getElementById('imgMov') != null){
		var ls = document.getElementById('elemento');
		while(ls.firstChild){
			ls.removeChild(ls.firstChild)
		}
	}
	for(var i in Data[0].movies){
		if(Data[0].movies[i].gender == value){
			for(var k in Data[0].movies[i].movies){
				console.log(Data[0].movies[i].movies[k].nameMovie)
				p = clase.getInfoMovie(Data[0].movies[i].movies[k].nameMovie)
				createDom()
			}
		}
	}
}

function createDom(){
	p.then((resolve) =>{
		console.log(resolve)
		var image = document.createElement('img')
		image.src = resolve.Poster
		image.id = "imgMov"
		document.getElementById('elemento').appendChild(image)
	})
}

function showInfo(string){
	//console.log("hole-----");
	var p = clase.getInfoMovie(string);
	p.then((data)=>{
		console.log(data);
		//document.getElementById('imagen').src = data.Poster
	})
}

function search(){
	let elemento = document.getElementById("buscar");
	let string = elemento.value
	string = "t=" + string
	showInfo(apiurl, string)
}