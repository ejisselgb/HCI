

var openPopUp = document.getElementById('filtrar'),
    overlay = document.getElementById('overlay'),
    popUp = document.getElementById('popUp'),
    aceptar = document.getElementById('buttonFilt')

openPopUp.addEventListener('click', function(){
  overlay.classList.add('active')


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
function revisarFormE(){
  var NitId = document.getElementById('NIT');
  var nombreF = document.getElementById('nombre');
  var direccionF = document.getElementById('direccion');
  var telefonoF = document.getElementById('telefono');
  var responsableF = document.getElementById('responsable');
  var cargoF = document.getElementById('cargo');
  var celength = true
  var ver = true
  if(nombreF.value.length == 0){
    celength = celength&&false
  }
  if(responsableF.value.length == 0){
    celength = celength&&false
  }
  if(cargoF.value.length == 0){
    celength = celength&&false
  }
  if (!celength){
    alert('por favor llenar todos los espacios obligatorios del fomulario')
    ver = false
  }
  else if(allLetter(nombreF)&&allLetter(responsableF)&&allLetter(cargoF)&&isNumeric(NitId.value)&&isNumeric(telefonoF.value)){

  }
  else{
    alert('los datos ingresados no son correctos')
    ver = false
  }
  return ver

}

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
  if(revisarFormE()){
    var nit = document.getElementById('NIT')
    var nombre = document.getElementById('nombre')
    var direccion = document.getElementById('direccion')
    var telefono = document.getElementById('telefono')
    var responsable = document.getElementById('responsable')
    var cargo = document.getElementById('cargo')

    var table= document.getElementById('myTable')

    var row = table.insertRow(table.length)

    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6 = row.insertCell(5)

    cell1.innerHTML = nit.value
    cell2.innerHTML = nombre.value
    cell3.innerHTML = direccion.value
    cell4.innerHTML = telefono.value
    cell5.innerHTML = responsable.value
    cell6.innerHTML = '<button onclick="edite()" style=" background-color: #4ab5ab; border: none; border-radius : 100%; width: 20%; "> <img src= "edit.svg" style="width : 15px;"></button> <button onclick="delete()"  style=" background-color:#e54060;  border:none; border-radius : 100%; width: 20%" ><img src= "delete.svg"  style="width : 15px;" > </button>'

    nit.value = ""  
    nombre.value = ""  
    direccion.value = ""
    telefono.value = ""
    responsable.value = ""
    cargo.value = ""

    alert('¡Se ha guardado con exito la empresa!')
  }
}


function empty(){

  var nit = document.getElementById('NIT').value = ""
  var nombre = document.getElementById('nombre').value = ""
  var direccion = document.getElementById('direccion').value = ""
  var telefono = document.getElementById('telefono').value =""
  var responsable = document.getElementById('responsable').value = ""
  var cargo = document.getElementById('cargo').value = ""


}