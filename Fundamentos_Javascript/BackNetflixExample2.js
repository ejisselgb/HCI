function Movie(name){

	this.name = name;
}

var movie1 = new Movie("Buscando a Nemo");
var movie2 = new Movie("Shrek 2");

console.log("El nombre de la primera película es: " + movie1.name);
console.log("El nombre de la segunda película es: " + movie2.name);