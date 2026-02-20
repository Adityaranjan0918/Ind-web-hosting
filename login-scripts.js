// login-script.js

// Function to validate the login form
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Username and password cannot be empty.');
        return false;
    }
    return true;
}

// Function to handle login submission
function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission

    if (validateForm()) {
        // Add your login logic here
        alert('Logging in...');
        // E.g., send login data to the server
    }
}

// Attach event listener to the login form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
}
