var sitePersonel = {};
var usuarios = []
sitePersonel.usuarios = usuarios;


function save(){
  var firstName = document.getElementById("name").value
  var lastName = document.getElementById("lastName").value
  var email = document.getElementById("email").value
  var phone = document.getElementById("phone").value
  var motivo = document.getElementById("motivo").value
  
  var employee = {
    "nombre": firstName,
    "apellido": lastName,
    "email":email,
    "telefono":phone,
    "motivo": motivo
  }
  sitePersonel.usuarios.push(employee);
  
  console.log(JSON.stringify(sitePersonel));
}