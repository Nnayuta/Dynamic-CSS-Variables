const login = document.getElementById('login');
const pwr = document.getElementById('pwr');

const errLogin = document.getElementById('errLogin');
const erPwr = document.getElementById('erPwr');

function loginButton() {
    clearError();
    if (login.value == '' || pwr.value == '') {
        if (login.value == '') {
            login.setAttribute('class', 'inputError')
            errLogin.innerHTML = 'Please enter your login.';
            errLogin.style.display = "block";
        }

        if (pwr.value == '') {
            pwr.setAttribute('class', 'inputError')
            erPwr.style.display = "block";
            erPwr.innerHTML = 'Please enter your password.';
        }
    } else {
        if (login.value.indexOf(' ') >= 0 || pwr.value.indexOf(' ') >= 0) {
            if (login.value.indexOf(' ') >= 0) {
                errLogin.style.display = "block";
                errLogin.innerHTML = 'Error your login has spaces.';
            }

            if (pwr.value.indexOf(' ') >= 0) {
                erPwr.style.display = "block";
                erPwr.innerHTML = 'Error your password has spaces.';
            }

        }
        else {
            if (login.value != 'testuser' || pwr.value != 'mypassword') {
                if (login.value != 'testuser') {
                    errLogin.style.display = "block";
                    login.setAttribute('class', 'inputLoginErr')
                    errLogin.innerHTML = 'User not found.';
                }

                if (pwr.value != 'mypassword') {
                    erPwr.style.display = "block";
                    pwr.setAttribute('class', 'inputLoginErr')
                    erPwr.innerHTML = 'your password is wrong.';
                }
            }
            else{
                if(login.value == 'testuser' && pwr.value == 'mypassword'){
                    console.log('> [LOGIN] hello, testuser')

                    document.getElementById('main').style.display = "block"
                    document.getElementById('container').style.display = "none"
                }
            }
        }
    }
}

function clearError() {
    errLogin.style.display = 'none';
    erPwr.style.display = 'none';
    login.removeAttribute('class', 'inputError')
    pwr.removeAttribute('class', 'inputError')
}