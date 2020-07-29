// import functions and grab DOM elements
import adventuresData from '../Data/data.js';
import { renderGame, findById } from './game-page-utils.js';
// initialize state
const main = document.querySelector('main');
const params = new URLSearchParams(window.location.search);
const adventureId = params.get('id');
const adventureData = findById(adventuresData, adventureId);
const sectionElement = renderGame(adventureData);
const backButton = document.querySelector('#back-button');


backButton.addEventListener('click', () => {
    window.location = '/2-choose-adventure';
    
});
main.append(sectionElement);

// set event listeners to update state and DOM
// const letter = getRandomLetter(adventureData.letterChoices);
// const correctLetter = letter.id;
// const correctDescription = letter.description;



