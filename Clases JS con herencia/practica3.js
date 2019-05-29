var netflixData = netflixData || {};
netflixData.getInfo ={
	nameMovie : '',
	yearMovie : '',
	setnamemovie: function(name){
		this.nameMovie = name
	},
	setyearmovie: function(year){
		this.yearMovie = year
	}
}
netflixData.getInfo.setnamemovie('Titanic')
console.log(netflixData.getInfo.nameMovie)
netflixData.getInfo.setyearmovie('1999')
console.log(netflixData.getInfo.yearMovie)



function movie(name,year){
	this.name = name
	this.year = year
}
var movie1 = new movie("Titanic", "1923")
//console.log(movie1.name)
//console.log(movie1.year)

movie.prototype.showinfo = function() {
	console.log(this.name)
	console.log(this.year)
};


var estudiante = estudiante || {};
estudiante.getInfo ={
	nombre : '',
	codigo : '',
	anioNac : '',
	setnamepersona: function(name){
		this.nombre = name
	},
	setyearnac: function(year){
		this.anioNac = year
	},
	setcodg: function(cod){
		this.codigo = cod
	}	
}
estudiante.getInfo.setnamepersona('Daniel Mamian')
console.log(estudiante.getInfo.nombre)

estudiante.getInfo.setyearnac('1999')
console.log(estudiante.getInfo.anioNac)

estudiante.getInfo.setcodg('8545671')
console.log(estudiante.getInfo.codigo)



function estudiante(name,year,cod){
	this.name = name
	this.year = year
	this.cod = cod
}
var estud = new estudiante("Daniel", "1999", "8545671")
console.log(estud.name)
console.log(estud.year)
console.log(estud.cod)

estudiante.prototype.showinfo = function() {
	console.log(estud.name)
	console.log(estud.year)
	console.log(estud.cod)
}


estud.showinfo()


function serie(name, year){
	this.name = name
	this.year = year
 }

serie.prototype = Object.create(movie.prototype)
var serieTest = new serie("Vikings","2015") 
serieTest.showinfo();

function Animal (nombre) {
  this.nombre = nombre;
}
Animal.prototype.moverse = function () {
  console.log(this.nombre + ' Se mueve');
}

class Acuatico extends Animal {
  moverse() {
    super.moverse();
    console.log(this.nombre + ' Esta nadando');
  }
}

var pez = new Acuatico('Nemo');
pez.moverse();