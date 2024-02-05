// selecting elements

const ul = document.querySelector('ul');

// retrieve data from HTTP - people 


fetch('http://swapi.dev/api/people')
.then(response => response.json())
.then(people => {
    console.log(people.results)
    renderPeopleData(people.results)
   
});

function renderPeopleData(people) {
    people.forEach(person => {
        // creating a list for each person
        const li = document.createElement('li');

        const personName = document.createElement('button');
        const personGender = document.createElement('div');
        const personHeight = document.createElement('div');
        const personHairColor = document.createElement('div');
        const personEyeColor = document.createElement('div');

        // adding classes
        
        li.classList.add('people-item');

        personName.classList.add('person-name');
        personGender.classList.add('person-gender');
        personHeight.classList.add('person-height');
        personHairColor.classList.add('person-hair-color');
        personEyeColor.classList.add('person-eye-color');

        // not displaying the property to page yet except for the title

        personGender.classList.add('people-property');
        personHeight.classList.add('people-property');
        personHairColor.classList.add('people-property');
        personEyeColor.classList.add('people-property');
        
        // appending the elements to the page 

        ul.append(li)
        li.append(personName, personGender, personHeight, personHairColor, personEyeColor);

        //adding content 

        personName.textContent = person.name;
        personGender.textContent = `Gender: ${person.gender}`;
        personHeight.textContent = `Height: ${person.height}`;
        personHairColor.textContent = `Hair Color ${person.hair_color}`;
        personEyeColor.textContent = `Eye Color: ${person.eye_color}`;

        // display properties when clicking the title button


        personName.addEventListener('click', () => {

            personName.classList.toggle('people-property--visible');
            personGender.classList.toggle('people-property--visible');
            personHeight.classList.toggle('people-property--visible');
            personHairColor.classList.toggle('people-property--visible');
            personEyeColor.classList.toggle('people-property--visible');
        });
    });
}