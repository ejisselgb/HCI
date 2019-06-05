function Estudiante(codigo, nombre, anio){
  this.nombre = nombre
  this.codigo = codigo
  this.anio = anio
}

var estudiante1 = new Estudiante('8925546', 'Santiago', '1999')

var student = student || {};

student.getInfo = {
  name: '',
  year: '',
  code: '',
  setName: function(name){
    this.name = name
  },
  setYear: function(year){
    this.year = year
  },
  setCode: function(code){
    this.code = code
  },
  getName: function(){
    return this.name
  },
  getYear: function(){
    return this.year
  },
  getCode: function(){
    return this.code
  }
}

student.getInfo.setName('Santiago');
student.getInfo.setYear('1999');
student.getInfo.setCode('8925546');
console.log(student.getInfo.getName());
console.log(student.getInfo.getYear());
console.log(student.getInfo.getCode());

Estudiante.prototype.showinfo = function(){
  console.log("Nombre: ", estudiante1.nombre);
  console.log("Codigo: ", estudiante1.codigo);
  console.log("Anio Nacimiennto: ", estudiante1.anio);
};

estudiante1.showinfo()
