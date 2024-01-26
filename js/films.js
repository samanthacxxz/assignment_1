// retrieving data from the Star Wars film resources

const filmData = () => {
    fetch("http://swapi.dev/api/films")
    .then(response => response.json())
    .then (data => console.log(data.results))
}

filmData();

// saving the film data to the local storage

const saveFilmData = (data) => {
    localStorage.setItem("filmData", JSON.stringify(data));
};

//getting the data from the local storage when the page is loaded

const starwarsFilms = JSON.parse(localStorage.getItem("filmData"));
document.addEventListener("DOMContentLoaded", () => {
    renderData(starwarsFilms);
});

//rendering the film data to the page

const renderFilmData = (storedFilmData) => {
    if (storedFilmData) {
        
    }
}