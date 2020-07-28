// import functions and grab DOM elements
import adventureData from '../Data/data.js';
import { findById, renderAdventure } from './adventureUtils.js';
import { getFromLocalStorage } from '../1-user-info/userUtils.js';

// initialize state
const main = document.querySelector('main');
//let completedAdventures = 0;
//const param = new URLSearchParams(window.location.search);

const user = getFromLocalStorage('USER');

for (let i = 0; i < adventureData.length; i++) {
    const adventure = adventureData[i];

   // if (user.completed[adventure.id]) {
        //completedAdventures = completedAdventures + 1;

    console.log(user);

    //const choosenJournalId = param.get('id');
// console.log(choosenJournalId);

    const adventuresData = findById(adventureData, adventure.id);

// console.log(adventuresData);
    const adventureSection = renderAdventure(adventuresData);
// console.log(adventureSection);

    main.append(adventureSection);
// set event listeners to update state and DOM

}