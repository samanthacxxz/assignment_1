// selecting elements

const ul = document.querySelector('ul');

// retrieve data from HTTP - films 


fetch('http://swapi.dev/api/planets')
.then(response => response.json())
.then(planets => {
    console.log(planets.results)
    renderPeopleData(planets.results)
   
});