function RBG2Hexa(a){
	var arr = a.split(",")
	var r = Number(arr[0])
	var g = Number(arr[1])
	var b = Number(arr[2])

	if(Number.isInteger(r) && Number.isInteger(g) && Number.isInteger(b)){
		document.getElementById('changeC').style.backgroundColor =  'rgb(' + r + ',' + g + ',' + b + ')';
		document.getElementById('colorChange').style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
		var flag = true
		for(i in arr){
			if(Number(arr[i]) > 255 || Number(arr[i]) < 0){
				flag = false
			}
		}
		if(flag){
		  	if(arr.length > 3 || arr.length < 3){
				alert("Invalid Input")
		  	}
			else{
		  		var aux = new Array
		  		var aux2 = ""
		  		for(i in arr){
			  	  	var z = Number(arr[i]).toString(16)
			  	  	if(z.length < 2){
			  	    	var aux2 = aux2 + '0' + z
			  	  	}
			  	  	else{
			  	  		var aux2 = aux2 + z
			  	  	}
		    	}
			    var a = document.getElementById('enterColorCodeHexa').value = aux2
		  	}
		}
		else{
			alert("Invalid Input")
		}
	}
	else{
		alert("Invalid Input")

	}
}

function Hexa2RGB(x){
	document.getElementById('changeC').style.backgroundColor =  '#' + x
    document.getElementById('colorChange').style.backgroundColor =  '#' + x
	var b = x.match(/.{2}/g);
	var arr = new Array
	var re = /[0-9A-Fa-f]{6}/g;
	flag2 = true
	if(!re.test(x)){
		flag2 = false
	}
	for(i in b){
		var g = parseInt(b[i], 16)
		arr.push(g)
	}
	for(i in arr){
		if(isNaN(arr[i])){
			flag2 = false
		}
	}
	if(flag2){
		document.getElementById('enterColorCodeRGB').value  = arr
	}
	else{
		alert("Invalid Input")
	}

}

function change(){
	var a = document.getElementById('enterColorCodeRGB').value			//Recibo el valor del input que contiene el RGB
    var x = document.getElementById('enterColorCodeHexa').value			//Recibo el valor del input que contiene el Hexa
    /*
    Si los dos campos están llenos o ninguno de los dos están llenos, el input no será válido
    */
    if((a.length === 0 && x.length === 0) || (a.length !== 0 && x.length !== 0)){
 		alert("Invalid Input")
    }
    
    else{
    	/*
		Si el primer campo está vacío, convertir de RGB a Hexadecimal
    	*/
		if(a.length !== 0 && x.length === 0){
			RBG2Hexa(a)
		}
		/*
		Si el segundo campo está vacío, convertir de Hexadecimal a RGB 
    	*/
		else if(a.length === 0 && x.length !== 0){
			Hexa2RGB(x)
		}
	}
}