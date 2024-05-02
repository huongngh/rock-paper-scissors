const winKey = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}
const computerKey = Object.keys(winKey)
function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()*computerKey.length);
    return computerKey[randomIndex]
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection){
    if (humanSelection.toLowerCase() == computerSelection){
        return "It is a tie"
    }
    else if (winKey[humanSelection.toLowerCase()] == computerSelection){
        humanScore += 1;
        return "You win this round! " + humanSelection + " beats " + computerSelection + " !"
    }
    computerScore += 1;
    return "The computer wins! " + computerSelection +" beats " + humanSelection + " !"
}
    
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));
console.log(humanScore);
console.log(computerScore);
