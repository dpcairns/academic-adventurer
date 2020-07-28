// IMPORT MODULES under test here:
import { renderAdventure } from '../2-choose-adventure/adventureUtils.js';
import adventureData from '../Data/data.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const actual = renderAdventure(adventureData);


    //Act 
    // Call the function you're testing and set the result to a const
    const expected = `<section><label><input type="radio" value="adventure1" name="adventure-choice" class="pack-div"><img src="http://www.placekitten.com/200/200"></label></section>`;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});
