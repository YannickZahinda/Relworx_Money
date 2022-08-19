const logBtn = document.getElementById('logout');

logBtn.addEventListener('click', (e) => {
  e.preventDefault();

  auth
    .signOut()
    .then((res) => {
      localStorage.removeItem('email');
      alert('Session closed. Login to send money again.');
      location.assign('./index.html');
    })
    .catch((err) => {
      alert(err.message);
    });
});