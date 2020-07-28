// import functions and grab DOM elements
import adventureData from '../Data/data.js';
import { renderAdventure } from './adventureUtils.js';
// import { getFromLocalStorage } from '../1-user-info/userUtils.js';

// initialize state
const main = document.querySelector('main');
// const letsPlayButton = document.querySelector('button');
/*const params = new URLSearchParams(window.location.search);
const adventureId = params.get('id');
const adventuresData = findById(adventureData, adventureId); */

            //let completedAdventures = 0;
            //const param = new URLSearchParams(window.location.search);

            // const user = getFromLocalStorage('USER');


for (let i = 0; i < adventureData.length; i++) {
    const adventure = adventureData[i];
    const element = renderAdventure(adventure);
    
    main.appendChild(element);
}




            // adventureRadioTags.forEach((adventureTag, i) => {
            //     if (i === 0) {
            //         adventureTag.value = adventureData[i];
            //     } else if (i === 1); {
            //         adventureTag.value = adventureData[i];
            //     }
            //     console.log(adventureTag);
            // });

            // adventureRadioTags.forEach((adventureTag) => {
            //     adventureTag.addEventListener('click', e => {
            //         const userChoice = e.target.value;
            //         console.log(e.target.value);
            //         return userChoice;
            //     });
            // });

// letsPlayButton.addEventListener('click', ()=>{
//     const adventureRadioTags = document.querySelector('input:checked');
//     const adventure = adventureRadioTags.value;

//     const param = new URLSearchParams(window.location.search);
// });

