var Estudiante = Estudiante || {}

Estudiante.setInfo = {
	codigo : "",
	anonacimiento : "",
	nombre: "",
	setstudent : function(codigo,ano,nombre){
		this.codigo=codigo
		this.anonacimiento=ano
		this.nombre=nombre
	}
}

Estudiante.setInfo.setstudent("0000","1990","Erika")

function EstudianteF(codigo,ano,nombre){
	this.codigo=codigo
	this.anonacimiento=ano
	this.nombre=nombre
}

var EstudianteF = new EstudianteF("0001","1995","Juan")

console.log("Ejercicio Estudiante")

console.log(Estudiante.setInfo)
console.log(EstudianteF)

console.log("Ejercicio Movie Inicial")