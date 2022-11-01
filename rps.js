const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const output_player = document.getElementById("update-player");
const output_computer = document.getElementById("update-computer");
const computer_move = document.getElementById("computers-move")
const status = document.getElementById("status")
//set player scores
let player_score = 0;
let computer_score = 0;
let game_count = 0 ;

function getComputerChoice() {
    let move = Math.floor((Math.random() * 3)) ; 

    if (move == 0) {return "rock";}
    else if (move == 1) {return "paper";}
    else {return "scissors";}
}

function game (playermove, computermove){
    if (playermove == computermove) {return "tie"}
    if (playermove == "rock" && computermove == "scissors"){return "player";}
    if (playermove == "rock" && computermove == "paper"){return "computer";}
    if (playermove == "scissors" && computermove == "paper"){return "player";}
    if (playermove == "scissors" && computermove == "rock"){return "computer";}
    if (playermove == "paper" && computermove == "rock"){return "player";}
    if (playermove == "paper" && computermove == "scissors"){return "computer";}
}


function bestof5 (game_count) {
    if (game_count != 5) {
        return 
    }
    if (player_score == 3) {
        //have a menu come down and say the player won. 
        //Ask them if they want to play again?
    }
    if (computer_score == 3) {
        //have a menu come down and say they lost. 
        //Ask them if they want to play again?
    }
}


//If rock and rock == tie 
//if rock and scissors == rock
//if rock and paper == paper
//if scissors and paper == scissors

function playGame (playermove) {
    // let playermove = getPlayerSelection();
    let computermove = getComputerChoice();
    console.log(playermove, computermove);
    let result = game(playermove, computermove);


    if (result == "player"){
        player_score++;
        output_player.textContent = player_score;
        status.textContent = "You won!"
    }
    else if (result == "computer"){
        computer_score++;
        output_computer.textContent = computer_score;
        status.textContent = "You Lost!"

    }
    else {status.textContent = "Tie!"}

    computer_move.textContent = computermove.toUpperCase()
    game_count++;
    
}



rock.addEventListener("click", () => {playGame("rock")});
paper.addEventListener('click', () => {playGame("paper")});
scissors.addEventListener('click', () => {playGame("scissors")});

