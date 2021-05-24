function computerPlay(){
    //Generates a random number from 1 to 3
    randomInt =  Math.round(Math.random() * (3 - 1) + 1);

    //Assigns randomly generated number to a rock, paper or scissors value
    if (randomInt == 1){
        return "rock";
    }else if(randomInt == 2){
        return "paper";
    }else if(randomInt == 3){
        return "scissors";
    }
}
function playRound(computerSelection, playerSelection){
    var playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    var computerSelection = computerPlay();
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "Tie!";
        }else if (computerSelection == "paper"){
            return "You lose! Paper beats Rock!";
        }else if (computerSelection == "scissors"){
            return "You Win! Rock beats Scissors!";
        }
    }
    if(playerSelection == "paper"){
        if (computerSelection == "rock"){
            return "You win! Paper beats Rock!";
        }else if (computerSelection == "paper"){
            return "Tie!";
        }else if (computerSelection == "scissors"){
            return "You lose! Scissors beats Paper!";
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return "You lose! Rock beats Scissors!";
        }else if (computerSelection == "paper"){
            return "You win! Scissors beats Paper!";
        }else if (computerSelection == "scissors"){
            return "Tie!";
        }
    }
}
console.log(playRound());

