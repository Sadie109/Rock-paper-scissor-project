const userChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const gameGrid = document.getElementById("game");
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["rock", "paper", "scissors", "spock", "lizard"];
let userChoice;

const handleClick = (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
};

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoiceDisplay.innerHTML = randomChoice;
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.id = choices[i];
  button.innerHTML = choices[i];
  button.addEventListener("click", handleClick);
  gameGrid.appendChild(button);
}
