// selecting elements

const ul = document.querySelector('ul');

// retrieve data from HTTP - vehicles 


fetch('http://swapi.dev/api/vehicles')
.then(response => response.json())
.then(vehicles => {
    console.log(vehicles.results)
    renderVehiclesData(vehicles.results)
   
});

function renderVehiclesData(vehicles) {
    vehicles.forEach(vehicle => {
        // creating a list for each vehicle
        const li = document.createElement('li');

        const vehicleName = document.createElement('div');
        const vehicleModel = document.createElement('div');
        const vehicleManufacturer = document.createElement('div');
        const vehiclePassengers = document.createElement('div');
        const vehicleVehicleClass = document.createElement('div');

        // adding classes
        
        li.classList.add('vehicleItem')

        vehicleName.classList.add('vehicle-name');
        vehicleModel.classList.add('vehicle-model');
        vehicleManufacturer.classList.add('vehicle-manufacturer');
        vehiclePassengers.classList.add('vehicle-passengers');
        vehicleVehicleClass.classList.add('vehicle-vehicle-class');
        
         // not displaying the property to page yet except for the title

         vehicleModel.classList.add('vehicle-property');
         vehicleManufacturer.classList.add('vehicle-property');
         vehiclePassengers.classList.add('vehicle-property');
         vehicleVehicleClass.classList.add('vehicle-property');


        // appending the elements to the page 

        ul.append(li)
        li.append(vehicleName, vehicleModel, vehicleManufacturer, vehiclePassengers, vehicleVehicleClass);

        //adding content 

        vehicleName.textContent = vehicle.name;
        vehicleModel.textContent = `Model: ${vehicle.model}`;
        vehicleManufacturer.textContent = `Manufacturer: ${vehicle.manufacturer}`;
        vehiclePassengers.textContent = `Passengers ${vehicle.passengers}`;
        vehicleVehicleClass.textContent = `Vehicle Class: ${vehicle.vehicle_class}`;

        // display properties when clicking the title button


        vehicleName.addEventListener('click', () => {

            vehicleName.classList.toggle('vehicle-property--visible');
            vehicleModel.classList.toggle('vehicle-property--visible');
            vehicleManufacturer.classList.toggle('vehicle-property--visible');
            vehiclePassengers.classList.toggle('vehicle-property--visible');
            vehicleVehicleClass.classList.toggle('vehicle-property--visible');
        });
    });
}