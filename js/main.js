import { searchMovies, searchPersons, mostPopular, topRated } from "./api.js";
import { displayMovies, displayPersons, displayNoResultsFound, displayError} from "./display.js";

// HTML elements
const searchForm = document.getElementById("searchForm");
const topRatedBtn = document.getElementById("topRatedBtn"); 
const popularBtn = document.getElementById("popularBtn");

searchForm.addEventListener("submit", search);
topRatedBtn.addEventListener("click", async () => {
    try {
        displayMovies(await topRated())
    } catch (error) {
        displayError();
    }
});

popularBtn.addEventListener("click", async () => {
    try {
        displayMovies(await mostPopular())
    } catch (error) {
        displayError();
    }
});

async function search(event) {
    try {
        event.preventDefault();
        const searchTerm = document.getElementById("searchField").value;
        const searchType = document.getElementById("type").value;
        searchForm.reset();

        if (searchType == "movie") {
            let movies = await searchMovies(searchTerm);
            movies = movies.results;
            if (movies.length === 0)
                displayNoResultsFound();
            else
                displayMovies(movies);
        }
        else {
            const persons = await searchPersons(searchTerm);
            if (persons.length === 0)
                displayNoResultsFound();
            else
                displayPersons(persons);
        }
    } catch (error) {
        displayError();
    }
}