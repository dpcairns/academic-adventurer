// import functions and grab DOM elements
import adventureData from '../Data/data.js';
import { renderAdventure, completedAdventure } from './adventureUtils.js';
import { getFromLocalStorage } from '../1-user-info/userUtils.js';

// initialize state
const main = document.querySelector('main');
const localStorage = getFromLocalStorage('USER');
const completedStorage = localStorage.completed;
const audio = document.getElementById('audio');
audio.src = '../assets/audio-files/Click book choose adventure 2.mp3';

// cool derived state! but you probably could have done this outside the for loop. otherwise, you'll do it multiple times on page load for no reason
if (completedStorage.length === adventureData.length) {
    window.location = '../5-certificate-page/index.html';
}
    
for (let i = 0; i < adventureData.length; i++) {
    const adventure = adventureData[i];
    // would probably work as a ternery like so
    const toAppend = completedStorage[i] === adventure.id 
        ? completedAdventure(adventure) 
        : renderAdventure(adventure);

    main.appendChild(toAppend);
}




