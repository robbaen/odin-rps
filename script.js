const playerChoice = prompt('Type Rock, Paper or Scissors: ').toLowerCase();
function getComputerChoice() {
    let random = Math.floor((Math.random() * 3));
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[random].toLowerCase();
}

const computerChoice = getComputerChoice();

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


console.log(playGame(playerChoice, computerChoice));