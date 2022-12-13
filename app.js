

















































// const userChoiceDisplay = document.createElement("h1");
// const computerChoiceDisplay = document.createElement("h1");
// const resultDisplay = document.createElement("h1");
// const gameGrid = document.getElementById("game");
// gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

// const choices = ["rock", "paper", "scissors", "spock", "lizard"];
// let userChoice;
// let computerChoice;

// const handleClick = (e) => {
//   userChoice = e.target.id;
//   userChoiceDisplay.innerHTML = "User choice: " + userChoice;
//   generateComputerChoice();
//   getResult();
// };

// const generateComputerChoice = () => {
//   const randomChoice = choices[Math.floor(Math.random() * choices.length)];
//   computerChoice = randomChoice;
//   computerChoiceDisplay.innerHTML = "Computer choice: " + randomChoice;
// };

// for (let i = 0; i < choices.length; i++) {
//   const button = document.createElement("button");
//   button.id = choices[i];
//   button.innerHTML = choices[i];
//   button.addEventListener("click", handleClick);
//   gameGrid.appendChild(button);
// }

// const getResult = () => {
//   switch (userChoice + computerChoice) {
//     case "scissorspaper":
//     case "paperrock":
//     case "rockscissors":
//       resultDisplay.innerHTML = "YOU WIN!";
//       break;
//     case "paperscissors":
//     case "rockpaper":
//     case "scissorsrock":
//       resultDisplay.innerHTML = "YOU LOSE!";
//       break;
//     case "scissorsscissors":
//     case "paperpaper":
//     case "rockrock":
//       resultDisplay.innerHTML = "ITS A DRAW!";
//       break;
//   }
// };
