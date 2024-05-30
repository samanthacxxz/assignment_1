// SELECTING ELEMENTS

const selectCategoriesContainer = document.querySelector('.categories-section')
const categoriesUl = document.querySelector('.starwars_categories')

const filmCategoryButton = document.querySelector('.films-button')
const peopleCategoryButton = document.querySelector('.people-button')
const planetsCategoryButton = document.querySelector('.planets-button')
const vehiclesCategoryButton = document.querySelector('.vehicles-button')

const filmDisplay = document.querySelector('.film-display');
const peopleDisplay = document.querySelector('.people-display');
const planetsDisplay = document.querySelector('.planets-display');
const vehiclesDisplay = document.querySelector('.vehicles-display');


// EVENT LISTENERS TO BUTTONS 

filmCategoryButton.addEventListener('click', ()=> {
    filmDisplay.style.visibility = 'visible';
    peopleDisplay.style.visibility = 'hidden';
    planetsDisplay.style.visibility = 'hidden';
    vehiclesDisplay.style.visibility = 'hidden';
    displayFilmData();
})


// DISPLAY FILM SECTION

function displayFilmData() {

    // FETCH FROM API
    fetch('http://swapi.dev/api/films')
    .then(response => response.json())
    .then(films => {
        console.log(films.results)
        renderFilmData(films.results)
    });

    const ul = document.querySelector('ul');

    // RENDER THE DATA RETRIEVED FROM API
    function renderFilmData(films) {
        films.forEach(film => {
            // creating a list for each film
            const li = document.createElement('li');
    
            const filmTitle = document.createElement('div');
            const filmProducer = document.createElement('div');
            const filmReleaseDate = document.createElement('div');
            const filmDirector = document.createElement('div');
            const filmEpisodeID = document.createElement('div');
    
            // adding classes
            
            li.classList.add('filmItem')
    
            filmTitle.classList.add('film-title');
            filmProducer.classList.add('film-producer');
            filmReleaseDate.classList.add('film-releasedate');
            filmDirector.classList.add('film-director');
            filmEpisodeID.classList.add('film-episodeID');
    
            // not displaying the property to page yet except for the title
    
            filmProducer.classList.add('film-property');
            filmReleaseDate.classList.add('film-property');
            filmDirector.classList.add('film-property');
            filmEpisodeID.classList.add('film-property');
    
            // appending the elements to the page 
    
            ul.append(li)
            li.append(filmTitle, filmProducer, filmReleaseDate, filmDirector, filmEpisodeID);
    
            //adding content 
    
            filmTitle.textContent = film.title;
            filmProducer.textContent = `Producer: ${film.producer}`;
            filmReleaseDate.textContent = `Release Date: ${film.release_date}`;
            filmDirector.textContent = `Director ${film.director}`;
            filmEpisodeID.textContent = `Èpisode ID: ${film.episode_id}`;
    
            // display properties when clicking the title button
    
            
            filmTitle.addEventListener('click', () => {
    
                filmTitle.classList.toggle('film-property--visible');
                filmProducer.classList.toggle('film-property--visible');
                filmReleaseDate.classList.toggle('film-property--visible');
                filmDirector.classList.toggle('film-property--visible');
                filmEpisodeID.classList.toggle('film-property--visible');
    
            }); 
        });
        ;
    } 
    
}