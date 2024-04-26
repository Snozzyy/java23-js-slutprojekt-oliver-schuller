import { capitalizeFirstLetter } from "./util.js";

// HTML elements
const dataContainer = document.getElementById("dataContainer");


export function displayMovies(dataSet) {
    dataContainer.innerHTML = "";
    dataSet.forEach(movie => {
        // HTML elements
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie-div");
        const movieTitleEl = document.createElement("h2");
        const movieDescriptionEl = document.createElement("p");
        const movieReleaseDateEl = document.createElement("p");
        const movieImgEl = document.createElement("img");
        
        const moviePoster = movie.poster_path;
        let movieImgUrl = ""
        if (moviePoster == null) {
            movieImgUrl = "./images/no-image-found.png";
        } else {
            movieImgUrl = `https://image.tmdb.org/t/p/original${moviePoster}`;
        }
        
        movieImgEl.src = movieImgUrl;
        movieDescriptionEl.innerText = movie.overview;
        movieReleaseDateEl.innerText = "Released: " + movie.release_date;
        
        movieTitleEl.innerText = movie.title;
        
        movieDiv.append(movieTitleEl, movieImgEl, movieReleaseDateEl, movieDescriptionEl);
        dataContainer.append(movieDiv);
        movieImgEl.src = movieImgUrl;
    });
}

export function displayPersons(dataSet) {
    try{
        dataContainer.innerHTML = "";
        dataSet.forEach(person => {
            // HTML elements
            const personContainer = document.createElement("div");
            const personNameEl = document.createElement("h2");
            const knownForEl = document.createElement("h3");
            const famousWorkEl = document.createElement("ul");
            const personImgEl = document.createElement("img");

            const personImage = person.profile_path;
                let personImgUrl = ""
                if (personImage == null) {
                    personImgUrl = "../images/no-image-found.png";
                } else {
                    personImgUrl = `https://image.tmdb.org/t/p/original${personImage}`;
                }
            
            personNameEl.innerText = person.name;
            knownForEl.innerText = person.known_for_department;

            person.known_for.forEach(works => {
                const media = document.createElement("li");
                let mediaType = works.media_type;
                mediaType = capitalizeFirstLetter(mediaType);
                media.innerText = mediaType + ": ";

                if (mediaType == "Movie")
                    media.innerText += works.title;
                else
                    media.innerText += works.name

                // FIXA SÅ DET BÖRJAR MED STORBOKSTAV
                famousWorkEl.append(media);
            });

            personImgEl.src = personImgUrl;
            personContainer.append(personNameEl, knownForEl, personImgEl, famousWorkEl);
            dataContainer.append(personContainer);
        })
    } catch (error) {
        console.log(error);
    }
}

export function displayNoResultsFound() {
    dataContainer.innerHTML = "";
    const errorMessage = document.createElement("h1");
    errorMessage.innerText = "No results found";
    dataContainer.append(errorMessage);
    console.log("No results found");
}

export function displayError() {
    dataContainer.innerHTML = "";
    const errorMessage = document.createElement("h1");
    errorMessage.innerText = "Something went wrong, please try again later";
    dataContainer.append(errorMessage);
    console.log("Something went wrong, please try again later");
}