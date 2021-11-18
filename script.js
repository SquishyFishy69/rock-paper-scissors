let playerScore = 0;
let computerScore = 0;
let message;

function computerPlay() {
    let moves = ["rock", "paper", "scissors"];
    let randomMove = Math.floor(Math.random() * 3);
    return moves[randomMove];
}

function playRound(playerSelection, computerSelection) {
    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
    } 
    if (playerSelection == computerSelection) {
        message = `It's a tie. You both picked ${playerSelection}!`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        message = `You win this round! Rock beats scissors!`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        message = `You lose this round! Paper beats rock!`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        message =  `You win this round! Scissors beats paper!`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        message = `You lose this round! Rock beats scissors!`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        message = `You win this round! Paper beats rock!`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        message = `You lose this round! Scissors beats paper!`;
    }
    if (playerScore == 5) {
        message = "You win! Congratulations! Click any button to play again.";
    } else if (computerScore == 5) {
        message = "You lost. Don't worry, you can play again by clicking any button.";
    }
    document.querySelector('.score p').textContent = `${playerScore} - ${computerScore}`;
    document.querySelector('.message p').textContent = message;
}

document.getElementById('rock').onclick = function() {
    playRound('rock', computerPlay());
}
document.getElementById('paper').onclick = function() {
    playRound('paper', computerPlay());
}
document.getElementById('scissors').onclick = function() {
    playRound('scissors', computerPlay());
}



