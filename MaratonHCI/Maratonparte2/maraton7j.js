var loaddata = JSON.parse(data)
var p;
console.log(loaddata)
function showCat(val) {	
	catalogo = loaddata[0].collection
	console.log(catalogo)
	var div = document.getElementById("showsito")
	while(div.firstChild){
		div.removeChild(div.firstChild)
	}
	if (document.getElementById("showsito"))
	for (var i in catalogo){
		if(val == catalogo[i].type){
			var cositas = catalogo[i].object
			console.log(cositas)
			for (var e in cositas){
				//console.log(cositas[e])
				cata(cositas[e])
			}
		}
	}
}
function cata(p){
	console.log(p)
	var img = document.createElement('img')
	var tit = document.createElement('h4')
	var valorsillo = document.createElement('h4')
	img.src = p.path_image
	tit.innerHTML = p.name
	valorsillo.innerHTML = p.valor
	document.getElementById("showsito").appendChild(img)
	document.getElementById("showsito").appendChild(img)
	document.getElementById("showsito").appendChild(tit)
	document.getElementById("showsito").appendChild(tit)
	document.getElementById("showsito").appendChild(valorsillo)
	document.getElementById("showsito").appendChild(valorsillo)
}
