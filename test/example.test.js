// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderListItem } from "../render-utils";
// const test = QUnit.test;

test skip('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected =`<div class="animal" style="top: 100px; left: 50%;"><img src="../assets/redpanda.svg"><span class="name">Aby</span><span>Have a pandastic day</span></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const Aby = [
    {
        id: '1',
        Image: '../assets/redpanda.svg',
        name: 'Aby',
        type: 'redpanda',
        says: 'Have a pandastic day',
        top: '100px',
        left: '50%',

    //Expect
    // Make assertions about what is expected versus the actual result
    };
    const actual = renderListItem(Aby);
    expect.equal(actual.outerHTML, expected)
});
