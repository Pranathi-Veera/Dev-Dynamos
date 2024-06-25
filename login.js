document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.querySelector('.login');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here you would typically send the username and password to the server
        // For demonstration purposes, we'll just log it to the console
        console.log('Username:', username, 'Password:', password);

        var validUsername = "libraryUser";
    var validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        // Redirect to the library homepage or another page
        window.location.href = "homepage.html";
         
    } else {
        alert("Wrong Username or Password")
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }    
    // You can add your logic here for what happens after the login is submitted
        // For example, redirecting to another page or showing an error message
    });
});
