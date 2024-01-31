// selecting elements

const ul = document.querySelector('ul');

// retrieve data from HTTP - films 


fetch('http://swapi.dev/api/films')
.then(response => response.json())
.then(films => {
    console.log(films.results)
    renderFilmData(films.results)
    showDetails(films.results)
});

// rendering the data retrieved from API, appending to the page

function renderFilmData(films) {
    films.forEach(film => {
        // creating a list for each film
        const li = document.createElement('li');

        const filmTitle = document.createElement('button');
        const filmProducer = document.createElement('div');
        const filmReleaseDate = document.createElement('div');
        const filmDirector = document.createElement('div');
        const filmEpisodeID = document.createElement('div');

        // adding classes
        
        li.classList.add('filmItem')

        filmTitle.classList.add('film-title', 'title-button');
        filmProducer.classList.add('film-producer');
        filmReleaseDate.classList.add('film-releasedate');
        filmDirector.classList.add('film-director');
        filmEpisodeID.classList.add('film-episodeID');
        
        // appending the elements to the page 

        ul.append(li)
        li.append(filmTitle, filmProducer, filmReleaseDate, filmDirector, filmEpisodeID);

        //adding content 

        filmTitle.textContent = `Title: ${film.title}`;
        filmProducer.textContent = `Producer: ${film.producer}`;
        filmReleaseDate.textContent = `Release Date: ${film.release_date}`;
        filmDirector.textContent = `Director ${film.director}`;
        filmEpisodeID.textContent = `Èpisode ID: ${film.episode_id}`;

        // not displaying the property except for the title

        filmProducer.style.display = 'none';
        filmReleaseDate.style.display = 'none';
        filmDirector.style.display = 'none';
        filmEpisodeID.style.display = 'none';

    });


    
} 

// display properties when clicking the title button

filmTitleButton = showDetails(film.title)
    
filmTitleButton.addEventlistener('click', showDetails)

function showDetails(film) {
    filmsArray = film.entries(film);
    console.log(filmsArray)
}
showDetails(film);