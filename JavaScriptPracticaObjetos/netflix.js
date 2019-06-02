


var netflixData = netflixData || {};
netflixData.getInfo = {


	nameMovie : '',
	yearMovie : '',
	setnameMovie : function(name,year){
		this.nameMovie = name;
		this.yearMovie = year;
	}
}
function netflixData1(name, year){
	this.nameMovie = name;	
	this.yearMovie = year;
}
var movie1 = new netflixData1('titanic','1912')	

console.log(movie1.nameMovie);
console.log(movie1.yearMovie);