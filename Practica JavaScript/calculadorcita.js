alert("funciona mko")
function toHex(a){
	var a = (a).toString(16);
	return a
}

function getInt(){
	var rgb = document.getElementById("enterColorCodeRGB").value
	rgb=rgb.split(",")
	rgb=rgb.map(rgb => parseInt(rgb))
	a0 = toHex(rgb[0])
	a1 = toHex(rgb[1])
	a2 = toHex(rgb[2])
	ans = a0+a1+a2
	ans = ans.toUpperCase()
	

	document.getElementById("enterColorCodeHexa").value = ans
	document.getElementById("colorcito").style.background = 'rgb(' + [rgb[0],rgb[1],rgb[2]].join(',') + ')';
	document.getElementById("colorcito2").style.background = 'rgb(' + [rgb[0],rgb[1],rgb[2]].join(',') + ')';

	
}

