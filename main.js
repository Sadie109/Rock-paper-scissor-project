//Task 3 
// use prompt to create input 
// use alert to display result
// check page to get correct result

// Task 4
// find function for random generator
// use function to generate computer answer
// find line to best put in function

// JS read the code top to bottom


let computerMove; 
let playerMove;
 

 // creating random computer move
// line 56 links line 57 & 56 together
// line 59 is random function
// line 58 is the array 
function randomMove() {
    let moves = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 2); 
    computerMove = moves[random];
 }

function game(playerMove, computerMove) {
//    cascading waterfall effect options moving down one after the other.
    if (playerMove === computerMove){ 
        return 0;
    } else {
    if (playerMove === "rock" && computerMove === "paper") { 
        return -1;
    } else {
        if (playerMove === "scissors" && computerMove === "rock") { 
            return -1;
        } else {
            if (playerMove === "paper" && computerMove === "scissors") { 
                return -1;
            } else {
                return 1;
            }
        }
    }
} 
}

playerMove = prompt ("Rock, Paper or Scissors?")
// calling the function randomMove();
// essentially pressing an on button to run the function code
randomMove();

let result = game(playerMove,computerMove); 
alert(result);

console.log (playerMove, computerMove);
