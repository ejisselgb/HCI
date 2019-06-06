var studentData = studentData || {};
studentData.Info = {
	sCode : "",
	sName : "",
	syear : "",
	setStudentInfo: function(code,name, yearB){
		this.sCode = code
		this.sName = name
		this.syear = yearB	
	}
}

function student(code,name,yearB){
	this.sCode = code;
	this.sName = name;
	this.syear = yearB;
}
student.prototype.showNudes = function(packos) {
	console.log("i'll show you my " + packos + " nudes")
};
var juanjito = new student("39654","Juan Josecito","0")
console.log(juanjito.sCode)
console.log(juanjito.sName)
console.log(juanjito.syear)

studentData.Info.setStudentInfo("12345","jose juancito","2020")
console.log(studentData.Info.sCode)
console.log(studentData.Info.sName)
console.log(studentData.Info.syear)

juanjito.showNudes("fucking")

function gueimer(code,name,yearB,status){
	//movie.call(this,sCode)
	//movie.call(this.sName)
	//movie.call(this,syear)
	this.sCode = code;
	this.sName = name;
	this.syear = yearB;
	this.gStatus = status
}

gueimer.prototype = Object.create(student.prototype);

var vegettita = new gueimer("777","samuel","1974","Hey muy buenas a todos guapísimos aqui vegetta 777, en un gameplay en directo de planeta vegetta")
console.log(vegettita.sCode)
console.log(vegettita.gStatus)

