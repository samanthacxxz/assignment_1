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

        const planetName = document.createElement('button');
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

        // not displaying the property to page yet except for the title

        planetClimate.classList.add('planet-property');
        planetGravity.classList.add('planet-property');
        planetSurfaceWater.classList.add('planet-property');
        planetTerrain.classList.add('planet-property');
        
        // appending the elements to the page 

        ul.append(li)
        li.append(planetName, planetClimate, planetGravity, planetSurfaceWater, planetTerrain);

        //adding content 

        planetName.textContent = planet.name;
        planetClimate.textContent = `Climate: ${planet.climate}`;
        planetGravity.textContent = `Gravity: ${planet.gravity}`;
        planetSurfaceWater.textContent = `Surface Water ${planet.surface_water}`;
        planetTerrain.textContent = `Terrain: ${planet.terrain}`;

         // display properties when clicking the title button


         planetName.addEventListener('click', () => {

            planetName.classList.toggle('planet-property--visible');
            planetClimate.classList.toggle('planet-property--visible');
            planetGravity.classList.toggle('planet-property--visible');
            planetSurfaceWater.classList.toggle('planet-property--visible');
            planetTerrain.classList.toggle('planet-property--visible');
        });
    });
}