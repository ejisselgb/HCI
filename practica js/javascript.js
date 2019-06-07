var netflixDT = netflixDT || {};

netflixDT.getinfo = {
	name: '',
	year: '',
	setname: function(n, y){
		this.name = n;
		this.year = y;
	}
}

function movie(name, year){
	this.name = name;
	this.year = year;
}

var movie1 = new movie('Titanic', '2032')

console.log(movie1.name);
console.log(movie1.year);

movie.prototype.all = function() {
	return this.name + ' ' + this.year + 'melo melo'
};

console.log(movie1.all())

function serie(name, year){
	this.name = name;
	this.year = year;
}

serie.prototype = Object.create(movie.prototype);
var movie2 = new serie('13 reasons why', '2016')
console.log(movie2.name)
console.log(movie2.year)