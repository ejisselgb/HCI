var div_ = document.getElementById("myCarousel2")
var i = 0;
rowdiv =  document.createElement('div')
rowdiv.class = "row"
popular = ["1.png", "2.png", "3.png", "4.png"]
while(i < 4){
	col2 =  document.createElement('div')
	col2.class = "row-md-2"
	var img = document.createElement('img')
	img.id = "imgCar"
	img.src = popular[i]
	img.alt = "Card image cap"
	rowdiv.appendChild(img)
	i = i + 1
}
div_.appendChild(rowdiv)

var div2_ = document.getElementById("myCarousel3")
var i = 3;
rowdiv2 =  document.createElement('div')
rowdiv2.class = "row"
while(i >= 0){
	col2 =  document.createElement('div')
	col2.class = "row-md-2"
	var img = document.createElement('img')
	img.id = "imgCar"
	img.src = popular[i]
	img.alt = "Card image cap"
	rowdiv2.appendChild(img)
	i = i - 1
}
div2_.appendChild(rowdiv2)