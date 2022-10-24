const button = document.getElementById("javascript_id");

//rock == 0
//paper == 0 
//scissorss == 0 


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
    console.log(playermove, computermove);
    let result = game(playermove, computermove);

}
button.addEventListener('click', playGame);