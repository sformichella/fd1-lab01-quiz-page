import { evaluationMessage, yesCoerce } from '../apps/utils.js';



// Testing yesCoerce

const test = QUnit.test;

test('yesCoerce should return true when called with yes', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = yesCoerce(yes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});




test('yesCoerce should return false when called with no', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = yesCoerce(no);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});




// Testing evaluationMessage

test('Should return "Great Work!!!" when fed 95', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Great Work!!!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = evaluationMessage(95);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

