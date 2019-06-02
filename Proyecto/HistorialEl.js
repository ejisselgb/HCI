

var openPopUp = document.getElementById('filtrar'),
    overlay = document.getElementById('overlay'),
    popUp = document.getElementById('popUp'),
    aceptar = document.getElementById('buttonFilt')

openPopUp.addEventListener('click', function(){
  overlay.classList.add('active')


})

aceptar.addEventListener('click',function(){
  overlay.classList.remove('active')


})



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
