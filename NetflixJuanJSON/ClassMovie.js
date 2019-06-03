class MovieClass{
	constructor(name,year,likes){
		this.name=name;
		this.year=year;
		this.likes = likes;
	}

	showInfo(){
		console.log("Mi Pelicula: " + this.name+ "  Año: " + this.year + " Me gusta: " + this.likes);
	}
}

console.log("Clases Movies")
var MovieClass0 = new MovieClass("Game of Thrones",2019,50)
MovieClass0.showInfo()

class Serie extends MovieClass{
	showInfo(){
		console.log("Mi Pelicula: " + this.name+ "  Año: " + this.year);
	}
}

var Serie0 = new Serie("Breaking Bad",2012)
Serie0.showInfo()