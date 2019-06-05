var Data = JSON.parse(data)
console.log(data)

var nombre
var imagen
var infor
function loadCatalog(value){
	if(document.getElementById('imgMov') != null){
		var ls = document.getElementById('infor');
		while(ls.firstChild){
			ls.removeChild(ls.firstChild)
		}
	}
	for(var i in Data[0].amazon){
		if(Data[0].amazon[i].pagina == value){
			for(var k in Data[0].amazon[i].amazon){
				nombre = Data[0].amazon[i].amazon[k].nameA
				imagen = Data[0].amazon[i].amazon[k].url
				infor = Data[0].amazon[i].amazon[k].info
				createDom()
				}
			}
		}
}

function createDom(){
		var image = document.createElement('img')
		image.src = imagen
		image.id = "imgMov"
		var texto = document.createElement('h1');
		texto.innerHTML = nombre;
		var texto1 = document.createElement('p');
		texto1.innerHTML = infor;
		document.getElementById('infor').appendChild(texto); 
		document.getElementById('infor').appendChild(texto1); 
		document.getElementById('infor').appendChild(image)
}
