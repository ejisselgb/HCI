var Data = JSON.parse(data)






function show(){
	d = Data[0]["collection"]
	n = d.length
	i = 0
	obj = document.getElementById('container')
	while(i < n){
		var obj2 = document.createElement('p')
		obj2.innerHTML = d[i].type
		obj.appendChild(obj2)
		valores = d[i].object
		n2 = valores.length
		e = 0
		while(e < n2){
			console.log(valores[e])
			var obj2 = document.createElement('p')
			var img = document.createElement('img')
			var obj3 = document.createElement('p')
			obj2.innerHTML = valores[e].name
			obj3.innerHTML = valores[e].valor
			img.src = valores[e].path_image
			obj.appendChild(obj2)
			obj.appendChild(img)
			obj.appendChild(obj3)

			//console.log(valores2)
			e += 1


		}
		i += 1
	}

}
