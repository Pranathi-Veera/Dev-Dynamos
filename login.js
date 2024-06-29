document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    // Assume login is always successful
    // You can add actual authentication logic here

    window.location.href = 'homepage.html';
});