
let humanScore = 0;
let computerScore = 0;

const btnRock = document.querySelector("#rock");
console.log(btnRock);
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const resultDiv = document.querySelector("#result");

const winKey = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}
const computerKey = Object.keys(winKey)
function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()*computerKey.length);
    return computerKey[randomIndex].toLowerCase()
}
function playRound(humanChoice, computerChoice){
    console.log(humanChoice, computerChoice);
    if (humanChoice === computerChoice){
        const p = document.createElement("p");
        p.innerText = "It's a tie!";
        resultDiv.appendChild(p);
    }
    else if (winKey[humanChoice] === computerChoice){
        humanScore += 1;
        const p = document.createElement("p");
        p.innerText = `You win! ${humanChoice} beats ${computerChoice} \n`;
        p.innerText += `Your score: ${humanScore} \n`;
        p.innerText += `Computer score: ${computerScore} \n`;
        resultDiv.appendChild(p);

    }
    else{
        computerScore += 1;
        const p = document.createElement("p");
        p.innerText = `The computer wins! ${computerChoice} beats ${humanChoice} \n`;
        p.innerText += `Your score: ${humanScore} \n`;
        p.innerText += `Computer score: ${computerScore}\n`;
        resultDiv.appendChild(p);
    }
}

const winnerCheck = (humanScore, computerScore) =>{
    console.log(humanScore, computerScore);
    if (humanScore === 5){
        const h2 = document.createElement("h2");
        h2.innerText = `You win this game!`;
        resultDiv.appendChild(h2);
    }
    else if (computerScore === 5){
        const h2 = document.createElement("h2");
        h2.innerText = `The computer win this game!`;
        resultDiv.appendChild(h2);
    }
}
  
btnRock.addEventListener("click",()=>{
    playRound("rock", getComputerChoice());
    winnerCheck(humanScore, computerScore);
})

btnPaper.addEventListener("click",()=>{
    playRound("paper", getComputerChoice());
    winnerCheck(humanScore, computerScore);
})

btnScissors.addEventListener("click",()=>{
    playRound("scissors", getComputerChoice());
    winnerCheck(humanScore, computerScore);
})