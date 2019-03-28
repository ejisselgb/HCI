function mostrarRgb(){
	var numbers = (document.getElementById("enterColorCodeRGB").value).split(",")
	var line = ""
	if(Number(numbers[0]) < 16){ line = "0"+ Number(numbers[0]).toString(16)}
	else{line = Number(numbers[0]).toString(16)}
	if(Number(numbers[1]) < 16){ line = line +"0"+ Number(numbers[1]).toString(16)}
	else{line = line + Number(numbers[1]).toString(16)}
	if(Number(numbers[2]) < 16){ line =line + "0"+ Number(numbers[2]).toString(16)}
	else{line = line + Number(numbers[2]).toString(16)}
	document.getElementById("enterColorCodeHexa").value = line
	var objs = document.getElementsByClassName("changeColor")
	var obj1 = objs[0]
	var obj2 = objs[1]
	obj1.style.backgroundColor="#"+line;
	obj2.style.backgroundColor="#"+line;

}

function mostrarHex(){
	var numbers = document.getElementById("enterColorCodeHexa").value
	var line = ""
	var number1 = numbers.substring(0,2)
	var number2 = numbers.substring(2,4)
	var number3 = numbers.substring(4,6)
	line = parseInt(number1, 16) +","+ parseInt(number2, 16)+","+ parseInt(number3, 16)
	document.getElementById("enterColorCodeRGB").value = line
	var objs = document.getElementsByClassName("changeColor")
	var obj1 = objs[0]
	var obj2 = objs[1]
	obj1.style.backgroundColor="rgb("+line+")"
	obj2.style.backgroundColor="rgb("+line+")"
	
}
function mostrar(){
	var numbersRGB = document.getElementById("enterColorCodeRGB").value
	var numbersHex = document.getElementById("enterColorCodeHexa").value
	if(numbersRGB === "" && numbersHex !== "" ){ mostrarHex()
	}
	else if(numbersRGB !== "" && numbersHex === "" ){mostrarRgb()
	}
	else if(numbersRGB !== "" && numbersHex !== "" ){alert("Borrar campo sin uso")
	}
	else{alert("campo vacio")
	}
}
