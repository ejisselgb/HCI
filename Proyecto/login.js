


var  overlay = document.getElementById('over');
var openPopUp = document.getElementById('acheref')
var aceptar = document.getElementById('AcceptEmail')



openPopUp.addEventListener('click', function(){
  overlay.classList.add('active')


})

function verify(){
  
  var email = document.getElementById('correo').value
  var bool1  = false
  var bool2 = false
  for (var i = 0; i < email.length; i++) {

  	if(email[i] == '@'){
  		bool1 = true
  	}
  	if (email[i] == '.') {
  		bool2 = true
  	}
  }

  console.log(bool1)
  console.log(bool2)

  if(bool1 && bool2){
  	alert('se ha enviado con exito la restauración de la contraseña al correo')
  	overlay.classList.remove('active')
  }
  else{
  	alert('los datos ingresados no son correctos')

  }
}

function verifyLogin(){


  var user = document.forms['myForm']['user'].value
  var pass = document.forms['myForm']['pass'].value

  if(user == "master" && pass == "master"){
    return true
  }else{
    return false
  }

}
