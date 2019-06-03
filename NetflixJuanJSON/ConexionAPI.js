var urlAPIlocation = "https://cors-anywhere.herokuapp.com/https://neutrinoapi.com/geocode-reverse?user-id=juanfesba&api-key=P3dHMZnlfbS07BQzCgUdvH9wOemoqCShptEZlHxM9XaS89KZ"

var infoMovie = function(url,string,titleId,imageId,descriptionId,yearId,genreId,directorId){
    //console.log("aiuda",string)
    var request = new XMLHttpRequest();
    request.open('GET',url + string,true);
    request.onload = function(){
        var data = JSON.parse(this.response);
        //console.log(data)
        //console.log("#"+data.Title+"#")
        if(data.Title=="undefined" || data.Title==null){
            document.getElementById(titleId).innerHTML="Error"
            document.getElementById(imageId).src="undefined.jpg"
            document.getElementById(descriptionId).innerHTML="Puede que la internet haya fallado o no haya encontrado una pelicula con ese nombre."
            document.getElementById(yearId).innerHTML=""
            document.getElementById(genreId).innerHTML=""
            document.getElementById(directorId).innerHTML=""
        }
        else{
            console.log(data.Director)
            if(document.getElementById(titleId) != null){
                document.getElementById(titleId).innerHTML= data.Title
            }
            //document.getElementById(titleId).innerHTML= data.Title
            if(document.getElementById(imageId) != null){
                document.getElementById(imageId).src=data.Poster
            }
            //document.getElementById(imageId).src=data.Poster

            if(document.getElementById(directorId) != null){
                document.getElementById(directorId).innerHTML=data.Director
            }

            //document.getElementById(directorId).innerHTML=data.Director
            //console.log(data)
            if(data.Poster=="N/A"){
                document.getElementById(imageId).src="undefined.jpg"
            }
            else{

            }
            if(descriptionId!="None"){
                document.getElementById(descriptionId).innerHTML=data.Plot
            }
            if(yearId!="None"){
                document.getElementById(yearId).innerHTML=data.Year
            }
            if(genreId!="None"){
                document.getElementById(genreId).innerHTML=data.Genre
            }
        }
            
    };
    request.send();
}

var findLocation = function(url,latitud,longitud){
    var request = new XMLHttpRequest();
    request.open('GET',url + latitud + longitud,true);
    console.log(url+latitud+longitud)
    request.onload = function(){
        //console.log(this.response)
        var data = JSON.parse(this.response);
        document.getElementById("ubicacion").innerHTML="Ciudad: "+data.city
        document.getElementById("direccion").innerHTML="Direccion: "+data.address
        console.log(data.city)
        console.log(data.address)
    };
    request.send();
}