// Imports
import { searchMovies, searchPersons, mostPopular, topRated } from "./api.js";

// HTML elements
const searchForm = document.getElementById("searchForm");
const topRatedBtn = document.getElementById("topRatedBtn"); 
const popularBtn = document.getElementById("popularBtn");

// Event listeners
searchForm.addEventListener("submit", search);
topRatedBtn.addEventListener("click", topRated);
popularBtn.addEventListener("click", mostPopular);

// Functions
function search(event){
    event.preventDefault();
    const searchTerm = document.getElementById("searchField").value;
    const searchType = document.getElementById("type").value;
    searchForm.reset();

    if (searchType == "movie")
        searchMovies(searchTerm);
    else
        searchPersons(searchTerm);
}