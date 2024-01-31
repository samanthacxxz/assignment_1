// selecting elements

const ul = document.querySelector('ul');

// retrieve data from HTTP - planets 


fetch('http://swapi.dev/api/planets')
.then(response => response.json())
.then(planets => {
    console.log(planets.results)
    renderPlanetsData(planets.results)
   
});

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
        
        li.classList.add('planetItem')

        planetName.classList.add('planet-name');
        planetClimate.classList.add('planet-climate');
        planetGravity.classList.add('planet-gravity');
        planetSurfaceWater.classList.add('planet-surface-water');
        planetTerrain.classList.add('planet-terrain');
        
        // appending the elements to the page 

        ul.append(li)
        li.append(planetName, planetClimate, planetGravity, planetSurfaceWater, planetTerrain);

        //adding content 

        planetName.textContent = `Name: ${planet.name}`;
        planetClimate.textContent = `Climate: ${planet.climate}`;
        planetGravity.textContent = `Gravity: ${planet.gravity}`;
        planetSurfaceWater.textContent = `Surface Water ${planet.surface_water}`;
        planetTerrain.textContent = `Terrain: ${planet.terrain}`;

    });
}