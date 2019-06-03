//Definimos un objeto tipo Persona. Recibe tres parametros para inicializar sus 3 atributos.
function Persona(nombre,cargo,nomina){
	this.nombre=nombre
	this.cargo=cargo
	this.nomina=nomina
}

//Creo el metodo para imprimir los atributos.
Persona.prototype.getAtributos = function(){
	console.log(this.nombre)
	console.log(this.cargo)
	console.log(this.nomina)
}

//Instancio un objeto y llamo el metodo
var Persona0 = new Persona("Juan","Estudiante",37)
Persona0.getAtributos()

//Creamos Profesor que hereda atributos de Persona
function Profesor(nombre,cargo,nomina){
	Persona.call(this,nombre,cargo,nomina)
}

//Creamos Estudiante que hereda atributos de Persona
function Estudiante(nombre,cargo){
	Persona.call(this,nombre,cargo)
}

//Instanciamos y llamamos
Profesor.prototype=Object.create(Persona.prototype)
var Profesor0= new Profesor("Erika","HCI Teacher",70)
Profesor0.getAtributos()

//Instanciamos y llamamos
Estudiante.prototype=Object.create(Persona.prototype)
var Estudiante0 = new Estudiante("Coste","HCI Student")
Estudiante0.getAtributos()