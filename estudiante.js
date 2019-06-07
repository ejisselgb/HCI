var estudiante = estudiante || {};
estudiante.getInfo={
	codigo : "" ,
	nombre : "",
	fecha : "",
	setDatosEstudiante:function(cod,name,year){
	this.nombre=name;
	this.codigo=cod;
	this.fecha=year;
	}
}
estudiante.getInfo.setDatosEstudiante("819923","danny","19/08/19");
console.log(estudiante.getInfo.codigo);
console.log(estudiante.getInfo.nombre);
console.log(estudiante.getInfo.fecha);

function estudiante(codigo, nombre, fecha){
	this.codigo= codigo;
	this.nombre= nombre;
	this.fecha= fecha;
}
var est = estudiante("819923","danny","19/08/19");
console.log(est.codigo);
console.log(est.nombre);
console.log(est.fecha);

estudiante.prototype.showAllInfo = function(){
	return this.codigo + ", " + this.name + ", " + this.fecha
}

function monitor(name,year){
	this.nombre= nombre;
	this.fecha= fecha;
}

monitor.prototype = Object.create(estudiante.prototype)

var monitortest = new monitor("daniel", "18/10/19")