// Get player Name
let playerName = prompt("What is your name Player?");

// Assign a name if player does not input any or cancel the prompt
if (playerName === null || playerName === undefined || playerName === "") {
    playerName = "Sponge Bob";
    alert(`${playerName}, Welcome to Rock, Paper and Scissor game! Click "Ok" to continue...`);
} else {
    alert(`${playerName}, Welcome to Rock, Paper and Scissor game! Click "Ok" to continue...`);
}

// Stores the score for the game
let playerScore = 0;
let computerScore = 0;

// Starts the game
game();

// Randomly picks choice for computer player
function getComputerChoice() {
    let choice = ["rock", "paper", "scissor"];
    let randomNumber = Math.floor(Math.random() * choice.length);
    return choice[randomNumber];
}

// Compares player's choice and computer's choice... returns result
function playRound(playerSelection, computerSelection) {
    // Converts players input(choice) to lower case
    playerSelection = playerSelection.toLowerCase();
 
    if (playerSelection === computerSelection) {
	return "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
	return "player rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
	return "player paper";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
	return "player scissor";
    } else if (computerSelection === "rock" && playerSelection === "scissor") {
	return "computer rock";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
	return "computer paper";
    } else if (computerSelection === "scissor" && playerSelection === "paper") {
	return "computer scissor";
    } else {
	return;
    }
}

// Randomly picks a cancel message when player cancels the game
function cancelMessage() {
    let message = ["You cancelled the game, reload page to start again", "You don't like the game? if you do reload page to start again", "Why did you leave? you can reload page to start again", "It's a fun game if you try, you can still play if you reload the page", "Sad to see you not play, reload page to have fun", "Even if you don't know how to play you might be lucky", "This is easy, you can do it. Reload page to start again", "I'm speechless, I can talk again if you reload the page"];
    let randomDigit = Math.floor(Math.random() * message.length);
    return message[randomDigit];
}

function game() {
	
for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissor");
    const computerSelection = getComputerChoice();
    checkInput();

    // Checks if input is null or undefined
    function checkInput() {
	if (playerSelection === null || playerSelection === undefined) {
	    console.log(cancelMessage());
	    i = 5;
	} else {
	    playRound(playerSelection, computerSelection);
	    if (playRound(playerSelection, computerSelection) === undefined) {
		console.log("Invalid choice, please choose between Rock, Paper or Scissor");
		i -= 1;
	    } else {
		displayResult();
	    }
	}
    }
    
    // Displays game result on console
    function displayResult() {
	const result = playRound(playerSelection, computerSelection);
	
	switch (result) {
	    case "tie":
		console.log(`Round ${i}: \n${playerName} ${playerScore}:${computerScore} Computer \nIt's a tie!`);
		break;
	    case "player rock":
		console.log(`Round ${i}: \n${playerName} ${playerScore += 1}:${computerScore} Computer \nRock blunts Scissor!`);
		break;
	    case "player paper":
		console.log(`Round ${i}: \n${playerName} ${playerScore += 1}:${computerScore} Computer \nPaper covers Rock!`);
		break;
	    case "player scissor":
		console.log(`Round ${i}: \n${playerName} ${playerScore += 1}:${computerScore} Computer \nScissor shreds Paper!`);
		break;
	    case "computer rock":
		console.log(`Round ${i}: \n${playerName} ${playerScore}:${computerScore += 1} Computer \nRock blunts Scissor!`);
		break;
	    case "computer paper":
		console.log(`Round ${i}: \n${playerName} ${playerScore}:${computerScore += 1} Computer \nPaper covers Rock!`);
		break;
	    case "computer scissor":
		console.log(`Round ${i}: \n${playerName} ${playerScore}:${computerScore += 1} Computer \nScissor shreds Paper!`);
		break;
	}

	if (i === 5) {
	    if (playerScore === computerScore) {
		console.log(`It's a Draw! ${playerName} and Computer has equal points. Unfortunately...`);
	    } else if (playerScore > computerScore) {
		console.log(`${playerName} wins the game with ${playerScore} points. Hurray!!!`);
	    } else {
		console.log(`Computer wins the game with ${computerScore} points. Hurray!!!`);
	    }
	}
    }
}
}
