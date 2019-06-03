//prototype: copia de un objeto que ya esta declarado, se le asigna una caracteristica/comportamiento adicional pero no deja de ser el
//mismo objeto

var netflixData = netflixData || {}; //nombre de espacio;objeto vacio

netflixData.getInfo = { //objeto
	namemovie: '',
	yearmovie:'',
	setnamemovie: function(name, year){
		this.namemovie = name;
		this.yearmovie = year;
	}
}

function movie(name, year) { //objeto
	this.name = name;
	this.year = year;
}

var movie1 = new movie('Titanic', '22')

console.log(movie1.name);
console.log(movie1.year);

movie.prototype.showinfo = function(){
	console.log(this.name + '' + this.year);
}


function serie (name, year){
	this.name = name;
	this.year = year;
}
serie.prototype = Object.create(movie.prototype)
var serietest = new serie('Natalia','18')


serietest.showinfo();
//console.log(movie1.name);
//console.log(movie1.year);
//netflixData.getInfo.setnamemovie('Titanic','1');
//console.log(netflixData.getInfo.namemovie);
//console.log(netflixData.getInfo.yearmovie);