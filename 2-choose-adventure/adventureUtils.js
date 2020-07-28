// import { adventure1 } from '../Data/data.js';

// import { adventureData } from '../Data/data.js';

export function findById(array, id){
    let adventureMatch = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].id === id){
            adventureMatch = array[i];
            return adventureMatch;
        }
    }
}

export function renderAdventure(){
    const section = document.createElement('section');

    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.value = 'adventure1';
    input.name = 'adventure-choice';
    input.classList.add('pack-div');
    
    const image = document.createElement('img');
    image.src = 'http://www.placekitten.com/200/200';
    
    label.append(input, image);

    section.append(label);
    return section;


}