var dic = {}
var list = []
function getvals(){
	var a = document.getElementById("nombre").value 
	var b = document.getElementById("apellido").value 
	var c = document.getElementById("email").value 
	var d = document.getElementById("telefono").value 
	var e = document.getElementById("motivo").value 
	aux = {}
	aux["nombre"] = a
	aux["apellido"] = b
	aux["email"] = c
	aux["telefono"] = d
	aux["motivo"] = e
	aux2 = {}
	aux2["user"+ (list.length + 1)	] = aux
	list.push(aux2)
	dic["Usuarios"] = list
	console.log(dic)
}