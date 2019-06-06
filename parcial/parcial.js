var data = JSON.parse(data)

var crear = function createDom(resolve) {
	var title = document.createElement('H5')
	var image = document.createElement('img')
	var valu = document.createElement('p')
	var div = document.createElement('div')
	div.class = "col-md-2"
	div.id = 'producto'
	image.src = resolve.path_image
	image.id = "tamañoimg"
	title.innerHTML = resolve.name
	valu.innerHTML = resolve.valor
	document.getElementById('productos').appendChild(div)
	document.getElementById('producto').appendChild(image)
	document.getElementById('producto').appendChild(title)
	document.getElementById('producto').appendChild(valu)
}	

function loadCatalog(value){
	var hijos = document.getElementById('productos')
		while (hijos.firstChild){
    		hijos.removeChild(hijos.firstChild);
    	}

	for(let i in data[0].productos){
		if(data[0].productos[i].type == value){
			for(let j in data[0].productos[i].object){
				var pro = data[0].productos[i].object[j]
				crear(pro)
			}
		}
	}
}

