

export function findById(adventureData, id) {
    return adventureData.find(i => i.id === id);
}

export function renderLetters(letterChoices) {
    const imageDiv = document.createElement('div');
    for (let i = 0; i < letterChoices.length; i++) {
        const letter = letterChoices[i];
        const label = document.createElement('label');
        label.classList.add('letter-labels');
        const inputButton = document.createElement('input');
        inputButton.type = 'radio';
        inputButton.name = 'letter-select';
        inputButton.value = letter.id;
        label.appendChild(inputButton);
        const imgtag = document.createElement('img');
        imgtag.classList.add('letter-tiles');
        imgtag.src = letter.image;

        label.appendChild(imgtag);
        imageDiv.append(label);

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

    return containerDiv;

}


export function getRandomLetter(letterchoices) {
    const randomLetter = Math.floor(Math.random() * letterchoices.length);
    return letterchoices[randomLetter];

}
export function findLetterIndex(adventureData, id) {
    return adventureData.findIndex(i => i.id === id);
}