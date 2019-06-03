var netflixData = netflixData || {}

netflixData.setInfo = {
	namemovie : "",
	anomovie : "",
	setnamemovie : function(name,ano){
		this.namemovie=name
		this.anomovie=ano
	}
}

netflixData.setInfo.setnamemovie("Titanic","2020")
console.log(netflixData.setInfo.namemovie)
console.log(netflixData.setInfo.anomovie)
document.getElementById("hola").innerHTML=netflixData.setInfo.namemovie

function movie(name,year){
	this.name=name
	this.year=year
}
var movie0 = new movie("Shrek","2007")

var movie1 = new netflixData.setInfo.setnamemovie("Titanic","2020")

console.log(movie0.name);
console.log(movie1.namemovie);

console.log("Prototype")

movie.prototype.showinfo = function(){
	console.log(this.name)
	console.log(this.year)
}

movie0.showinfo()

function serie(name,year){

	movie.call(this,name,year)
}

serie.prototype=Object.create(movie.prototype)

console.log("Ejercicio serie")

serie0 = new serie("Arrow","2003")
console.log(serie0.name)
console.log(serie0.year)
//serie0.showinfo()