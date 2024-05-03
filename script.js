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

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");
    humanChoice = (humanChoice? humanChoice:'').toLowerCase();
    return humanChoice
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
    
        if (humanChoice === computerChoice){
            console.log ("It is a tie",
                    "Your score: "+ humanScore,
                    "Computer score: "+ computerScore);)
        }
        else if (winKey[humanChoice] === computerChoice){
            humanScore += 1;
            console.log ("You win this round!",
                    "Your score: " + humanScore,
                    "Computer score: " + computerScore);
        }
        else{
            computerScore += 1;
            console.log("The computer wins this round! ",
                    "Your score: "+ humanScore,
                    "Computer score: "+ computerScore);
        }
    }
    
    for (let i = 0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection);
    }
    
    
    if (humanScore > computerScore){
        console.log("You win this game!", 
            "Your score: "+ humanScore,
            "Computer score: "+ computerScore);
    }
    else {
        console.log("The computer wins this game!", 
        "Your score: "+ humanScore,
        "Computer score: "+ computerScore);
    }   
}
playGame();
