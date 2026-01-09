function easyMode(randomNum){
    let maximumAttempt = 10;
    let attempts = 0;
    let playerGuess;
    alert("Welcome to Easy Mode! You have 10 attempts to guess the right number.")
    while (maximumAttempt > 0 && playerGuess !== randomNum){
        playerGuess = Number(prompt("Guess the number from 1-100"));
        if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100){
            alert("Invalid input, please try again.");
            continue;
        }
        maximumAttempt--;
        attempts++;
        if (playerGuess === randomNum){
            alert(`Congratulations! You have guessed the number: ${randomNum} in ${attempts} attempts`);
            break;
        }
        else if (playerGuess > randomNum){
            alert(`Wrong number. The number is less than ${playerGuess}. You have ${maximumAttempt} attempt(s) left.`)
        }
        else if (playerGuess < randomNum){
            alert(`Wrong number. The number is greater than ${playerGuess}. You have ${maximumAttempt} attempt(s) left.`)
        }
    }
    if (maximumAttempt === 0){
        alert("You have run out of attempts. Thanks for playing!")
    }
    else {
        alert("Thanks for playing!")
    }
    let playAgain = confirm("Will you play again?")
    if (playAgain === true){
        playGame();
    }
}

function mediumMode(randomNum){
    let maximumAttempt = 5;
    let attempts = 0;
    let playerGuess;
    alert("Welcome to Medium Mode! You have 5 attempts to guess the right number.")
    while (maximumAttempt > 0 && playerGuess !== randomNum){
        playerGuess = Number(prompt("Guess the number from 1-100"));
        if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100){
        alert("Invalid input, please try again.");
        continue;
        }
        maximumAttempt--;
        attempts++;
        if (playerGuess === randomNum){
            alert(`Congratulations! You have guessed the number: ${randomNum} in ${attempts} attempts`);
            break;
        }
        else if (playerGuess > randomNum){
            alert(`Wrong number. The number is less than ${playerGuess}. You have ${maximumAttempt} attempt(s) left.`)
        }
        else if (playerGuess < randomNum){
            alert(`Wrong number. The number is greater than ${playerGuess}. You have ${maximumAttempt} attempt(s) left.`)
        }
    }
    if (maximumAttempt === 0){
        alert("You have run out of attempts. Thanks for playing!")
    }
    else {
        alert("Thanks for playing!")
    }
    let playAgain = confirm("Will you play again?")
    if (playAgain === true){
        playGame();
    }
}

function hardMode(randomNum){
    let maximumAttempt = 1;
    let attempts = 0;
    let playerGuess;
    alert(`Welcome to Hard Mode! You have 1 attempt to guess the right number.`)
    while (maximumAttempt > 0 && playerGuess !== randomNum){
        playerGuess = Number(prompt(`Guess the number from 1-100 \nClue: ${clue(randomNum)}`));
        if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100){
        alert("Invalid input, please try again.");
        continue;
        }
        maximumAttempt--;
        attempts++;
        if (playerGuess === randomNum){
            alert(`Congratulations! You have guessed the number: ${randomNum} in ${attempts} attempt`);
            break;
        }
        else if (playerGuess > randomNum){
            alert(`Wrong number. The number was ${randomNum}.`)
        }
        else if (playerGuess < randomNum){
            alert(`Wrong number. The number was ${randomNum}.`)
        }
    }
    alert("Thanks for playing!")
    let playAgain = confirm("Will you play again?")
    if (playAgain === true){
        playGame();
    }
}

function clue(randomNum) {
    return randomNum > 50
        ? "The number is between 51 and 100"
        : "The number is between 1 and 50";
}

function playGame(){
    let max = 100;
    let randomNum = Math.floor(Math.random() * max) + 1;
    alert("Welcome to the guessing number game! You will guess a number from 1-100 across various difficulties.")
    let choice = Number(prompt("Please select difficulty:\n1. Easy\n2. Medium\n3. Hard"))
    switch(choice){
        case 1: easyMode(randomNum); break;
        case 2: mediumMode(randomNum); break;
        case 3: hardMode(randomNum); break;
        default: alert("Please enter 1-3 only"); playGame(); 
    }
}

playGame();