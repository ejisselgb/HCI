var netflixData = netflixData || {};

netflixData.getiInfo = {
	nameMovie: " ",
	yearMovie: " ",
	setnameMovie : function(name,year){
		this.nameMovie = name;
		this.yearMovie = year
	}

}
function movie(name,year){
	this.nameMovie = name
	this.yearMovie = year
}
var movie1 = new movie("The human centipide", "1989");
console.log(movie1.nameMovie)
console.log(movie1.yearMovie)

netflixData.getiInfo.setnameMovie("Titanic","200AC");

console.log(netflixData.getiInfo.nameMovie);
console.log(netflixData.getiInfo.yearMovie);

