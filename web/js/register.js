const Name = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const form = document.getElementById('registerForm');
const NoRequired = document.getElementById('NoRequired');
const prenomReq = document.getElementById('pre');
const mail = document.getElementById('mail')
const mailReq = document.getElementById('mailReq')
const password = document.getElementById('password')
const passReq = document.getElementById('passReq')
const confirmationPassword = document.getElementById('confirmationPassword')
const confirmReq = document.getElementById('confirmReq')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    var hasError = false;
    if (Name.value == '') {
        Name.classList.remove('is-valid')
        Name.classList.add('is-invalid')
        NoRequired.innerText = 'le nom est obligatoire';
        hasError = true;
    }
    else {
        Name.classList.add('is-valid')
        Name.classList.remove('is-invalid')
        NoRequired.innerHTML = '';
    }
    if (prenom.value == '') {
        prenom.classList.remove('is-valid')
        prenom.classList.add('is-invalid')
        prenomReq.innerText = 'le prenom est obligatoire';
        hasError = true;
    }
    else {
        prenom.classList.add('is-valid')
        prenom.classList.remove('is-invalid')
        prenomReq.innerHTML = '';
    }
    if (mail.value == '' || !mail.value.includes('@')) {
        mail.classList.remove('is-valid')
        mail.classList.add('is-invalid')
        mailReq.innerText = 'le mail est obligatoire';
        hasError = true;
    }
    else {
        mail.classList.add('is-valid')
        mail.classList.remove('is-invalid')
        mailReq.innerHTML = '';
    }
    if (password.value == '') {
        password.classList.remove('is-valid')
        password.classList.add('is-invalid')
        passReq.innerText = 'le mot de passe  est obligatoire';
        hasError = true;
    }
    else {
        password.classList.add('is-valid')
        password.classList.remove('is-invalid')
        passReq.innerHTML = '';
    }
    if ((password.value != confirmationPassword.value) || (confirmationPassword.value == '')) {
        confirmationPassword.classList.remove('is-valid')
        confirmationPassword.classList.add('is-invalid')
        confirmReq.innerText = 'le mot de passe n\'est pas le meme ';
        hasError = true;
    }
    else {
        confirmationPassword.classList.add('is-valid')
        confirmationPassword.classList.remove('is-invalid')
        confirmReq.innerHTML = '';
    }
    
    if (hasError != true) {
        var users = JSON.parse(localStorage.getItem('users')) || [];
        const user = {
            firstName: Name.value,
            secondName: Prenom.value,
            email: email.value,
            password: motdepasse.value,
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users))
    }
    
})