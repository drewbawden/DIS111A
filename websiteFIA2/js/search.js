let searchInput;

window.addEventListener('DOMContentLoaded', function() {
    searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("keydown", function (key) {
        if (key.code == "Enter") {
            searchWebsite();
        }
    });
});

function searchWebsite(){
    let baseURL = "https://toolooashs.eq.edu.au/sitesearch/Pages/results.aspx?k=";
    let searchQuery = searchInput.value;
    
    // I'm not gonna include any regex, their fault if they do something bad
    window.location.href = baseURL + searchQuery;
}