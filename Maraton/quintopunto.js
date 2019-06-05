
function points(array) {
  puntaje = 0
  for (var i = 0; i < array.length; i++) {
    marcador = array[i]
    x = marcador[0]
    y = marcador[2]

    if (x > y) {
      puntaje = puntaje + 3
    }
    if (x == y) {
      puntaje = puntaje + 1
    }
  }
  console.log(puntaje);
}

points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) //Salida 30
points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) //Salida 10
