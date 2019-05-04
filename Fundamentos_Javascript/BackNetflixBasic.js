// Nombre de espacio global

var NetflixData = NetflixData || {};



// Creación del contenedor llamado NetflixData.getInfo de método y propiedades comunes

NetflixData.getInfo = {
  nameMovie: "", // define atributo para la validación del nombre
  yearMovie: "", // define atributo para validación del teléfono
  getNameMovie: function(name){

  	this.nameMovie = name;

  },

  getYearMovie: function (year){
    this.yearMovie = year
  }
}

NetflixData.getInfo.getNameMovie("Titanic");
NetflixData.getInfo.getYearMovie("1912");
console.log("La película: " + NetflixData.getInfo.nameMovie + " se estrenó en el año: " + parseInt(NetflixData.getInfo.yearMovie));



