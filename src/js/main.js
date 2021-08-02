// Variable Declaration
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2'); 

// Event Listeners
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs();
})

// Custom Functions
function checkInputs (){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, "Username cannot be blank");
    }
    else {
        setSuccessFor(username);
    }

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(password1Value === '') {
		setErrorFor(password1, 'Password cannot be blank');
	} else if(!isValidPassword(password1Value)){
		setErrorFor(password1, "Password should be \n1. Greater than 8 characters.\n2. Should contain at least 1 Uppercase Character\n3. Should contain at least 1 Lowercase Character.\n4. Should contain at least 1 Special Character");
	}
    else{
        setSuccessFor(password1);
    }
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(password1Value !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}


function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //Add error message in the small text
    small.innerText = message;

    //Add error class
    formControl.className = 'form-control error';
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //Add success class
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isValidPassword (password){
    return /^[A-Za-z]\w{7,14}$/.test(password);
}