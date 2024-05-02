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
    return humanChoice = prompt("Rock, Paper or Scissors?");
}
console.log(getHumanChoice)
function playRound(){

}