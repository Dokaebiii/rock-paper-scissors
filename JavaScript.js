function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    return choice = getRandomInt(3);
}

let computerScore = 0;
let humanScore = 0;
let draws = 0;


function playRound(hc) {
    let cc = getComputerChoice();
    console.log("Computer Choice: " + cc)

    const r = 1;
    const p = 2;
    const s = 3;

    if (hc === cc) {
        draws++;
        console.log("Draw");

        document.getElementById("draws").textContent = draws;
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
    else console.log("something happened")

    document.getElementById("wins").textContent = humanScore;
    document.getElementById("losses").textContent = computerScore;
}


const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

rockButton.addEventListener("click", () => {
    console.log("rock button pressed");

    const hc = 1; // rock
    playRound(hc); 

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore); 
});

paperButton.addEventListener("click", () => {
    console.log("paper button pressed");

    const hc = 2; // paper
    playRound(hc); 

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
});

scissorsButton.addEventListener("click", () => {
    console.log("scissors button pressed");

    const hc = 3; // scissors
    playRound(hc); 

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
});






