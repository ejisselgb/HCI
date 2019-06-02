/*
var student = student || {};

student.info = {
	name : "",
	id : "",
	birth : "",
	setter: function(name, id, birth){
		this.name = name;
		this.id = id;
		this.birth = birth;
	}
}
student.info.setter("Camilo", "89354040", "1999")
console.log("Name:", student.info.name)
console.log("ID:", student.info.id)
console.log("Year:", student.info.birth)
*/
function estudiante(name, id, birth){
	this.name = name
	this.id = id
	this.birth = birth
}


var est1 = new estudiante("Camilo", "8935404", "1999")

estudiante.prototype.print = function() {
	console.log("Name:", this.name)
	console.log("ID:", this.id)
	console.log("Birth:", this.birth)
};

est1.print()