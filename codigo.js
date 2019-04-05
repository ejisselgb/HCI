var netflixData = netflixData ||{};

netflixData.getInfo = {
	nameMovie: "",
	yearMovie: "",
	setter: function(name, year){
		this.nameMovie = name;
		this.yearMovie = year;
	}
}

function movie(name, year){
	this.name = name;
	this.year = year;
}

function mostrar(){				
var username = document.getElementById('etiqueta');
var movie1 = new movie("ADAS", "12312")
netflixData.getInfo.setter("bla", "2013")
//username.value = netflixData.getInfo.nameMovie
username.value = movie1.name;
}

movie.prototype.showInfo = function(){
	console.log(this.name + " " + this.year)
}

var movie1 = new movie("ADAS", "12312")
movie1.showInfo()


