var netflixData = netflixData || {};

netflixData.getInfo = {
	namemovie: '',
	yearmovie: '',
	setnamemovie: function(name){
		this.namemovie = name
	},
	getnamemovie: function(){
		return this.namemovie
	},
	setyearmovie: function(year){
		this.yearmovie = year
	},
	getyearmovie: function(){
		return this.yearmovie
	}
}

netflixData.getInfo.setnamemovie('Titanic')
console.log(netflixData.getInfo.getnamemovie())

netflixData.getInfo.setyearmovie('2000')
console.log(netflixData.getInfo.getyearmovie())

function movie(name, year){
	this.name = name
	this.year = year

}
var movie1 = new movie('Pelicula','3000')
console.log(movie1.name)
console.log(movie1.year)

movie.prototype.showInfo = function() {
	console.log('Nombre: ',movie1.name)
	console.log('Año: ',movie1.year)	
};


function serie(name, year){
	this.name = name
	this.year = year
}

serie.prototype = Object.create(movie.prototype)
var serie1 = new serie('Stranger Things', '2016')
console.log(serie1.showInfo())