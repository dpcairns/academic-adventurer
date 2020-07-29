// import functions and grab DOM elements
import adventureData from '../Data/data.js';
import { renderAdventure } from './adventureUtils.js';
// import { getFromLocalStorage } from '../1-user-info/userUtils.js';

// initialize state
const main = document.querySelector('main');


for (let i = 0; i < adventureData.length; i++) {
    const adventure = adventureData[i];
    const element = renderAdventure(adventure);
    
    main.appendChild(element);
}




       
