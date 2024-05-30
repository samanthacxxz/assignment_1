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
    filmDisplay.style.display = 'flex';
    peopleDisplay.style.display = 'none';
    planetsDisplay.style.display = 'none';
    vehiclesDisplay.style.display = 'none';
    displayFilmData();
})

peopleCategoryButton.addEventListener('click', ()=> {
    filmDisplay.style.display = 'none';
    peopleDisplay.style.display = 'flex';
    planetsDisplay.style.display = 'none';
    vehiclesDisplay.style.display = 'none';
    displayPeopleData();
})

planetsCategoryButton.addEventListener('click', ()=> {
    filmDisplay.style.display = 'none';
    peopleDisplay.style.display = 'none';
    planetsDisplay.style.display = 'flex';
    vehiclesDisplay.style.display = 'none';
    displayPlanetsData();
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

    const ul = document.querySelector('.film-ul');

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
            
            li.classList.add('item')
    
            filmTitle.classList.add('film-title');
            filmProducer.classList.add('film-producer');
            filmReleaseDate.classList.add('film-releasedate');
            filmDirector.classList.add('film-director');
            filmEpisodeID.classList.add('film-episodeID');

    
            // appending the elements to the page 
    
            ul.append(li)
            li.append(filmTitle, filmProducer, filmReleaseDate, filmDirector, filmEpisodeID);
    
            //adding content 
    
            filmTitle.textContent = film.title;
            filmProducer.textContent = `Producer: ${film.producer}`;
            filmReleaseDate.textContent = `Release Date: ${film.release_date}`;
            filmDirector.textContent = `Director ${film.director}`;
            filmEpisodeID.textContent = `Èpisode ID: ${film.episode_id}`;
        });
        
    } ;
    
}

function displayPeopleData() {

    //FETCH PEOPLE DATA
    fetch('http://swapi.dev/api/people')
    .then(response => response.json())
    .then(people => {
        console.log(people.results)
        renderPeopleData(people.results)
    });
    
    const ul = document.querySelector('.people-ul');

    //RENDER PEOPLE DATA
    function renderPeopleData(people) {
        people.forEach(person => {
            // creating a list for each person
            const li = document.createElement('li');
    
            const personName = document.createElement('div');
            const personGender = document.createElement('div');
            const personHeight = document.createElement('div');
            const personHairColor = document.createElement('div');
            const personEyeColor = document.createElement('div');
    
            // adding classes
            
            li.classList.add('item');
    
            personName.classList.add('person-name');
            personGender.classList.add('person-gender');
            personHeight.classList.add('person-height');
            personHairColor.classList.add('person-hair-color');
            personEyeColor.classList.add('person-eye-color');
            
            // appending the elements to the page 
    
            ul.append(li)
            li.append(personName, personGender, personHeight, personHairColor, personEyeColor);
    
            //adding content 
    
            personName.textContent = person.name;
            personGender.textContent = `Gender: ${person.gender}`;
            personHeight.textContent = `Height: ${person.height}`;
            personHairColor.textContent = `Hair Color ${person.hair_color}`;
            personEyeColor.textContent = `Eye Color: ${person.eye_color}`;
        });
    };
}

// DISPLAY PLANETS SECTION

function displayPlanetsData() {

    // retrieve data - planets 
    fetch('http://swapi.dev/api/planets')
    .then(response => response.json())
    .then(planets => {
        console.log(planets.results)
        renderPlanetsData(planets.results)
    });

    const ul = document.querySelector('.planets-ul');

    function renderPlanetsData(planets) {
        planets.forEach(planet => {
            // creating a list for each planet
            const li = document.createElement('li');
    
            const planetName = document.createElement('div');
            const planetClimate = document.createElement('div');
            const planetGravity = document.createElement('div');
            const planetSurfaceWater = document.createElement('div');
            const planetTerrain = document.createElement('div');
    
            // adding classes
            
            li.classList.add('item')
    
            planetName.classList.add('planet-name');
            planetClimate.classList.add('planet-climate');
            planetGravity.classList.add('planet-gravity');
            planetSurfaceWater.classList.add('planet-surface-water');
            planetTerrain.classList.add('planet-terrain');
            
            // appending the elements to the page 
    
            ul.append(li)
            li.append(planetName, planetClimate, planetGravity, planetSurfaceWater, planetTerrain);
    
            //adding content 
    
            planetName.textContent = planet.name;
            planetClimate.textContent = `Climate: ${planet.climate}`;
            planetGravity.textContent = `Gravity: ${planet.gravity}`;
            planetSurfaceWater.textContent = `Surface Water ${planet.surface_water}`;
            planetTerrain.textContent = `Terrain: ${planet.terrain}`;
        });
    };
}