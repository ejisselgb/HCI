function hexRGB(color) {
  if(color.substring(0,1) == '#') {
     color = color.substring(1);
   }
  var rgbColor = {};

  rgbColor.rChannel = parseInt(color.substring(0,2),16);
  rgbColor.gChannel = parseInt(color.substring(2,4),16);
  rgbColor.bChannel = parseInt(color.substring(4),16);

  return rgbColor;
}

function convertirHx(){
	if(bandera === 1){
		var entrada = document.getElementById("enterColorCodeRGB").value.split(",");
		for(var i = entrada.length - 1; i >= 0; i--){
			if(entrada[i]<16) entrada[i] = "0" + parseInt(entrada[i]).toString(16);
      		else entrada[i] = parseInt(entrada[i]).toString(16);
		}
		var salida = entrada.join("");
		document.getElementById("enterColorCodeHexa").value = salida;
		var pintar = document.getElementsByClassName("changeColor");
		for(var i = pintar.length - 1; i >= 0; i--){
			pintar[i].style.backgroundColor = "#" + salida;
		}
	}else if(bandera === 2){
		var entrada = document.getElementById("enterColorCodeHexa").value;
		var salida = hexRGB(entrada);
		document.getElementById("enterColorCodeRGB").value = 
    	salida.rChannel.toString() + "," + salida.gChannel.toString() + "," + salida.bChannel.toString();
   		var pintar = document.getElementsByClassName("changeColor");
		for(var i = pintar.length - 1; i >= 0; i--){
			pintar[i].style.backgroundColor =  "#"+ entrada;
		}
	}
}

var bandera = 0;