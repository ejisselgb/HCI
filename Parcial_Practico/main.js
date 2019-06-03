
var data = JSON.parse(data)

function loadProducts(value, parent) {
  for(let i in data[0].productos){

    if (data[0].productos[i].type == value) {
      _data = _data = data[0].productos[i].object[0]
      var newDiv = document.createElement('div')
      newDiv.className= 'carousel-item active';
      newDiv.setAttribute("align", "center")
      document.getElementById(parent).appendChild(newDiv)
      var title = document.createElement('p')
      title.innerHTML = _data.name
      newDiv.appendChild(title)

  		var image = document.createElement('img')
  		image.src = _data.path_image
      image.className = 'imgCarrusel'
      newDiv.appendChild(image)
      console.log(_data.path_image)
      var precio = document.createElement('p')
      precio.innerHTML = _data.description
      newDiv.appendChild(precio)


      for ( j = 1 ; j < data[0].productos[i].object.length ; j++) {
        _data = data[0].productos[i].object[j]


        createDom(_data, parent)

      }
    }
  }
}



function createDom(resolve, parent){


    var newDiv = document.createElement('div')

    newDiv.className= 'carousel-item';

    newDiv.setAttribute("align", "center")
    document.getElementById(parent).appendChild(newDiv)

    var title = document.createElement('p')
    title.innerHTML = resolve.name
    newDiv.appendChild(title)
    console.log(resolve.name)
		var image = document.createElement('img')
		image.src = resolve.path_image
    image.className = 'imgCarrusel'
		newDiv.appendChild(image)
    console.log(resolve.path_image)
    var precio = document.createElement('p')
    precio.innerHTML = resolve.description
    newDiv.appendChild(precio)

}


var l1 = loadProducts('losMasVendidos', 'carousel1')
var l2 = loadProducts('novedades', 'carousel2')
var l3 = loadProducts('descuentos', 'carousel3')
