// import functions and grab DOM elements
import adventureData from '../Data/data.js';
import { renderAdventure, completedAdventure } from './adventureUtils.js';
import { getFromLocalStorage } from '../1-user-info/userUtils.js';

// initialize state
const main = document.querySelector('main');
const localStorage = getFromLocalStorage('USER');
const completedStorage = localStorage.completed;

for (let i = 0; i < adventureData.length; i++) {
    const adventure = adventureData[i];
    if (completedStorage[adventure.id]) {
        const completedElement = completedAdventure(adventure);

        main.appendChild(completedElement);
    } else {
        const element = renderAdventure(adventure);

        main.appendChild(element);
    }
}




