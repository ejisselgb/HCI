/*var netflixData = netflixData || {};

netflixData.getInfo = {
	nameMovie: '',
	yearMovie: '',
	setter: function(name,year){
		this.nameMovie = name;
		this.yearMovie = year;
	}
}

netflixData.getInfo.setter("titanic", "1999")
console.log("Name", netflixData.getInfo.nameMovie)
console.log("Year", netflixData.getInfo.yearMovie)
*/
function movie(name,year){
	this.name = name
	this.year = year
}

var movie1 = new movie("titanic", "1999")

movie.prototype.print = function(){
	console.log("Name:", this.name)
	console.log("Year:", this.year)
};

function serie(name, year){
	this.name = name;
	this.year = year;
}

serie.prototype = Object.create(movie.prototype)

serie1 = new serie("Stranger Things", "2015")

serie1.print()