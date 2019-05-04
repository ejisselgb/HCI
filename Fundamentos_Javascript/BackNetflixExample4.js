function Movie(name, year, likes){

	this.name = name;
	this.year = year;
	this.likes = likes;
}


Movie.prototype.printInfo = function() {
  console.log("El nombre es: " + this.name + " *Esto se está mostrando desde la funcion printInfo");
}


function Serie(name, year){

	Movie.call(this, name, year);
}

Serie.prototype = Object.create(Movie.prototype);

Serie.prototype.constructor = Serie;

// Reemplazar el metodo "printInfo"
Serie.prototype.printInfo = function(){
  console.log("Estoy viendo " + this.name + ". Y se estrenó el " + this.year + ".");
};

// Llamado y validacion del objeto heredado
var serie1 = new Serie("Las Chicas del Cable", "2017");
serie1.printInfo();  


//console.log(movie1 instanceof Movie); /* Ver si el objeto creado es una instancia de un objeto 



