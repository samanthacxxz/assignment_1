// retrieve data from HTTP - films 

fetch('http://swapi.dev/api/films')
.then (response => response.json())
.then (filmData => console.log(filmData.results));