// import { adventure1 } from '../Data/data.js';

// import { adventureData } from '../Data/data.js';

import { getFromLocalStorage } from '../1-user-info/userUtils.js';

export function findById(array, id) {
    let adventureMatch = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            adventureMatch = array[i];
            return adventureMatch;
        }
    }
}

export function renderAdventure(adventureData) {
    const localStorage = getFromLocalStorage('USER');
    const completed = localStorage.completed;

    if (completed[0] === adventureData.id) {
        const section = document.createElement('section');

        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.value = adventureData.id;
        input.name = 'adventure-choice';
        input.classList.add('pack-div');

        const a = document.createElement('a');

        label.append(a);
        const image = document.createElement('img');
        image.src = adventureData.image;
        a.append(image);


        label.append(input);

        section.append(label);
        return section;
    } else {
        const section = document.createElement('section');

        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.value = adventureData.id;
        input.name = 'adventure-choice';
        input.classList.add('pack-div');

        const a = document.createElement('a');
        a.href = '/3-game-page/?id=' + adventureData.id;

        label.append(a);
        const image = document.createElement('img');
        image.src = adventureData.image;
        a.append(image);


        label.append(input);

        section.append(label);
        return section;

    }
}