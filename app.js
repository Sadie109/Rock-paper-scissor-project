const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const spock_div = document.getElementById("spock");
const lizard_div = document.getElementById("lizard");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}



function game(userChoice) {
const computerChoice = getComputerChoice();
console.log("userChoice =>" + userChoice );
console.log("computerChoice =>" + computerChoice);
}


function main() {

rock_div.addEventListener('click', function() {
   game("rock");
})

paper_div.addEventListener('click', function() {
    game("paper");
})

scissors_div.addEventListener('click', function() {
    game("scissors");
})

spock_div.addEventListener('click', function() {
    game("spock");
})

lizard_div.addEventListener('click', function() {
    game("lizard");
})
}

main();