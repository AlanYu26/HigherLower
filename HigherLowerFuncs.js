function get_number(maxnum) {
    let valid = false;
    let maxvalue;
    let input;

    while (!valid) {
        input = window.prompt(maxnum);

        maxvalue = Math.round(Number(input));

        if (maxvalue != NaN && maxvalue > 0 && maxvalue != 1) {
            valid = true;
        }
    }

    let selection = document.getElementById("instruction");
    selection.innerHTML = `Guess a number between 1 and ${maxvalue}:`;

    return maxvalue;
}

let num = get_number("Enter the max number to guess from. If this reprompted you for an input, you submitted an invalid input.");
let actual = Math.floor(Math.random() * num) + 1;
let guesses = [];
let guess = Math.round(Number(document.getElementById("Guess").value));
let guess_status = false;

function rightGuess() {

    if (guess_status == false) {

        if (guesses.indexOf(guess) === -1) {
            guesses.push(guess);
        }

        for (let i = 0; i < guesses.length; i++) {
            guesses[i] = ' ' + guesses[i];
        }

        if (guesses.length == 1) {

            let div = document.querySelector(".container");
            let newNode = document.createElement("p");
            newNode.innerHTML = `Your guess was spot on! <br> It took you ${guesses.length} guess. <br> Your guess was ${guesses}. <br> If you want to play again refresh the page!`;
            div.appendChild(newNode);
            let p2 = div.getElementsByTagName("p")[1];
            div.removeChild(p2);

        } else {

            let div = document.querySelector(".container");
            let newNode = document.createElement("p");
            newNode.innerHTML = `Your guess was spot on! <br> It took you ${guesses.length} guesses. <br> Your guesses were ${guesses}. <br> If you want to play again refresh the page!`;
            div.appendChild(newNode);
            let p2 = div.getElementsByTagName("p")[1];
            div.removeChild(p2);
        }

        guess_status = true;

    } else return;
}

function TooHigh() {

    if (guesses.indexOf(guess) === -1 && guess_status == false) {

        guesses.push(guess);
        let div = document.querySelector(".container");
        let newNode = document.createElement("p");
        newNode.innerHTML = `Your guess was higher than the value!`;
        div.appendChild(newNode);
        let p2 = div.getElementsByTagName("p")[1];
        div.removeChild(p2);

    } else if (guess_status == true) {

        if (guesses.length == 1) {

            let div = document.querySelector(".container");
            let newNode = document.createElement("p");
            newNode.innerHTML = `You already won! The value was ${actual}.<br> It took you ${guesses.length} guess. <br> Your guess was ${guesses}. <br> If you want to play again refresh the page!`;
            div.appendChild(newNode);
            let p2 = div.getElementsByTagName("p")[1];
            div.removeChild(p2);

        } else {

            let div = document.querySelector(".container");
            let newNode = document.createElement("p");
            newNode.innerHTML = `You already won! The value was ${actual}.<br> It took you ${guesses.length} guesses. <br> Your guesses were ${guesses}. <br> If you want to play again refresh the page!`;
            div.appendChild(newNode);
            let p2 = div.getElementsByTagName("p")[1];
            div.removeChild(p2);

        }
    } else {

        let div = document.querySelector(".container");
        let newNode = document.createElement("p");
        newNode.innerHTML = `You tried this value already. Guess again.`;
        div.appendChild(newNode);
        let p2 = div.getElementsByTagName("p")[1];
        div.removeChild(p2);
    }
}

function TooLow() {

    if (guesses.indexOf(guess) === -1 && guess_status == false) {

        guesses.push(guess);
        let div = document.querySelector(".container");
        let newNode = document.createElement("p");
        newNode.innerHTML = `Your guess was lower than the value!`;
        div.appendChild(newNode);
        let p2 = div.getElementsByTagName("p")[1];
        div.removeChild(p2);

    } else if (guess_status == true) {

        if (guesses.length == 1) {

            let div = document.querySelector(".container");
            let newNode = document.createElement("p");
            newNode.innerHTML = `You already won! The value was ${actual}.<br> It took you ${guesses.length} guess. <br> Your guess was ${guesses}. <br> If you want to play again refresh the page!`;
            div.appendChild(newNode);
            let p2 = div.getElementsByTagName("p")[1];
            div.removeChild(p2);

        } else {

            let div = document.querySelector(".container");
            let newNode = document.createElement("p");
            newNode.innerHTML = `You already won! The value was ${actual}.<br> It took you ${guesses.length} guesses. <br> Your guesses were ${guesses}. <br> If you want to play again refresh the page!`;
            div.appendChild(newNode);
            let p2 = div.getElementsByTagName("p")[1];
            div.removeChild(p2);

        }
    } else {

        let div = document.querySelector(".container");
        let newNode = document.createElement("p");
        newNode.innerHTML = `You tried this value already. Guess again.`;
        div.appendChild(newNode);
        let p2 = div.getElementsByTagName("p")[1];
        div.removeChild(p2);
    }
}

function checkGuess() {

    guess = Math.round(Number(document.getElementById("Guess").value));

    if (guess != NaN && guess >= 1 && guess <= num) {

        if (actual == guess) {
            rightGuess();
        } else if (actual < guess) {
            TooHigh();
        } else if (actual > guess) {
            TooLow();
        }

    } else if ((guess > num || guess < 1) && guess_status != true) {

        let div = document.querySelector(".container");
        let newNode = document.createElement("p");
        newNode.innerHTML = `Your guess was not in the valid range. Guess again.`;
        div.appendChild(newNode);
        let p2 = div.getElementsByTagName("p")[1];
        div.removeChild(p2);

    } else if (guess_status != true) {

        let div = document.querySelector(".container");
        let newNode = document.createElement("p");
        newNode.innerHTML = `Your guess was not a number. Guess again.`;
        div.appendChild(newNode);
        let p2 = div.getElementsByTagName("p")[1];
        div.removeChild(p2);

    } else return;
}