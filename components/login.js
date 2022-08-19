const signInBtn = document.getElementById('btn_sign_in');
const email = document.getElementById('email');
const password = document.getElementById('password');
// const pin = document.getElementById('pin');

signInBtn.addEventListener('click', (e) => {
  e.preventDefault();

  auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((cred) => {
      email.textContent = '';
      password.textContent = '';
      localStorage.setItem('email', email.value);
      window.location.href = './dashboard.html';
    })
    .catch((err) => {
      console.log(err.message);
      alert(err.message);
    });
    alert('successfully signed in !')
});