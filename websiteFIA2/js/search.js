let searchInput;

window.addEventListener('DOMContentLoaded', function() {
    searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("keydown", function (e) {
        if (e.code == "Enter") {
            searchWebsite();
        }
    });
});

function searchWebsite(){
    // I'm not gonna include any regex so try not to do anything bad ;)
    let baseURL = "https://toolooashs.eq.edu.au/sitesearch/Pages/results.aspx?k=";
    let searchQuery = searchInput.value;
    
    window.location.href = baseURL + searchQuery;
}