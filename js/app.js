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
    DisplayFilmData();
})


//