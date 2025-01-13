function getComputerChoice(){
    const randomNum = Math.random();

    if(randomNum < 0.33){
        return 'Rock';
    }
    else if(randomNum > 0.66){
        return 'Scissor';
    }
    else{
        return 'Paper';
    }
}

let userScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice){
    userChoice = userChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(userChoice === computerChoice){
        return "It's a Tie!";
    }

    if((userChoice === "rock" && computerChoice === "paper") || (userChoice === "scissor" && computerChoice === "rock") || userChoice === "paper" && computerChoice === "scissor"){
        computerScore++;
        return "Computer wins this round!";
    }
    else{
        userScore++;
        return "You win this round!";
    }
}

function playGame(){
    for(let i=0; i<5; i++){
        const userSelection = prompt("Please enter your choice:");
        const computerSelection = getComputerChoice();

        const roundResult = playRound(userSelection, computerSelection);
        console.log(roundResult);
    }

    if(userScore > computerScore){
        console.log("You win the game!");
    }else if(userScore < computerScore){
        console.log("Computer wins the game!");
    }else{
        console.log("The game is a tie!");
    }
}

playGame();
