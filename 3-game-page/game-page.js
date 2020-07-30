// import functions and grab DOM elements
import { saveToLocalStorage, getFromLocalStorage } from '../1-user-info/userUtils.js';
import adventuresData from '../Data/data.js';
import { renderGame, findById, getRandomLetter } from './game-page-utils.js';
// initialize state
const main = document.querySelector('main');
const params = new URLSearchParams(window.location.search);
const adventureId = params.get('id');
const adventureData = findById(adventuresData, adventureId);
const sectionElement = renderGame(adventureData);
const backButton = document.querySelector('#back-button');
const radioTags = sectionElement.querySelectorAll('input[name="letter-select"]');
const description = document.getElementById('description');
const findLetter = document.getElementById('find-letter-prompt');

backButton.addEventListener('click', () => {
    window.location = '/2-choose-adventure';

});
main.append(sectionElement);

// set event listeners to update state and DOM
const letter = getRandomLetter(adventureData.letterChoices);
const correctLetter = letter.id;
const correctDescription = letter.description;

description.textContent = correctDescription;
findLetter.textContent = `Find the letter ${correctLetter}`;


radioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', (e) => {
        const userChoice = e.target.value;
        if (userChoice === correctLetter) {
            alert('you won');
            const storage = getFromLocalStorage('USER');
            storage.completed.push(adventureId);
            saveToLocalStorage('USER', storage);

            window.location = '../2-choose-adventure/index.html';
        } else {
            alert('please try again');
        }
    });
});
