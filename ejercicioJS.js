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
		var salida = entrada;
		for(i in entrada){
			salida[i] = parseInt(entrada[i]).toString(16);
		}
		document.getElementById("enterColorCodeHexa").value = salida.join("");
		pintar = document.getElementsByClassName("changeColor");
		for(i in pintar){
			pintar[i].style.backgroundColor = "#" + salida.join("");
		}
	}else if(bandera === 2){
		var entrada = document.getElementById("enterColorCodeHexa").value;
		var salida = hexRGB(entrada);
		document.getElementById("enterColorCodeRGB").value = 
    	salida.rChannel.toString() + "," + salida.gChannel.toString() + "," + salida.bChannel.toString();
   		pintar = document.getElementsByClassName("changeColor");
		for(i in pintar){
			pintar[i].style.backgroundColor =  "#"+ entrada;
		}
	}
}

var bandera = 0;