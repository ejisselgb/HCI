var data = JSON.parse(data);
var m
function loadCatalog(value) {
  borrar()
  for(let i in data[0].collection){
    if (data[0].collection[i].type == value) {
      for (let j in data[0].collection[i].object) {
        m = data[0].collection[i].object[j]
        createDom(m)
      }
    }
  }
}


function borrar() {
  var hijos = document.getElementById('elemento')
  while(hijos.firstChild){
    hijos.removeChild(hijos.firstChild)
  }
}

function createDom(resolve){
    var title = document.createElement('H1')
    title.innerHTML = resolve.name
    document.getElementById('elemento').appendChild(title)

		var image = document.createElement('img')
		image.src = resolve.path_image
		document.getElementById('elemento').appendChild(image)

    var precio = document.createElement('p')
    precio.innerHTML = resolve.valor
    document.getElementById('elemento').appendChild(precio)
}

var usuarios = {usuarios:[]}
var cont = 0
var temp = ""
var usu = {temp: {nombre: "user1", apellido: "user1", email: "user1@email.com", telefono: 1111111, motivo: "Esto es una prueba"}}

function enviar() {
  temp = "user" + cont
  console.log(temp);
  nom = document.getElementById('nombre').value
  ape = document.getElementById('apellido').value
  ema = document.getElementById('email').value
  tel = document.getElementById('telefono').value
  mot = document.getElementById('motivo').value

  usu.temp.nombre = nom
  usu.temp.apellido = ape
  usu.temp.email = ema
  usu.temp.telefono = tel
  usu.temp.motivo = mot

  usu.temp.replace(temp, usu.temp)
  usuarios.usuarios.push(tmp)
  cont++
}
