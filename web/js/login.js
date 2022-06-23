function login(e) {
    e.preventDefault();
    var mail = document.getElementById('mail')
    var password = document.getElementById('password');
    var mailReq = document.getElementById('mailReq');
    var passwordReq = document.getElementById('passwordReq');
    var hasError =false;
    if (mail.value == '' || !mail.value.includes('@')) {
        mail.classList.remove('is-valid');
        mail.classList.add('is-invalid');
        if (mail.value == '') {
            mailReq.innerHTML = 'l\'adresse mail est obligatoire';
            hasError=true;
        }
        if (mail.value != '' && !mail.value.includes('@')) {
            mailReq.innerHTML = '@ est obligatoire'
        }
    }
    else {
        mail.classList.remove('is-invalid');
        mail.classList.add('is-valid');
        mailReq.innerHTML = '';
    }
    if (password.value == '') {
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
        passwordReq.innerHTML = 'le mot de passe et obligatoire';
        hasError=true;
    }
    else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
        passwordReq.innerHTML = '';
    }
    if (hasError == false) {
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var userfound = users.find(user => user.email == mail.value && user.password == password.value)
        // console.log(userfound);
        if (userfound == undefined) {
            alert('email ou mot de passe incorrecte ')
        }
        else {
            location.href = 'index.html'
        }
    }
}
var form = document.getElementById('form');
form.addEventListener('submit', login);
