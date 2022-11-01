const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function rock_function () {
    console.log("rock");
}

function paper_function () {
    console.log("paper");
}

function scissors_function () {
    console.log("scissors");
}


rock.addEventListener('click', rock_function);
paper.addEventListener('click', paper_function);
scissors.addEventListener('click', scissors_function);

