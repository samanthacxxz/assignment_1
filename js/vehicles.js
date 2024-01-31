// selecting elements

const ul = document.querySelector('ul');

// retrieve data from HTTP - films 


fetch('http://swapi.dev/api/vehicles')
.then(response => response.json())
.then(vehicles => {
    console.log(vehicles.results)
    renderVehiclesData(vehicles.results)
   
});