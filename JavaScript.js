
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    if (choice === 0) {
        return "ROCK";
    } 
    else if (choice === 1) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose Rock Paper or Scissors");
    return choice;
}




function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    const totalGames = 5;
    

    function playRound() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        let cc = computerChoice;
        let hc = humanChoice.toUpperCase();

        const r = "ROCK";
        const p = "PAPER";
        const s = "SCISSORS";

        if (hc === cc) {
            console.log("Draw");
        }
        else if (hc === r && cc === s) {
            humanScore++;
            console.log("Rock vs Scissors -> You Win!");
        }
        else if (hc === r && cc === p) {
            computerScore++;
            console.log("Rock vs Paper -> You Lose.");
        }
        else if (hc === p && cc === r) {
            humanScore++;
            console.log("Paper vs Rock -> You Win!");
        }
        else if (hc === p && cc === s) {
            computerScore++;
            console.log("Paper vs Scissors -> You Lose.");
        }
        else if (hc === s && cc === p) {
            humanScore++;
            console.log("Scissors vs Paper -> You Win!");
        }
        else if (hc === s && cc === r) {
            computerScore++;
            console.log("Scissors vs Rock -> You Lose.");
        }
    }

    for (let i = 0; i < totalGames; i++) {
        playRound();
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

playGame();


