

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

  var cedula = document.getElementById('cedula')
  var nombre = document.getElementById('nombre')
  var correo = document.getElementById('email')
  var salario = document.getElementById('salario')


  var fecha = document.getElementById('fecha')
  var lugar = document.getElementById('lugar')
  var cargo = document.getElementById('cargo')
  var fechaE = document.getElementById('fechaE')
  var salarioV =document.getElementById('salarioV')
  var fechaI = document.getElementById('FechaI')



  var table= document.getElementById('myTable')

  var row = table.insertRow(table.length)

  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2)
  var cell4 = row.insertCell(3)
  var cell5 = row.insertCell(4)

  cell1.innerHTML = cedula.value
  cell2.innerHTML = nombre.value
  cell3.innerHTML = correo.value
  cell4.innerHTML = salario.value
  cell5.innerHTML = '<button onclick="edite()" style=" background-color: #4ab5ab; border: none; border-radius : 100%; width: 20%; "> <img src= "edit.svg" style="width : 15px;"></button> <button onclick="delete()"  style=" background-color:#e54060; border:none; border-radius : 100%; width: 20%" ><img src= "delete.svg"  style="width : 15px;" > </button>'

  cedula.value = ""  
  nombre.value = ""  
  correo.value = ""
  salario.value = ""
  fecha.value = ""
  lugar.value = ""
  cargo.value = ""
  fechaE.value = ""
  salarioV.value = ""
  fechaI.value = ""

  alert('¡Se ha guardado con exito el empleado!')
}


function empty(){

  var cedula = document.getElementById('cedula')
  var nombre = document.getElementById('nombre')
  var correo = document.getElementById('email')
  var salario = document.getElementById('salario')


  var fecha = document.getElementById('fecha')
  var lugar = document.getElementById('lugar')
  var cargo = document.getElementById('cargo')
  var fechaE = document.getElementById('fechaE')
  var salarioV =document.getElementById('salarioV')
  var fechaI = document.getElementById('FechaI')


  cedula.value = ""  
  nombre.value = ""  
  correo.value = ""
  salario.value = ""
  fecha.value = ""
  lugar.value = ""
  cargo.value = ""
  fechaE.value = ""
  salarioV.value = ""
  fechaI.value = ""

}
