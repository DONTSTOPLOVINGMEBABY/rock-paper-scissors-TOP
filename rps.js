const button = document.getElementById("javascript_id");

//rock == 0
//paper == 0 
//scissors == 0 


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





function playGame () {
    let playermove = getPlayerSelection();
    let computermove = getComputerChoice();
    console.log(computermove)

}
button.addEventListener('click', playGame);