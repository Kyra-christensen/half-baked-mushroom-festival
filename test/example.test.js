// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findFriendByName } from '../data-utils.js';
import { renderMushroom } from '../render-utils.js';
const test = QUnit.test;

test('findFriendByName should take in a string and return an object with a name property that matches the string', (expect) => {
    //Arrange
    const nameArr = [
        {
            name: 'Kyra'
        },
        {
            name: 'Adam'
        },
        {
            name: 'Leigha'
        },
    ];
    // Set up your arguments and expectations
    const expected = {
        name: 'Adam'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findFriendByName('Adam', nameArr);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('renderMushroom() should return a DOM element', (expect) => {
    const expected = '<div class="mushroom"></div>';
    const actual = renderMushroom();
    expect.equal(actual.outerHTML, expected, 'renderMushroom() returns a DIV');
});