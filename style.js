//Returns a random Paper Scissors Rock Selection
function computerPlay() {
    var choice = ["paper", "scissors", "rock"];
    var computerSelection = choice[Math.floor(Math.random()*choice.length)];
    return computerSelection
}

//Prompts user to make a paper scissors rock selection. 
//Inputs other than paper scissors or rock is not allowed and return will always be lowercase. 
function humanPlay() {
    var playerChoice = prompt("Type a selection: Paper | Scissors | Rock");
    if (playerChoice.toLowerCase() == "paper" || playerChoice.toLowerCase() == "scissors" || playerChoice.toLowerCase() == "rock") {
        return playerChoice.toLowerCase();
    }
    else {
        return playerSelection();
    }
};




//Takes playerSelection and computerSelection to return winner of PSR. 
function playRound(playerSelection, computerSelection) {
    switch (playerSelection + computerSelection) {
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            console.log("This is a tie!");
            return "tie";

        case "scissorspaper":
        case "paperrock":
        case "rockscissors":
            console.log("This is a win in my book - and yours too. " + playerSelection + " beats " + computerSelection);
            return "win";

        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            console.log("You lose! " + computerSelection + " beats " + playerSelection);
            return "loss";
    }
}
    
function game() {
    var rounds = prompt("Select a number of rounds: ");
    var playerScore = 0;
    var computerScore = 0;

    while (rounds > 0) {
        var result = playRound(humanPlay(), computerPlay());

        if(result=="win") {
            playerScore++
            console.log("Current Score - You: " + playerScore + " Computer: " + computerScore);
            console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
            rounds--;
        }
        else if(result=="loss"){
            computerScore++
            console.log("Current Score - You: " + playerScore + " Computer: " + computerScore);
            console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
            rounds--;
        }
        else if(result=="tie"){
            console.log("No points awarded!")
            console.log("Current Score - You: " + playerScore + " Computer: " + computerScore);
            console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
            continue;
        }
    }
    console.log("GAME OVER");
    if (playerScore > computerScore){
        console.log("YOU WIN!");
    }
    else {
        console.log("YOU LOSE!");
    }
    console.log("Final Score - You: " + playerScore + " Computer: " + computerScore);
}  



game();
