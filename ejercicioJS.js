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
	}else{
		var entrada = document.getElementById("enterColorCodeHexa").value;
		var salida = parseInt(entrada,16);
		document.getElementById("enterColorCodeRGB").value = salida;
		pintar = document.getElementsByClassName("changeColor");
		for(i in pintar){
			pintar[i].style.backgroundColor =  "#"+ entrada;
		}
	}
}

var bandera = 0;