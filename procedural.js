const form = document.getElementById('user-input');

function signUpHandlerb(event) {
    event.preventDefault();

    const userNameInput = document.getElementById('username');
    const enteredUserName = userNameInput.value;

    const passwordInput = document.getElementById('password');
    const enteredPassword = passwordInput.value;
   
    if(enteredUserName.trim().length === 0){
        alert('invalid input - username must not be empty!');
        return;
    }
     
    if(enteredPassword.trim().length <= 5) {
        alert('invalid input - password must be 6 characters or longer!');
        return;
    }

    const user = {
        userName: enteredUserName,
        password: enteredPassword
    };
    
    console.log(user);
    console.log('Hi, I am ' + user.userName);
} 

form.addEventListener('submit', signUpHandlerb);