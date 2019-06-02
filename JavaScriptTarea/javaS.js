
function DecToHex(rgb){
	var res = (rgb).toString(16);
	return res
}
function Convert(){
	let array = document.getElementById("enterColorCodeRGB").value.split(",");
	r = DecToHex(parseInt(array[0]))
	g = DecToHex(parseInt(array[1]))
	b = DecToHex(parseInt(array[2]))

	res = r+g+b
	document.getElementById("enterColorCodeHexa").value = res;
	document.getElementById("changeS").style.backgroundColor = 'rgb(' + array[0] + ',' + array[1] + ',' + array[2] + ')';
	document.getElementById("Change").style.backgroundColor = 'rgb(' + array[0] + ',' + array[1] + ',' + array[2] + ')';
		
}