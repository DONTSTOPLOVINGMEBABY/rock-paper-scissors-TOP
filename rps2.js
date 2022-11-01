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







rock.addEventListener('click', rock_function);
paper.addEventListener('click', paper_function);
scissors.addEventListener('click', scissors_function);

