var nameError = document.getElementById('Name-error');
var phoneError = document.getElementById('tel-error');
var emailError = document.getElementById('Email-error');
var msgError = document.getElementById('Message-error');
var submitError = document.getElementById('Submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (name.indexOf(" ") === -1) {
        nameError.innerHTML = "Write Full name";
        return false;
    }
    nameError.innerHTML = '☑️';
    return true;
}

function validateTel() {
    var tel = document.getElementById('contact-tel').value;
    if (tel.length == 0) {
        phoneError.innerHTML = "Phone No is required";
        return false;
    }
    if (tel.length !== 11 || /^d+$/) {
        phoneError.innerHTML = 'Phone No should be 11 digits';
        return false;
    }
    if (!tel.match(/^[0-9]*$/)) {
        phoneError.innerHTML = "Only Digits please";
        return false;
    }
    phoneError.innerHTML = '☑️';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    phoneError.innerHTML = '☑️';;
    return true;
}

function validateMsg() {
    var msg = document.getElementById('contact-msg').value;
    var req = 30;
    var left = req - msg.length;
    if (left > 0) {
        msgError.innerHTML = left + " more characters are required";
        return false;
    }
    msgError.innerHTML = '<img src="valid.png">';
    return true;
}

function validateForm() {
    if (!(validateName() && validateTel() && validateEmail() && validateMsg())) {
        submitError.style.display = 'block';
        submitError.style.color = 'red';
        submitError.style.fontSize = '14px';
        submitError.style.textAlign = 'center';
        submitError.style.bottom = '12px';
        submitError.innerHTML = 'Please fix errors to submit';
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 5000);
        return false;
    }
}