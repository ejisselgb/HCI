function login() {
  if (document.getElementById('username').value == 'admin' && document.getElementById('password').value == 'admin') {
    document.location.href = './Vistas/Admin.html';
  }
}
