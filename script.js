let movesLeft = 5;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let moves = ["rock", "paper", "scissors"];
    let randomMove = Math.floor(Math.random() * 3);
    return moves[randomMove];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a tie. You both picked ${playerSelection}!
Score: ${playerScore} - ${computerScore}`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        movesLeft -= 1;
        return `You win this round! Rock beats scissors!
Score: ${playerScore} - ${computerScore}`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        movesLeft -= 1;
        return `You lose this round! Paper beats rock!
Score: ${playerScore} - ${computerScore}`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        movesLeft -= 1;
        return `You win this round! Scissors beats paper!
Score: ${playerScore} - ${computerScore}`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        movesLeft -= 1;
        return `You lose this round! Rock beats scissors!
Score: ${playerScore} - ${computerScore}`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        movesLeft -= 1;
        return `You win this round! Paper beats rock!
Score: ${playerScore} - ${computerScore}`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        movesLeft -= 1;
        return `You lose this round! Scissors beats paper!
Score: ${playerScore} - ${computerScore}`;
    } else {
        return "You've entered your move wrongly...";
    }
}

function game() {
    while (movesLeft > 0) {
        alert(playRound(prompt("Enter either rock, paper or scissors: ").toLowerCase(), computerPlay()));
    }
    if (playerScore > computerScore) {
        return `You win the game with a score of ${playerScore} - ${computerScore}!`
    } else {
        return `You lose the game with a score of ${playerScore} - ${computerScore}`
    }
}

alert(game());