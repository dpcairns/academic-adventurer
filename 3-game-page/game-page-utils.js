//import adventureData from '../Data/data.js'; 
export function findById(adventureData, id) {
    return adventureData.find(i => i.id === id);
}

export function renderGame(adventure) {
    
    const backImage = document.createElement('img');
    backImage.src = adventure.background;
    backImage.style.background;
    

    return backImage;

}