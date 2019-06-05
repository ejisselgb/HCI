var netflixData = netflixData || {};

netflixData.getInfo = {
  nameMovie: '',
  yearMovie: '',
  setNameMovie: function(name){
    this.nameMovie = name
  },
  setYearMovie: function(year){
    this.yearMovie = year
  }
}

netflixData.getInfo.setNameMovie('Titanic');
netflixData.getInfo.setYearMovie('1910');
console.log(netflixData.getInfo.nameMovie);
console.log(netflixData.getInfo.yearMovie);

function movie(name, year){
  this.name = name
  this.year = year
}

var movie1 = new movie('Titanic', '1910')
console.log(movie1.name);
console.log(movie1.year);

netflixData.prototype.showinfo = function(){
  console.log("Nombre: ", movie1.nombre);
  console.log("Anio: ", movie1.yer);
};

function serie(name, year){
  this.name = name
  this.year = year
}

serie.prototype = Object.create(movie.prototype)
var serie1 = new serie('Precinto 99', '2016')
console.log(serie1.showinfo());
