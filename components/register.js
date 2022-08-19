// const userFirstName = document.getElementById("first_name").value;
// const userLastName = document.getElementById("last_name").value;
const SignUpBtn = document.getElementById('btn_sign_up');
const email = document.getElementById("email");
const password = document.getElementById("password");

SignUpBtn.addEventListener('click', (e) => {
  e.preventDefault();

  auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((cred) => {
      db.collection('users')
        .doc(email.value)
        .set({
          email: email.value,
        })
        // .then((res) => {
        //   db.collection('balance').doc(email.value).set({ amount: 1000 });
        //   alert(
        //     'Thank you for registering. You have got a bonus of 1000 Rwf. Login to start spending your money.'
        //   );
        //   window.location.href = './index.html';
        // });
        
    })
    .catch((err) => {
      alert(err.message);
    });
    document.forms[0].reset();
    alert('successfully signed up !')
});
