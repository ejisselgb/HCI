
var estudiante = {};

estudiante.getInfo = {
	name: "",
	year: "",
	code: "",
	setter: function(name, year, code){
		this.name = name;
		this.year = year;
		this.code = code;
	}
}

function estudent(name, year, code){
	this.name = name;
	this.year = year;
	this.code = code;
}
function mostrarEstudiante(){
	var username = document.getElementById('infoEst');
	var estudiante1 = new estudent("alb", "2013", "8934749")
	var estudiante2 = estudiante.getInfo.setter("bla", "2013", "8934749")
	username.value = estudiante1.name;
}