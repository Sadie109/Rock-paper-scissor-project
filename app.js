let userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const spock_div = document.getElementById("Spock");
const lizard_div = document.getElementById("Lizard");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor", "Spock", "Lizard"];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = userChoice + " beats " + computerChoice + ". You Win!";
}

function lose() {}

function draw() {
  console.log("draw!");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "PaperRock":
    case "ScissorPaper":
    case "RockScissor":
    case "SpockScissor":
    case "LizardSpock":
    case "RockLizard":
    case "LizardPaper":
    case "SpockRock":
    case "ScissorLizard":
    case "PaperSpock":
      win(userChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissor":
    case "ScissorRock":
    case "ScissorSpock":
    case "SpockLizard":
    case "LizardRock":
    case "PaperLizard":
    case "RockSpock":
    case "LizardScissor":
    case "SpockPaper":
      lose(userChoice, computerChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorScissor":
    case "SpockSpock":
    case "LizardLizard":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("Rock");
  });

  paper_div.addEventListener("click", function () {
    game("Paper");
  });

  scissors_div.addEventListener("click", function () {
    game("Scissors");
  });

  spock_div.addEventListener("click", function () {
    game("Spock");
  });

  lizard_div.addEventListener("click", function () {
    game("Lizard");
  });
}

main();
