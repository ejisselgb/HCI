//DE DECIMAL A HEXADECIMAL
function RGB(){
	var resulDec = document.getElementById("enterColorCodeRGB").value.split(",") 
	var lista = ""
	for (var i in resulDec){ 
		var x = Number(resulDec[i]);
		lista += (x.toString(16).toUpperCase())
	}
	return lista
}
//DE HEXADECIMAL A DECIMAL
function Hexa(){
	var resulHexa = document.getElementById("enterColorCodeHexa").value
	console.log(resulHexa);
	var listaH = []
	var x = resulHexa.substring(0,2)
	listaH.push(parseInt(x, 16));
	var y = resulHexa.substring(2,4)
	listaH.push(parseInt(y, 16));
	var z = resulHexa.substring(4,6)
	listaH.push(parseInt(z, 16));
	console.log(listaH);
	return listaH
}
function main(){
	var resulHexa = document.getElementById("enterColorCodeHexa").value
	var resulDec = document.getElementById("enterColorCodeRGB").value
	if(resulHexa.length == 0 && resulDec.length != 0){
		var r = RGB()
		document.getElementById("enterColorCodeHexa").value = r
	}
	else{
		var h = Hexa()
		document.getElementById("enterColorCodeRGB").value = h 
	}
	document.getElementById("colorcito").style.backgroundColor = "#"+resulHexa
	document.getElementById("colorcitos").style.backgroundColor = "#"+resulHexa
}