// RPS Game

//- The player will get a prompt asking for 'Rock', 'Paper' or 'Scissors'.
const playerSelection = prompt('Type Rock, Paper or Scissors: ');
//- A function randomly picks 'Rock', 'Paper' or 'Scissors' for the computer and saves it to a variable.
function getComputerChoice() {
    let random = Math.floor((Math.random() * 3));
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[random];
}

const computerSelection = getComputerChoice();
//- Add RPS logic to a 'playGame' function that takes playerSelection and computerSelection as params.
function playGame(playerSelection, computerSelection) {

}
//- Call function and display it in console.


