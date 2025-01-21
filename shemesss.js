// Function to search on Google
function searchSchemes() {
    const searchInput = document.getElementById('searchInput').value.trim();
    
    if (searchInput !== '') {
        // Redirect to Google Search with the entered term
        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}+government+schemes+for+farmers`;
        window.open(googleSearchURL, '_blank');
    } else {
        alert("Please enter a search term.");
    }
}

// Function to show the latest schemes (opens a government schemes portal)
function fetchLatestSchemes() {
    // Redirect to a government site with a list of various schemes
    const latestSchemesURL = 'https://www.india.gov.in/spotlight/government-schemes';  // URL that lists various government schemes for farmers
    window.open(latestSchemesURL, '_blank');
}
