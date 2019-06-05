function removeChar(char) {
  ans = ""
  for (var i = 1; i < char.length - 1; i++) {
    ans = ans + char[i]
  }
  console.log(ans);
}

removeChar('eloquent') //Salida: 'loquen'
removeChar('country') //Salida: 'ountr'
removeChar('person') //Salida: 'erso'
removeChar('place') //Salida: 'lac'
