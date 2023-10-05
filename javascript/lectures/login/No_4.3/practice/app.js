const loginForm = document.querySelector('#loginFrm');
const loginInput = document.querySelector('#loginFrm input');

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener('submit', onLoginSubmit);