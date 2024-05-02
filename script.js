const winKey = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}
const computerChoice = Object.keys(winKey)
function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()*computerChoice.length);
    return computerChoice[randomIndex]
}
console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice
}
console.log(getHumanChoice);

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice  = getcomputerChoice();
}