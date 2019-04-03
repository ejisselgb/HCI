var netflixData = netflixData || {};
netflixData.getInfo = {
  nameMovie : "",
  yearMovie :"",
  setNameMovie : function (name,year){
    this.nameMovie = name;
    this.yearMovie = year;
  }
};


netflixData.getInfo.setNameMovie("UP","2015");

function movie (name, year){
  this.name = name;
  this.year = year;
  this.info = name + " - " + year;
  var a = 5;
  console.log("Holiwis" + " " + a.toString());
};

movie.prototype.showInfo = function(){
  return this.info;
}

function serie(name, year){
  movie.call(this,name, year);
}

serie.prototype = Object.create(movie.prototype);

var serieTest = new serie("Shrek","2005");
