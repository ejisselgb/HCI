var urlAPI = "http://www.omdbapi.com/?apikey=141cc9d0&t=" //+"t=Frozen"


//&latitude="

var datos = JSON.parse(datajson);

function loadCatalog(value){
    //console.log(datos[0].movies)
    //console.log(datos[0].movies[0].gender)
    var i=0;
    for (i = 0; i < 4; i++) { 
        //console.log("holi",value)
        //console.log("bai",datos[0].movies[i].gender)
        if(datos[0].movies[i].gender==value){
            var j=0;
            for (j = 0; j < datos[0].movies.length; j++) {  
                //console.log(datos[0].movies[i].movies[j].nameMovie)
                bai(datos[0].movies[i].movies[j].nameMovie,j)
            }
        }
        //infoMovie(urlAPI,catalogo[x-1][i],"titleMovie"+(i+1).toString(),"image"+(i+1).toString(),"None","None","None","director"+(i+1).toString())
    }
    //console.log(datos[0].movies)
}



//let var (es local a este archivo)

//appendChild

//3.369586, -76.527629

navigator.geolocation.getCurrentPosition(function(position){
    console.log(position)
    findLocation(urlAPIlocation,"&latitude="+position.coords.latitude,"&longitude="+position.coords.longitude)
    //if(position.coords.latitude == 3.3490770000000003 && position.coords.longitude == -76.5315404){
    if(position.coords.latitude > 3.3489 && position.coords.latitude < 3.3491 && position.coords.longitude < -76.52 && position.coords.longitude > -76.54){
        console.log("esta en la jave")
    }
    else{
        console.log("no esta en la jave")
    }
})



function holi(){
	x=document.getElementById("titleInput").value
	if(x!=""){
		infoMovie(urlAPI,x,"titleMoviex","imagex","descripcionx","yearx","genrex","directorx")
	}
}

function bai(x,j){
    j=j+1;
    console.log("x",x,j)
    if(x!=""){
        console.log("director"+j)
        infoMovie(urlAPI,x,"titleMovie"+j.toString(),"image"+j.toString(),"descripcion"+j.toString(),"year"+j.toString(),"genre"+j.toString(),"director"+j.toString())
    }
}

function catalog(x){
    var drama = ["the pianist", "game of thrones", "the godfather","breaking bad","wreck it ralph"];
    var comedia = ["how i met your mother", "friends", "juno","harold kumar","austin powers"];
    var accion = ["star wars", "hulk", "batman returns","superman","world war z"];
    var catalogo=[drama,comedia,accion]
    var i;
    for (i = 0; i < recommendations.length; i++) { 
    }
}

var recommendations = ["interstellar", "shrek", "titanic","superman","inside out"];
var i;
for (i = 0; i < recommendations.length; i++) { 
    infoMovie(urlAPI,recommendations[i],"titleMovie"+(i+1).toString(),"image"+(i+1).toString(),"None","None","None","director"+(i+1).toString())
}

string="frozen"
infoMovie(urlAPI,string,"titleMoviex","imagex","None","yearx","genrex","directorx")
console.log("error")
infoMovie(urlAPI,string,"titleMoviex","imagex","None","yearx","genrex","directorx")
