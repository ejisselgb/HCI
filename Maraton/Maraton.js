

function QuintoPunto(A){
	var sum = 0
	for (var i = 0; i < A.length; i++) {
		var sepa=A[0].split(":")
		var num1=parseInt(sepa[0])
		var num2=parseInt(sepa[1])
		if (num1 > num2) {
			sum+=3
		} 
		else {
			if(num1 === num2){
				sum+=1
			}
		}
	}
	console.log(sum)
	return sum
}


navigator.geolocation.getCurrentPosition(Api)

function Api(position){
	var lat= position.coords.latitude
	var long=position.coords.longitude
	var url = "https://api.foursquare.com/v2/venues/search?ll="+lat.toString()+","+long.toString()+"&client_id=HTTT0AV4EAKNF534KPSULCDRNBZC3BGQZXM4L31QPRK43EUB&client_secret=CNK52LXAJET2FOUKM0LWLNQTUKZVWOF5O5SKH3E0LPWZJXOX&v=20190524"
	var request = new XMLHttpRequest();
	request.open('GET',url, true);
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data.response.venues[0].id)
		var url2 = "https://api.foursquare.com/v2/venues/"+data.response.venues[0].id+"/photos?client_id=HTTT0AV4EAKNF534KPSULCDRNBZC3BGQZXM4L31QPRK43EUB&client_secret=CNK52LXAJET2FOUKM0LWLNQTUKZVWOF5O5SKH3E0LPWZJXOX&v=20190524"
		var request2 = new XMLHttpRequest();
		request2.open('GET',url2, true);
		request2.onload = function () {
				var data2 = JSON.parse(this.response);
				console.log(data2)
				var img = data2.response.photos.items[0].prefix 
				var img2=data2.response.photos.items[0].suffix
				console.log(img+img2)
		};
		request2.send();
	};
	request.send()
/*
	var url2 = "https://api.foursquare.com/v2/photos/PHOTO_ID="
	var request2 = new XMLHttpRequest();
	request2.open('GET',url2, true);
	request2.onload = function () {
		var data2 = JSON.parse(this.response);



*/
}



