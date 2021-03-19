// DOM Manipulation Exercise

// Write the code necessary to do the following:

// Select the section with an id of container without using querySelector.
// Select the section with an id of container using querySelector.
// Select all of the list items with a class of “second”.
// Select a list item with a class of third, but only the list item inside of the ol tag.
// Give the section with an id of container the text “Hello!”.
// Add the class main to the div with a class of footer.
// Remove the class main on the div with a class of footer.
// Create a new li element.
// Give the li the text “four”.
// Append the li to the ul element.
// Loop over all of the lis inside the ol tag and give them a background color of “green”.
// Remove the div with a class of footer

// ************************************************************************************

// Select the section with an id of container without using querySelector.
const container1 = document.getElementById('container');

// Select the section with an id of container using querySelector.
const container2 = document.querySelector('#container');

// Select all of the list items with a class of “second”.
const second = document.querySelectorAll('.second');

//  Select a list item with a class of third, but only the list item inside of the ol tag.
const olThird = document.querySelector('ol .third')

// Give the section with an id of container the text “Hello!”
const newP = document.createElement('p');
newP.textContent = 'Hello!'
container1.append(newP);

// Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
footer.classList.add('main');

// Remove the class main on the div with a class of footer.
footer.remove('.main');

// Create a new li element.
const newLi = document.createElement('li');

// Give the li the text “four”.
newLi.textContent = 'four';

// Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const ol = document.querySelectorAll('ol');
const li = document.querySelectorAll('li')
for(let i = 0; i < ol.length; i++){
  ol[i].classList.add('green')
}

// Remove the div with a class of footer
// line 38 => const footer = document.querySelector('.footer');
footer.remove('div')