// Declaracion de clases

class MovieClass {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const getValueMovie = new MovieClass("Shrek2", "2004");

console.log(getValueMovie);


/*
// Clase Anonima
var MovieClass = class {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
};

// Clase Expresiva
var MovieClass = class MovieClass {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
};
*/