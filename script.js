// RPS Game

//- The player will get a prompt asking for 'Rock', 'Paper' or 'Scissors'.
const playerChoice = prompt('Type Rock, Paper or Scissors: ').toLowerCase();
//- A function randomly picks 'Rock', 'Paper' or 'Scissors' for the computer and saves it to a variable.
function getComputerChoice() {
    let random = Math.floor((Math.random() * 3));
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[random].toLowerCase();
}

const computerChoice = getComputerChoice();
//- Add RPS logic to a 'playGame' function that takes playerChoice and computerSelection as params.
function playGame(playerSelection, computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'rock') {
        return ('Its a tie!');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return ('You loose! Paper beats Rock!');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return ('You win! Rock beats Scissors!');
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return ('Its a tie!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return ('You win! Paper beats Rock!');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return ('You loose! Scissors beats Paper!');
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return ('Its a tie!');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return ('You win! Scissors beats Paper!');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return ('You loose! Rock beats Scissors!');
    } else {
        return ('Something went wrong..');
    }
}


//- Call function and display it in console.
// console.log(playGame(playerChoice, computerChoice));

// A function to keep track of score and display each round in console. Best of 5.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let games = 5;

    for (let i = 0; i <= games; i++) {
        const computerChoice = getComputerChoice();
        let result = playGame(playerChoice, computerChoice);
        if(String(result).includes('win')) {
            playerScore++;
            console.log(result);
        } else if (String(result).includes('loose')) {
            computerScore++;
            console.log(result);
        } else {
            playerScore++;
            computerScore++;
            console.log(result);
        }
    }
    if(playerScore > computerScore) {
        return (`You got the best score of ${playerScore} in a total of ${games} rounds.`);
    } else if(computerScore > playerScore) {
        return (`You lost with a score of ${playerScore} in a total of ${games} rounds. The computer got ${computerScore}`);
    } else {
        return (`It was a tie! Your score: ${playerScore}. Computer score: ${computerScore}`);
    }
}

console.log(game());