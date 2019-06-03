var urlAPI = "http://www.omdbapi.com/?apikey=141cc9d0&t=" //+"t=Frozen"

//let var (es local a este archivo)

var infoMovie = function(url,string,titleId,imageId,descriptionId,yearId,genreId,directorId){
    //console.log(string)
    var request = new XMLHttpRequest();
    request.open('GET',url + string,true);
    request.onload = function(){
        var data = JSON.parse(this.response);
        console.log(data)
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
            document.getElementById(titleId).innerHTML=data.Title
            document.getElementById(imageId).src=data.Poster
            if(descriptionId!="None"){
                document.getElementById(descriptionId).innerHTML=data.Plot
            }
            if(yearId!="None"){
                document.getElementById(yearId).innerHTML=data.Year
            }
            if(genreId!="None"){
                document.getElementById(genreId).innerHTML=data.Genre
            }
            document.getElementById(directorId).innerHTML=data.Director
        }
            
    };
    request.send();
}

function holi(){
	x=document.getElementById("titleInput").value
	if(x!=""){
		infoMovie(urlAPI,x,"titleMoviex","imagex","descripcionx","yearx","genrex","directorx")
	}
}

function catalog(x){
    var drama = ["the pianist", "game of thrones", "the godfather","breaking bad","wreck it ralph"];
    var comedia = ["how i met your mother", "friends", "juno","harold kumar","austin powers"];
    var accion = ["star wars", "hulk", "batman returns","superman","world war z"];
    var catalogo=[drama,comedia,accion]
    var i;
    for (i = 0; i < recommendations.length; i++) { 
        infoMovie(urlAPI,catalogo[x-1][i],"titleMovie"+(i+1).toString(),"image"+(i+1).toString(),"None","None","None","director"+(i+1).toString())
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
