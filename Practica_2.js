var netflixData = netflixData || {};

netflixData.getInfo={
	 namemovie:"", 
	 yearmovie:"",
	 setAll: function(name,year){
	 	this.namemovie = name;
	 	this.yearmovie = year;
	 } 

}


var Estudiante = Estudiante || {};

Estudiante.getInfo={
	nombre: "",
	id: "",
	edad: 0,
	setAll2: function(name,i,ed){
		this.nombre = name
		this.id=i
		this.edad=ed
	}
}



function Estudiante2(name,i,ed){
		this.nombre = name
		this.id=i
		this.edad=ed
	}


var estu1 = new Estudiante2("mateo","8935385",19)

Estudiante2.prototype.imprimir = function(){
	console.log(this.nombre)
	console.log(this.id)
	console.log(this.edad)
};

estu1.imprimir()


function Salon(name,i,ed){
	this.nombre=name
	this.id=i
	this.edad=ed
}

Salon.prototype = Object.create(Estudiante2.prototype) 

var sal1 = new Salon("carlos","213123",23)

sal1.imprimir()



