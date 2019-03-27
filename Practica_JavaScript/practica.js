document.getElementById('Conver').onclick = function() {Convertir()};
document.getElementById('Borrar').onclick = function() {Borrar()};


function RGBaHexa() {
	var RGB = document.getElementById('enterColorCodeRGB').value;
	var RGBS = RGB.split(",");
	var Hexa = new Array;
	for(var i in RGBS){
		var aux = (Number(RGBS[i]).toString(16));
		if(aux.length < 2){
			aux = "0" + aux;
		}
		Hexa.push(aux);
	}


	return Hexa[0] + Hexa[1] + Hexa[2];
}


function HexatoRGB(){
	var Hexa = document.getElementById('enterColorCodeHexa').value;
    var Numero = parseInt(Hexa, 16);
    var r = (Numero >> 16) & 255;
    var g = (Numero >> 8) & 255
    var b = Numero & 255;
    return r + "," + g + "," + b;
}





function Convertir(){
	if(document.getElementById('enterColorCodeHexa').value !== "" && document.getElementById('enterColorCodeRGB').value !==""){
		alert("Solo un campo debe estar lleno");
		document.getElementById('enterColorCodeHexa').value = "";
		document.getElementById('enterColorCodeRGB').value = "";
		var color = document.getElementsByClassName("changeColor");
		for (var i=0;i < color.length ; i++)(color[i].style.backgroundColor = "#C6C6C6");
	}
	else{
		if(document.getElementById('enterColorCodeHexa').value !== ""){
		//document.getElementById("enterColorCodeRGB").disabled = true;
		var RGB = HexatoRGB();
		document.getElementById("enterColorCodeRGB").value = RGB;
		var color = document.getElementsByClassName("changeColor");
		for (var i=0;i < color.length ; i++)(color[i].style.backgroundColor = 'rgb('+ RGB +')');

	}
		else{
			if(document.getElementById('enterColorCodeRGB').value !==""){
				//document.getElementById("enterColorCodeHexa").disabled = true;
				var Hexade = RGBaHexa();
				document.getElementById("enterColorCodeHexa").value = Hexade;
				var color = document.getElementsByClassName("changeColor");
				for (var i=0;i < color.length ; i++)(color[i].style.backgroundColor = "#"+Hexade);
			}
		}	
	}	
}


function Borrar(){
	document.getElementById('enterColorCodeHexa').value = "";
	document.getElementById('enterColorCodeRGB').value = "";
	var color = document.getElementsByClassName("changeColor");
	for (var i=0;i < color.length ; i++)(color[i].style.backgroundColor = "#C6C6C6");
}



