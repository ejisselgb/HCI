var Estudiante = Estudiante || {};

Estudiante.getInfo = {
	nombre: '',
	codigo: '',
	ano: '',

	setNombre: function(nombre){
		this.nombre = nombre
	},
	setCodigo: function(codigo){
		this.codigo = codigo
	},
	setAno: function(ano){
		this.ano = ano
	},
	getNombre: function(){
		return this.nombre
	},
	getCodigo: function(){
		return this.codigo
	},
	getAno: function(){
		return this.ano
	}
}

Estudiante.getInfo.setNombre('Victor Toro')
Estudiante.getInfo.setCodigo('8934514')
Estudiante.getInfo.setAno('1999')

console.log('Nombre: ',Estudiante.getInfo.getNombre())
console.log('Código: ',Estudiante.getInfo.getCodigo())
console.log('Año Nacimiento: ',Estudiante.getInfo.getAno())
console.log()

function Estudiantefun(codigo, nombre, ano){
	this.nombre = nombre
	this.codigo = codigo
	this.ano = ano
}
var estudiante1 = new Estudiantefun('8934514', 'Victor Toro', '1999')
console.log('Nombre: ',estudiante1.nombre)
console.log('Código: ',estudiante1.codigo)
console.log('Año Nacimiento: ',estudiante1.ano)
console.log()

Estudiantefun.prototype.showInfo = function() {
	console.log('Nombre: ',estudiante1.nombre)
	console.log('Código: ',estudiante1.codigo)
	console.log('Año Nacimiento: ',estudiante1.ano)	
};

estudiante1.showInfo()
