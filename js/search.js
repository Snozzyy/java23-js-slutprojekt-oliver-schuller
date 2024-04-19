// HTML elements
const form = document.getElementById("searchForm");
const searchField = document.querySelector("input")

export function search(){
    form.addEventListener("submit", event=>{
        event.preventDefault();
        let searchTerm = searchField.value;
        console.log("search");
        return searchTerm;
    })
}