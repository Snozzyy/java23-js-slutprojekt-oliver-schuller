// Imports
import { displayMovies, displayPersons } from "./display.js";

// API info
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2QxMWFkZDdlZGM0NWNmNDJhODQyM2IwZGYzZjM1MiIsInN1YiI6IjY2MWY5ODJiZDE4ZmI5MDE0YWNhMjRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C_T6ij3drKVx8_Q7jPrWi13Aegze02woFmBPuHHdUN0'
    }
  };
const baseUrl = "https://api.themoviedb.org/3/";
const mostPopularUrl = "movie/popular";
const topRatedUrl = "movie/top_rated";
let search = "search/multi?query=";
let pageNumber = "?page="

// Functions
export async function searchPersons(searchTerm) {
    const url = `${baseUrl}search/person?include_adult=false&query=${searchTerm}`;
    const response = await fetch(url, options);
    const data = await response.json();
    displayPersons(data.results);
}

// Three below repeats same stuff, optimise!!!
export async function searchMovies(searchTerm) {
  const url = `${baseUrl}search/movie?include_adult=false&query=${searchTerm}`;
  const response = await fetch(url, options);
  const data = await response.json();
  displayMovies(data.results);
}

export async function mostPopular() {
  const url = baseUrl + "movie/popular";
  const response = await fetch(url, options);
  const data = await response.json();
  const topTen = data.results.slice(0, 10);
  displayMovies(topTen);
}

export async function topRated() {
  const url = baseUrl + "movie/top_rated";
  const response = await fetch(url, options);
  const data = await response.json();
  const topTen = data.results.slice(0, 10);
  displayMovies(topTen);
}