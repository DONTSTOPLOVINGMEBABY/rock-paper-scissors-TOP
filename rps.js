const button = document.getElementById("javascript_id");
const output_player = document.getElementById("update-player");
const output_computer = document.getElementById("update-computer");
const computer_move = document.getElementById("computers-move")
const status = document.getElementById("status")
//const status = document.getElementById("status");
let player_score = 0;
let computer_score = 0;


function getComputerChoice() {
    let move = Math.floor((Math.random() * 3)) ; 

    if (move == 0) {return "rock";}
    else if (move == 1) {return "paper";}
    else {return "scissors";}
}

function getPlayerSelection(){
    let userInput = document.getElementsByName("move")
    let string ;
    for (let i = 0, length = userInput.length; i < length; i++){
        if (userInput[i].checked) {
            string = userInput[i].id
        }
    }
    return string;
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


//If rock and rock == tie 
//if rock and scissors == rock
//if rock and paper == paper
//if scissors and paper == scissors


function playGame () {
    let playermove = getPlayerSelection();
    let computermove = getComputerChoice();
    let result = game(playermove, computermove);


    if (result == "player"){
        player_score++;
        output_player.innerHTML = player_score;
        status.innerHTML = "You won!"
    }
    else if (result == "computer"){
        computer_score++;
        output_computer.innerHTML = computer_score;
        status.innerHTML = "You Lost!"

    }
    else {status.innerHTML = "Tie!"}

    computer_move.innerHTML = computermove.toUpperCase()

}
button.addEventListener('click', playGame);