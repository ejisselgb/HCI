var Data = JSON.parse(data)
console.log(data)

var nombre
var imagen
var infor
function loadCatalog(value){
	if(document.getElementById('pic') != null){
		var quitar = document.getElementById('infor');
		while(quitar.firstChild){
			quitar.removeChild(quitar.firstChild)
		}
	}
	for(var i in Data[0].productos){
		if(Data[0].productos[i].seccion == value){
			for(var k in Data[0].productos[i].productos){
				nombre = Data[0].productos[i].productos[k].name
				imagen = Data[0].productos[i].productos[k].url
				infor = Data[0].productos[i].productos[k].info

				/*Pruebas--console.log(nombre)
				console.log(imagen)
				console.log(infor)*/
				createDom()
				}
				/*var quitar = document.getElementById("elemento");
					while (quitar.firstChild){
						quitar.removeChild(quitar.firstChild);
				}*/
		}
	}
}

function createDom(){
		/*var image = document.createElement('img')
		image.src = data.Poster
		document.getElementById("elemento").appendChild(image).src=data.Poster*/

		/*var title = document.createElement("H1")
		title.innerHTML = data.title;
		document.getElementById("elemento").appenchield(title)*/

		/*Para imagenes*/
		/*Title*/
		var titulo = document.createElement('h1');
		titulo.innerHTML = nombre;
		document.getElementById('infor').appendChild(titulo);
		/*Descripcion*/
		var descripcion = document.createElement('p');
		descripcion.innerHTML = infor;
		document.getElementById('infor').appendChild(descripcion);
		/*Para imagenes*/
		var image = document.createElement('img')
		image.src = imagen
		image.id = "pic"
		document.getElementById('infor').appendChild(image)

}
