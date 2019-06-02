

var openPopUp = document.getElementById('filtrar'),
    overlay = document.getElementById('overlay'),
    popUp = document.getElementById('popUp'),
    aceptar = document.getElementById('buttonFilt')

openPopUp.addEventListener('click', function(){
  overlay.classList.add('active')


})


aceptar.addEventListener('click',function(){
  




  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  select = document.getElementById('selecting')
  for (i = 0; i < tr.length; i++) {
    var valueS = select.options[select.selectedIndex].value 
    td = tr[i].getElementsByTagName("td")[valueS];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
  overlay.classList.remove('active')




})
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function allLetter(inputtxt){ 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      //alert('Your name have accepted : you can try another');
      return true;
      }
      else
      {
      //alert('Please input alphabet characters only');
      return false;
      }
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function revisarForm(){
  var nID = document.getElementById('numeroID');
  var nombreF = document.getElementById('nombreFor');
  var apellidoF = document.getElementById('apellidoFor');
  var emailF = document.getElementById('emailFor');
  var usuarioF = document.getElementById('usuarioFor');
  var contraseñaF = document.getElementById('contraseñaFor');
  var confirmarContraseñaF = document.getElementById('confirmarContraseñaFor');
  var verC = false
  var clength = true
  if (contraseñaF.value == confirmarContraseñaF.value){
    verC = true
  }
  if(nID.value.length == 0){
    clength = clength&&false
  } 
  if(nombreF.value.length == 0){
    clength = clength&&false
  } 
  if(apellidoF.value.length == 0){
    clength = clength&&false
  } 
  if(emailF.value.length == 0){
    clength = clength&&false
  } 
  if(usuarioF.value.length == 0){
    clength = clength&&false
  } 
  if(contraseñaF.value.length == 0){
    clength = clength&&false
  } 
  if(confirmarContraseñaF.value.length == 0){
    clength = clength&&false
  }
  if (!clength){
    alert('por favor llenar todos los espacios del fomulario')
  }
  else if (!verC) {
    alert('las contraseñas no coinciden')
  } 
  else if(allLetter(nombreF) && allLetter(apellidoF) && validateEmail(emailF.value)&&isNumeric(nID.value)){
    var add = addElement()
  }
  else{
    alert('Los datos ingresados no son correctos');
  }
  

}

function openPage(pageName, menu ,id , elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  men = document.getElementsByClassName("container-fluid");

  for (i = 0; i < men.length; i++) {
    men[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  document.getElementById(menu).style.display = "block";
  document.getElementById(id).style.backgroundColor = "#3E90DB";
}

function load(){
  document.getElementById('RegistroEmpleado').style.display = "block";

  men = document.getElementsByClassName("container-fluid");

  for (i = 0; i < men.length; i++) {
    men[i].style.display = "none";
  }
  document.getElementById("cont").style.display = "block";
  document.getElementById('RegistroEmpleado').style.display = "block";
  document.getElementById('Reg').style.backgroundColor = "#3E90DB";
}

loading = load();



function addElement(){

  var cedula = document.getElementById('numeroID')
  var nombre = document.getElementById('nombreFor')
  var usuario = document.getElementById('usuarioFor')
  var  Rol = document.getElementById('rol')
  var valueS = Rol.options[Rol.selectedIndex].value 

  var contraseña = document.getElementById('contraseñaFor')
  var contraseñaConfirmacion = document.getElementById('confirmarContraseñaFor')
  var apellidos = document.getElementById('apellidoFor')
  var email = document.getElementById('emailFor')
  var salarioV =document.getElementById('salarioV')



  var table= document.getElementById('myTable')

  var row = table.insertRow(table.length)

  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2)
  var cell4 = row.insertCell(3)
  var cell5 = row.insertCell(4)

  cell1.innerHTML = cedula.value
  cell2.innerHTML = nombre.value
  cell3.innerHTML = usuario.value
  cell4.innerHTML = valueS.value
  cell5.innerHTML = '<button onclick="edite()" style=" background-color: #4ab5ab; border: none; border-radius : 100%; width: 20%; "> <img src= "edit.svg" style="width : 15px;"></button> <button onclick="delete()"  style=" background-color:#e54060;  border:none; border-radius : 100%; width: 20%" ><img src= "delete.svg"  style="width : 15px;" > </button>'


  cedula.value = ""
  nombre.value = ""
  usuario.value = ""
  contraseña.value = ""
  contraseñaConfirmacion.value = ""
  apellidos.value = ""
  email.value = ""
  salarioV.value = ""


  alert('¡Se ha guardado con exito el usuario!')
}


function empty(){

 var cedula = document.getElementById('numeroID')
  var nombre = document.getElementById('nombreFor')
  var usuario = document.getElementById('usuarioFor')
  var  Rol = document.getElementById('salario')
  var valueS = Rol.options[Rol.selectedIndex].value 

  var contraseña = document.getElementById('contraseñaFor')
  var contraseñaConfirmacion = document.getElementById('confirmarContraseñaFor')
  var apellidos = document.getElementById('apellidoFor')
  var email = document.getElementById('emailFor')
  var salarioV =document.getElementById('salarioV')


  cedula.value = ""
  nombre.value = ""
  usuario.value = ""
  contraseña.value = ""
  contraseñaConfirmacion.value = ""
  apellidos.value = ""
  email.value = ""
  salarioV.value = ""

}
