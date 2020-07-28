// import functions and grab DOM elements
import adventureData from '../Data/data.js';
import { findById, renderAdventure } from './adventureUtils.js';

// initialize state
const main = document.querySelector('main');

const param = new URLSearchParams(window.location.search);

const choosenJournalId = param.get('id');
// console.log(choosenJournalId);

const adventuresData = findById(adventureData, choosenJournalId);

// console.log(adventuresData);
const adventureSection = renderAdventure(adventuresData);
// console.log(adventureSection);

main.append(adventureSection);
// set event listeners to update state and DOM

