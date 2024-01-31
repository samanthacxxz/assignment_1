// selecting elements

const ul = document.querySelector('ul');

// retrieve data from HTTP - films 


fetch('http://swapi.dev/api/people')
.then(response => response.json())
.then(people => {
    console.log(people.results)
    renderFilmData(people.results)
   
});