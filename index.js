// player chooses between rock, paper or scissors
let playerSelection = prompt("Rock, Paper or Scissor?");
// computer player randomly makes a choice between rock, paper or scissors
let computerSelection = getComputerChoice();

function getComputerChoice() {
    let choice = ["rock", "paper", "scissor"];
    let randomNumber = Math.floor(Math.random() * choice.length);
    return choice[randomNumber];
}
console.log("computer", computerSelection);
// compare result between player and computer
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
	console.log("it's a tie");
    } else if (playerSelection === "rock" && computerSelection !== "paper") {
	console.log("Rock blunts Scissor!");
    } else if (playerSelection === "paper" && computerSelection !== "scissor") {
	console.log("Paper covers rock!");
    } else if (playerSelection === "scissor" && computerSelection !== "rock") {
	console.log("Scissor cuts Paper!");
    } else {
	console.log("awaiting results...");
    }
}
playRound(playerSelection, computerSelection);
