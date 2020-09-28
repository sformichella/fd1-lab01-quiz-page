import{
    yesCoerce, 
    evaluationMessage
} from './utils.js';




let resultsText = document.getElementById('results');
let evaluationText =  document.getElementById('eval-text');
let resultsSection = document.getElementById('results-section')

export function beginQuizClickHandler() {

// Confirm that the user wants to start the quiz
    if (!confirm('Are you sure you want to start the quiz?')) {
        return;
    }

// Variables
    let correctAnswers = 0;
    let percentage
    const userName = prompt('Please enter your name:');


// Question One
    const questionOneResponse = prompt('Was Euclid an Indian mathematician?');

    if (!yesCoerce(questionOneResponse)) {
        correctAnswers++;
    }


// Question Two
    const questionTwoResponse = prompt('Is there an infinite amount of prime numbers?');

    if (yesCoerce(questionTwoResponse)) {
        correctAnswers++;
    }


// Question Three
    const questionThreeResponse = prompt('Is the square root of ten an irrational number?');

    if (yesCoerce(questionThreeResponse)) {
        correctAnswers++;
    }


// After quiz stuff

    alert('The quiz is now complete! Your results will be display below.');

    percentage = Math.floor(100 * correctAnswers/3);

    resultsText.textContent = `${userName} got ${correctAnswers} answers correct out of 3. That's ${percentage}%`;

    evaluationText.textContent = evaluationMessage(percentage);



    if (percentage > 90) {
        resultsSection.style.backgroundColor = 'green';
    }

    else if (percentage > 50) {
        resultsSection.style.backgroundColor = 'yellow';
    }
    else {
        resultsSection.style.backgroundColor = 'darksalmon';
    }



    correctAnswers = 0;
}