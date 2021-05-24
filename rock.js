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

    //Prompts user for input
    var playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    var computerSelection = computerPlay();

    //Compares selections, determines winner
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "tie";
        }else if (computerSelection == "paper"){
            return "lose";
        }else if (computerSelection == "scissors"){
            return "win";
        }
    }
    if(playerSelection == "paper"){
        if (computerSelection == "rock"){
            return "win";
        }else if (computerSelection == "paper"){
            return "tie";
        }else if (computerSelection == "scissors"){
            return "lose";
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return "lose";
        }else if (computerSelection == "paper"){
            return "win";
        }else if (computerSelection == "scissors"){
            return "tie";
        }
    }
}
function game(){
    let winCount = 0;
    let loseCount = 0;
    for (i = 0; i < 5; i++){
        let result = playRound();
        if (result == "win"){
            winCount++;
            console.log("wins",winCount);
        }else if (result == "lose"){
            loseCount++;
            console.log("losses",loseCount);
        }else{
            console.log("tie");
        }
}
    if(winCount > loseCount){
        alert("You win!");
    }else if(winCount < loseCount){
        alert("You lose!");
    }else{
        alert("Tie!");
    }
}
game();