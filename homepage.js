function handleSearch(type) {
    const query = prompt(`Enter the ${type}:`);
    if (query) {
        window.location.href = `s.html?type=${encodeURIComponent(type)}&query=${encodeURIComponent(query)}`;
    }
}

// Event listener for Title Search button
document.querySelector('button[type="submit"]:nth-child(1)').addEventListener('click', function(event) {
    event.preventDefault();
    handleSearch('title');
});

// Event listener for Author Search button
document.querySelector('button[type="submit"]:nth-child(2)').addEventListener('click', function(event) {
    event.preventDefault();
    handleSearch('author');
});

// Event listener for Book Code Search button
document.querySelector('button[type="submit"]:nth-child(3)').addEventListener('click', function(event) {
    event.preventDefault();
    handleSearch('code');
});

// Event listener for Genre Search button
document.querySelector('button[type="submit"]:nth-child(4)').addEventListener('click', function(event) {
    event.preventDefault();
    handleSearch('genre');
});

// Event listener for Submit button in the New Books for Consideration form
document.querySelector('button.adding').addEventListener('click', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const date = document.getElementById('date').value;
    const publisher = document.getElementById('publisher').value;

    if (title && author && isbn && date && publisher) {
        // Display a "Submitted" statement
        alert('Submitted');
        // Clear the form fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
        document.getElementById('date').value = '';
        document.getElementById('publisher').value = '';
    } else {
        alert("Please fill in all fields.");
    }
});

// Event listener for Logout button
document.querySelector('button.logout').addEventListener('click', function(event) {
    event.preventDefault();
    // Handle logout logic (placeholder)
    alert("You have been logged out.");
    window.location.href = 'login.html';
});