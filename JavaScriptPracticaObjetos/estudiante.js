


var estu = estu || {};

estu.getInfo={

	codes : '',
	years : '',
	names : '',
	setAt : function(code, year, name){
		this.codes = code;
		this.years = year;
		this.names = name;
	}

}
estu.getInfo.setAt('8938633','1999','Nico')
console.log(estu.getInfo.codes)
console.log(estu.getInfo.years)
console.log(estu.getInfo.names)

function estudiante(name, year, code){
	this.codes = code;
	this.years = year;
	this.names = name;
}

var est = new estudiante("Nicolas","1999","8938633")
console.log(est.codes)
console.log(est.years)
console.log(est.names)

estudiante.prototype.all = function(){
	return this.names + ' ' + this.years + ' ' + this.codes


}
console.log(est.all())


function estu(name,year,code){
	this.name = name
	this.year = year
	this.code = code
}

estu.prototype = Object.create(estudiante.prototype);
var estudianteH =  new estu("Nicolas2","12390","120938")
console.log(estudianteH.name)
console.log(estudianteH.year)
console.log(estudianteH.code)




