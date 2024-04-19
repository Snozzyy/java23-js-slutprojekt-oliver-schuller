// Imports

// HTML elements
const form = document.getElementById("searchForm");
const searchField = document.querySelector("input")

search();

function search(){
    form.addEventListener("submit", event=>{
        event.preventDefault();
        let searchTerm = searchField.value;
        console.log(searchTerm);
    })
}
