//import adventureData from '../Data/data.js'; 
export function findById(adventureData, id) {
    return adventureData.find(i => i.id === id);
}

export function renderLetters(letterChoices){
    const imageDiv = document.createElement('div');
    for (let i = 0; i < letterChoices.length; i++) {
        const letter = letterChoices[i];
        const imgtag = document.createElement('img');
        imgtag.classList.add('letter-tiles');
        imgtag.src = letter.image;
         

        
        
        imageDiv.append(imgtag);
    }
    return imageDiv;
}

export function renderGame(adventure) {
    const containerDiv = document.createElement('div');
    const backImage = document.createElement('img');
    backImage.src = adventure.background;
    backImage.style.background;
    const div1 = document.createElement('div');
    const letterchoices = adventure.letterChoices;
    const letterarray = renderLetters(letterchoices);
     
    
    div1.append(letterarray);
    containerDiv.append(backImage, div1);
    
    
    
    
    
    
    // for (let i = 0; i < letterchoices.length; i++) {
    //     const letter = letterchoices[i];

    //     return letters;
    // }

    
    

    return containerDiv;

}