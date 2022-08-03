const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');


    }


}

toggleSwitch.addEventListener('change', switchTheme, false);

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const contactForm = document.getElementById('contact-form');

const errorElement = document.getElementById('error-msg');
const sucessMsg = document.getElementById('sucess-msg'); 

const submitBtn = document.getElementById('submit');



const validate = (e) => {
    e.preventDefault();
    
    if (name.value.length <3){
        errorElement.innerHTML = "Nome muito curto.";
        return false;
    }

    if (!(email.value.includes('.') && (email.value.includes('@')))) {
        errorElement.innerHTML = 'E-mail inválido.'
        return false;
    }

    if (!emailIsValid(email.value)){
        errorElement.innerHTML = 'E-mail inválido.';

        return false;
    }

    if (message.value.length < 15){
        errorElement.innerHTML = 'Mensagem muito curta.'
        return false;
    }

    errorElement.innerHTML = '';
    sucessMsg.innerHTML = 'Obrigado, vamos entrar em contato em breve';

    e.preventDefault();


    setTimeout(function() {
        sucessMsg.innerHTML = '';
        document.getElementById('contact-form').reset();
    }, 6000);

    return true;

}

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


submitBtn.addEventListener('click', validate);