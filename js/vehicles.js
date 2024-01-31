// selecting elements

const ul = document.querySelector('ul');

// retrieve data from HTTP - films 


fetch('http://swapi.dev/api/vehicles')
.then(response => response.json())
.then(vehicles => {
    console.log(vehicles.results)
    renderVehiclesData(vehicles.results)
   
});

function renderVehiclesData(vehicles) {
    vehicles.forEach(vehicle => {
        // creating a list for each film
        const li = document.createElement('li');

        const vehicleName = document.createElement('div');
        const vehicleModel = document.createElement('div');
        const vehicleManufacturer = document.createElement('div');
        const vehiclePassengers = document.createElement('div');
        const vehicleVehicleClass = document.createElement('div');

        // adding classes
        
        li.classList.add('planetItem')

        vehicleName.classList.add('vehicle-name');
        vehicleModel.classList.add('vehicle-model');
        vehicleManufacturer.classList.add('vehicle-manufacturer');
        vehiclePassengers.classList.add('vehicle-passengers');
        vehicleVehicleClass.classList.add('vehicle-vehicle-class');
        
        // appending the elements to the page 

        ul.append(li)
        li.append(vehicleName, vehicleModel, vehicleManufacturer, vehiclePassengers, vehicleVehicleClass);

        //adding content 

        vehicleName.textContent = `Name: ${vehicle.name}`;
        vehicleModel.textContent = `Model: ${vehicle.model}`;
        vehicleManufacturer.textContent = `Manufacturer: ${vehicle.manufacturer}`;
        vehiclePassengers.textContent = `Passengers ${vehicle.passengers}`;
        vehicleVehicleClass.textContent = `Vehicle Class: ${vehicle.vehicle_class}`;

    });
}