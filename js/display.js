// HTML elements
const dataContainer = document.getElementById("dataContainer");


export function displayMovies(dataSet) {
    dataContainer.innerHTML = "";
    dataSet.forEach(movie => {
        // HTML elements
        const movieDiv = document.createElement("div");
        const movieTitleEl = document.createElement("h2");
        const movieDescriptionEl = document.createElement("p");
        const movieReleaseDateEl = document.createElement("p");
        const movieImgEl = document.createElement("img");

        const movieImgUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

        movieImgEl.src = movieImgUrl;
        movieDescriptionEl.innerText = movie.overview;
        movieReleaseDateEl.innerText = movie.release_date;

        movieTitleEl.innerText = movie.title;

        movieDiv.append(movieTitleEl, movieImgEl, movieReleaseDateEl, movieDescriptionEl);
        dataContainer.append(movieDiv);
        movieImgEl.src = movieImgUrl;
    });
}

export function displayPersons(dataSet) {

    dataContainer.innerHTML = "";
    dataSet.forEach(person => {
        // HTML elements
        const personContainer = document.createElement("div");
        const personNameEl = document.createElement("h2");
        const knownForEl = document.createElement("h3");
        const famousWorkEl = document.createElement("ul");
        const personImgEl = document.createElement("img");

        const movieImgUrl = `https://image.tmdb.org/t/p/original${person.profile_path}`;
        
        personNameEl.innerText = person.name;
        knownForEl.innerText = person.known_for_department;

        person.known_for.forEach(works => {
            const media = document.createElement("li");
            const mediaType = works.media_type;
            media.innerText = mediaType + ": ";

            if (mediaType == "movie")
                media.innerText += works.title;
            else
                media.innerText += works.name

            // FIXA SÅ DET BÖRJAR MED STORBOKSTAV
            famousWorkEl.append(media);
        });

        personImgEl.src = movieImgUrl;
        personContainer.append(personNameEl, knownForEl, personImgEl, famousWorkEl);
        dataContainer.append(personContainer);
    })
}

export function noResultsFound(mediaType) {
    const errorMessage = document.createElement("h1");
    errorMessage.innerText = "No " + mediaType + " found";
    dataContainer.append(errorMessage);
}

export function otherError() {

}