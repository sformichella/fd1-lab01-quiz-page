

export function yesCoerce (input) {
    if (input.toUpperCase().charAt(0) === 'Y') {
        return true;
    }

    return false;
}




export function evaluationMessage(percent) {

    if (percent > 90) {
        return 'Great work!!!';
    }

    else if (percent > 50) {
        return 'Pretty good! Consider trying the quiz again.';
    }

    else {
       return 'You can do better than that!!!';
    }

}