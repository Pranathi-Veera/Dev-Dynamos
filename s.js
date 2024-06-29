// Function to get query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        type: params.get('type'),
        query: params.get('query')
    };
}

// Function to simulate fetching search results (you can replace this with actual API calls)
function fetchSearchResults(type, query) {
    // Simulated search results
    const dummyResults = [
        { title: "Book Title 1", author: "Author 1", availability: "Available" },
        { title: "Book Title 2", author: "Author 2", availability: "Not Available" },
        { title: "Book Title 3", author: "Author 3", availability: "Available" },
    ];

    // Filter results based on query (for demonstration purposes)
    return dummyResults.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
}

// Function to display search results
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        const list = document.createElement('ul');
        results.forEach(result => {
            const listItem = document.createElement('li');
            listItem.textContent = `${result.title} by ${result.author} - ${result.availability}`;
            list.appendChild(listItem);
        });
        resultsContainer.appendChild(list);
    }
}

// Main function to handle the search display logic
function handleSearch() {
    const { type, query } = getQueryParams();

    if (type && query) {
        const results = fetchSearchResults(type, query);
        displaySearchResults(results);
    } else {
        document.getElementById('results').innerHTML = '<p>Invalid search query.</p>';
    }
}

// Execute the main function when the page loads
window.onload = handleSearch;