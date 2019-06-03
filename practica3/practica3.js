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

///////////////////////////////////////////////////

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

//////////////////////////////////////////////////
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
estudiante.getInfo.setnamepersona('Isabela Acevedo')
console.log(estudiante.getInfo.nombre)

estudiante.getInfo.setyearnac('2000')
console.log(estudiante.getInfo.anioNac)

estudiante.getInfo.setcodg('8938558')
console.log(estudiante.getInfo.codigo)

///////////////////////////////////////////////////

function estudiante(name,year,cod){
	this.name = name
	this.year = year
	this.cod = cod
}
var estud = new estudiante("Isabela", "2000", "8938558")
console.log(estud.name)
console.log(estud.year)
console.log(estud.cod)

estudiante.prototype.showinfo = function() {
	console.log(estud.name)
	console.log(estud.year)
	console.log(estud.cod)
}
 //prototype hace una copia

estud.showinfo()
 ////////////////////////////////////

function serie(name, year){
	this.name = name
	this.year = year
 }

serie.prototype = Object.create(movie.prototype)
var serieTest = new serie("ShadowHunters","2017") 
serieTest.showinfo();
