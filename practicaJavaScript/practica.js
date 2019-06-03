//alert("funciona")

function rgbtohex () {
	var colorRGB = document.getElementById("enterColorCodeRGB").value;
	var arregloRGB = colorRGB.split(",");
	var arregloHexa = new Array;


	for(var i in arregloRGB){
		var codec = (Number(arregloRGB[i]).toString(16))
			if(codec.length < 2){
				codec = "0" + codec;
		}
			arregloHexa.push(codec);
	}

	return arregloHexa[0] + arregloHexa[1] + arregloHexa[2];

}

function hextorgb (){
	var colorHexa = document.getElementById("enterColorCodeHexa").value;
	//se separan de a dos numeros
	var r = colorHexa.substring(0,2);
    var g = colorHexa.substring(2,4);
    var b = colorHexa.substring(4,6);
    //se convierten a base 16
	var r1 = parseInt(r,16);
	var g1 = parseInt(g,16);
	var b1 = parseInt(b,16);


    return r1+ "," + g1 + "," + b1;
}
//se agregó un id en la parte del botón "convertir" ya que no dejaba hacer .onclick con getElementsByClassName
document.getElementById("cambiar").onclick = function () {change()};

	function change(){
		if(document.getElementById('enterColorCodeHexa').value != "" && document.getElementById('enterColorCodeRGB').value !=""){
		alert("Solo debe llenar un campo.");
			document.getElementById('enterColorCodeHexa').value = "";
			document.getElementById('enterColorCodeRGB').value = "";
		}
		//de rgb a hexa
		if(document.getElementById("enterColorCodeRGB").value != ""){
			var toHexa = rgbtohex();
			var changeColor = document.getElementsByClassName("changeColor");
			for(var i = 0; i < changeColor.length; i++)(changeColor[i].style.background= "#" + toHexa);                                                                    
			document.getElementById("enterColorCodeHexa").value = toHexa ;
		}
		else{
			//de hexa a rgb
			if(document.getElementById("enterColorCodeHexa").value != ""){
				var toRGB = hextorgb();
				var changeColor = document.getElementsByClassName("changeColor");
				for(var i = 0; i < changeColor.length; i++)(changeColor[i].style.background= 'rgb('+ toRGB +')');
				document.getElementById("enterColorCodeRGB").value = toRGB ;
			}
		}
	}


