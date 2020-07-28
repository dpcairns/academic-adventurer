// IMPORT MODULES under test here:
import { renderAdventure } from '../2-choose-adventure/adventureUtils.js';
// import adventureData from '../Data/data.js';

const test = QUnit.test;

test('renderAdventure', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const adventure1 = {
        id: 'adventure1',
        image: '../assets/blue.png'
    };
    
    const actual = renderAdventure(adventure1);
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = `<section><label><a href="/quest/?id=adventure1"><img src="../assets/blue.png"></a><input type="radio" value="adventure1" name="adventure-choice" class="pack-div"></label></section>`;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});
