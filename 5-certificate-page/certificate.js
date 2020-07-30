// import functions and grab DOM elements
import adventureData from '../Data/data.js';

import { getFromLocalStorage } from '../1-user-info/userUtils.js';
// initialize state
const userAdventureStats = getFromLocalStorage('USER');

if (userAdventureStats.completed < 5) {
    alert('Sorry! Please complete all Adventure Journals first.');
    window.location = '../2-choose-adventure/index.html';
}
// set event listeners to update state and DOM
const section = document.querySelector('section');
const p = document.createElement('p');

p.classList.add('completed-letters');
p.textContent = `Congrats ${userAdventureStats.name}!`;

const completedDiv = document.createElement('div');
completedDiv.textContent = `You successfully completed Adventures 1, 2, 3, 4, & 5. You know your A, B, C's!`;

//p.append(completedDiv);
section.append(p, completedDiv);