function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    return choice = getRandomInt(3);
}

let round = 0;
let computerScore = 0;
let humanScore = 0;

function playRound(hc) {
    //const crown = document.createElement('img');
    const results = document.getElementById('results');

    if (results.children.length > 1) {
        results.removeChild(results.lastChild);
    }
    

    let cc = getComputerChoice();
    console.log("Computer Choice: " + cc)
    
    const computerChoice = document.getElementById('computer-choice');

    const r = 1;
    const p = 2;
    const s = 3;

    if (hc === cc) {
        computerChoice.textContent = "Draw";
    }
    else if (hc === r && cc === s) {
        humanScore++;
        computerChoice.textContent = "Computer chose Scissors - You Win!";
    }
    else if (hc === r && cc === p) {
        computerScore++;
        computerChoice.textContent = "Computer chose Paper - You Lose.";
    }
    else if (hc === p && cc === r) {
        humanScore++;
        computerChoice.textContent = "Computer chose Rock - You Win!";
    }
    else if (hc === p && cc === s) {
        computerScore++;
        computerChoice.textContent = "Computer chose Scissors - You Lose.";
    }
    else if (hc === s && cc === p) {
        humanScore++;
        computerChoice.textContent = "Computer chose Paper - You Win!";
    }
    else if (hc === s && cc === r) {
        computerScore++;
        computerChoice.textContent = "Computer chose Rock - You Lose.";
    }

    computerChoice.style.cssText = "font-size: 2rem;";

    document.getElementById("wins").textContent = humanScore;
    document.getElementById("losses").textContent = computerScore;
    
    round++;
    console.log(round);
    document.getElementById("round").textContent = round;

    const winner = document.createElement('span');
    const loser = document.createElement('span');
    const draw = document.createElement('span');

    if (humanScore === 3 || computerScore === 3) {
    console.log("Game done")

        if (humanScore > computerScore) {
            winner.textContent = "You win! Here's your crown king 👑";
            winner.style.cssText = "color: #fffa6e; font-size: 3rem;";
            results.appendChild(winner);
        }
        else {
            console.log("woooohoooooo")
            loser.textContent = "The computer wins... do better";
            loser.style.cssText = "color: #9C59D1; font-size: 3rem;";
            results.appendChild(loser);
        }
        // else {
        //     draw.textContent = "It's a tie!";
        //     draw.style.cssText = "color: #eeeeee font-size: 2rem";
        //     results.appendChild(draw);
    // }

    // reset score
    round = 0;
    computerScore = 0;
    humanScore = 0;
    }
}


const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

rockButton.addEventListener("click", () => {
    const hc = 1; // rock
    playRound(hc); 

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore); 
});

paperButton.addEventListener("click", () => {
    const hc = 2; // paper
    playRound(hc); 

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
});

scissorsButton.addEventListener("click", () => {
    const hc = 3; // scissors
    playRound(hc); 

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
});






