class MovieClass2 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  get valueAnonim(){

    return this.showValue();
  }

  showValue(){
    var message = "La película: " + this.name + " se estrenó en el año " + this.year;
    return message;
  }
}

const getValueMyMovie = new MovieClass2("Shrek2", "2004");

console.log(getValueMyMovie.valueAnonim);


class Serie2 extends MovieClass2{

  showInfo() {
    console.log("La serie: " + this.name + " se estrenó en el año " + this.year);
  }
}

var s = new Serie2("Black Mirror", "2011");

s.showInfo();

