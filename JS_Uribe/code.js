function DecToHex(rgb){
    var res = (rgb).toString(16)
    return res
}
function Convert(){
    let string = document.getElementById("enterColorCodeRGB").value
    string = string.split(",")
    r = DecToHex(parseInt(string[0]))
    g = DecToHex(parseInt(string[1]))
    b = DecToHex(parseInt(string[2]))
    res = r+g+b
    
    document.getElementById("enterColorCodeHexa").value = res
    document.getElementById('c1').style.backgroundColor = 'rgb(' + string[0] + ',' + string[1] + ',' + string[2] + ')'
    document.getElementById('c2').style.backgroundColor = 'rgb(' + string[0] + ',' + string[1] + ',' + string[2] + ')'
}
