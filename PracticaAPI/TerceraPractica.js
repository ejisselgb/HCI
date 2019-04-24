


class movie{
	constructor(name,year, likes){
		this.name = name;
		this.year = year;
		this.likes = likes; 
	}


	ShowInfo(){
		console.log("Mi pelicula " + this.name+ " " + "es de " + this.year+" "+"Me gusta: "+this.likes)
		
	}
}


var movie1 = new movie("carnada","1999",20)

movie1.ShowInfo()



class serie extends movie{

}	
serie.prototype.ShowInfo = function() {

		console.log("Mi pelicula " + this.name+ " " + "es de " + this.year)
	}


var serie1 = new serie("yate","1992")

serie1.ShowInfo()

