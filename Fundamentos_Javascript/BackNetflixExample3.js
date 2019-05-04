function Movie(name){

	this.name = name;
}


Movie.prototype.printInfo = function() {
  console.log("El nombre de la primera película es: " + this.name + " *Esto se está mostrando desde la funcion printInfo");
}

var movie1 = new Movie("Buscando a Nemo");
var movie2 = new Movie("Shrek 2");

movie1.printInfo();
movie2.printInfo();


//console.log(movie1 instanceof Movie); /* Ver si el objeto creado es una instancia de un objeto */


