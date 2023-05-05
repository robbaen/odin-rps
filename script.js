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
        console.log('Its a tie!');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You loose! Paper beats Rock!');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win! Rock beats Scissors!');
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('Its a tie!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win! Paper beats Rock!');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You loose! Scissors beats Paper!');
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('Its a tie!');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win! Scissors beats Paper!');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You loose! Rock beats Scissors!');
    } else {
        console.log('Something went wrong..');
    }
}
//- Call function and display it in console.
console.log(playGame(playerChoice, computerChoice));