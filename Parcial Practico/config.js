var data = JSON.parse(data);
var m

function loadProducts(value) {
  for(l = 1; l <= 4; l++){
    borrar(l)
  }
  for(let i in data[0].productos){
    if (data[0].productos[i].type == value) {
      var cont = 1
      for (let j in data[0].productos[i].object) {
        m = data[0].productos[i].object[j]
        createDom(m, cont)
        cont = cont + 1
      }
    }
  }
}

function borrar(c){
  var hijos = document.getElementById(String(c))
  while(hijos.firstChild){
    hijos.removeChild(hijos.firstChild)
  }
}

function createDom(resolve, cont){
  var title = document.createElement('H5')
  title.style = "text-align: center;"
  title.innerHTML = resolve.name
  document.getElementById(String(cont)).appendChild(title)

	var image = document.createElement('img')
  image.style = "width: 200px; height: 200px; border: black 3px solid; border-radius: 10px"
	image.src = resolve.path_image
	document.getElementById(String(cont)).appendChild(image)

  var precio = document.createElement('p')
  precio.style = "text-align: center;"
  precio.innerHTML = resolve.valor
  document.getElementById(String(cont)).appendChild(precio)
}
