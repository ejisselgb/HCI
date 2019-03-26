function colorToSigned24Bit(s) {
    return (parseInt(s.substr(1), 16) << 8) / 256;
}

function rgbToHex(){
  if(selectedElement == 1){
    console.log("RGB SELECTED");
    var a = document.getElementById("enterColorCodeRGB").value.split(",");
    for (var i = a.length - 1; i >= 0; i--) {
      a[i] = parseInt(a[i]).toString(16);
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
    var rgbColor = colorToSigned24Bit("#" + hexColor);
    document.getElementById("enterColorCodeRGB").value = rgbColor;
    var elementsToChange = document.getElementsByClassName("changeColor");
    for (var i = elementsToChange.length - 1; i >= 0; i--) {
      elementsToChange[i].style.backgroundColor = "#" + hexColor;
    }
  }
}
var selectedElement = 0;