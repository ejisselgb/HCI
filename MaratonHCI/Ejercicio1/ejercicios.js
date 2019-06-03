//Ejercicio 1: (Individual)

//Cree una función que le permita remover el primer y último caracter de una cadena de texto. No se preocupe por las cadenas menores a dos caracteres. Deberá validarlo con el archivo de prueba

function removeChar(cadena){
	cadena2="";
	var i=1;
	for(i;i<cadena.length-1;i++){
		cadena2+=cadena[i];
	}
	return cadena2;
}

x=removeChar('eloquent') //Salida: 'loquen'
console.log(x)
x=removeChar('country') //Salida: 'ountr'
console.log(x)
x=removeChar('person') //Salida: 'erso'
console.log(x)
x=removeChar('place') //Salida: 'lac'
console.log(x)

//Ejercicio 2:

//Ajuste la interfaz del achivo "Interfaz.html", deberá ser responsive. En este ejercicio se espera que los elementos encajen correctamente, entre ellos, sean armoniosos y apliquen los principios de Gestalt. Se deberá utilizar Boostrap

