function hex2rgb(hex) {
    // long version
    r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (r) {
        return r.slice(1,4).map(function(x) { return parseInt(x, 16); });
    }
    // short version
    r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (r) {
        return r.slice(1,4).map(function(x) { return 0x11 * parseInt(x, 16); });
    }
    return null;
}
//funcion obtenida de https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb


function rgb2hex(rgb) { 
    var hex = Number(rgb).toString(16).toUpperCase();
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};
//funcion obtenida de https://campushippo.com/lessons/how-to-convert-rgb-colors-to-hexadecimal-with-javascript-78219fdb

function entrada(){

    var hex = document.getElementById("enterColorCodeHexa").value
    var rgb = document.getElementById("enterColorCodeRGB").value
    var flag=true

    if(rgb.length!=0 || hex.length!=0){

        if(rgb.length  == 0 && hex.length  != 0){
            rgb = ''
            var temp = hex2rgb("#"+hex)
            for(var i=0;i<3;i++)
            {
                rgb+= temp[i]+","
            }
            rgb = rgb.slice(0,rgb.length-1)
            document.getElementById("enterColorCodeRGB").value = rgb
        }
        else if(rgb.length  != 0 && hex.length  == 0){
            rgb  = rgb.split(",")
            hex = ''
            for(var i=0;i<3;i++)
            {
                hex+=rgb2hex(rgb[i])
            }
            document.getElementById("enterColorCodeHexa").value = hex
            
        }
        else{
            flag=false
            window.alert("Rellena solo un campo!")
        }
        if(flag){
            var object = document.getElementsByClassName("changeColor")
            object[0].style.backgroundColor = "#"+hex
            object[1].style.backgroundColor = "#"+hex
        }

    }
    else{
        window.alert("Rellena un (solo) campo!")
    }

}

document.getElementById("Convertir").onclick = function(){entrada()};
//document.getElementById("Convertir").onclick = entrada();

//document.getElementById("Convertir").onclick = window.alert("hola");