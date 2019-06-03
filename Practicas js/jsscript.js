function hexToRGB(color) {
  if(color.substring(0,1) == '#') {
     color = color.substring(1);
   }

  var rgbColor = {};

  rgbColor.rChannel = parseInt(color.substring(0,2),16);
  rgbColor.gChannel = parseInt(color.substring(2,4),16);
  rgbColor.bChannel = parseInt(color.substring(4),16);

  return rgbColor;
 }
function rgbToHex(){
  if(selectedElement == 1){
    console.log("RGB SELECTED");
    var a = document.getElementById("enterColorCodeRGB").value.split(",");
    for (var i = a.length - 1; i >= 0; i--) {
      if(a[i]<16) a[i] = "0" + parseInt(a[i]).toString(16);
      else a[i] = parseInt(a[i]).toString(16);
    }
    var hexColor = a.join("");
    document.getElementById("enterColorCodeHexa").value = hexColor;
    var elementsToChange = document.getElementsByClassName("changeColor");
    for (var i = elementsToChange.length - 1; i >= 0; i--) {
      elementsToChange[i].style.backgroundColor = "#" + hexColor;
    }
  }else if(selectedElement == 2){
    console.log("HEX SELECTED");
    var hexColor = document.getElementById("enterColorCodeHexa").value;
    var rgbColor = hexToRGB(hexColor);
    document.getElementById("enterColorCodeRGB").value = 
    rgbColor.rChannel.toString() + "," + rgbColor.gChannel.toString() + "," + rgbColor.bChannel.toString();
    var elementsToChange = document.getElementsByClassName("changeColor");
    for (var i = elementsToChange.length - 1; i >= 0; i--) {
      elementsToChange[i].style.backgroundColor = "#" + hexColor;
    }
  }
}
var selectedElement = 0;