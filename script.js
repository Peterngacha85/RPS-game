const buttons = document.querySelectorAll('.emoji');
const yourEmoji = document.querySelector('.you');
const computerEmoji = document.querySelector('.computer');
const yourScore = document.querySelector('.your-score');
const computerScore = document.querySelector('.computer-score');
const winnerDiv = document.querySelector('.winner');
const whoWonSpan = document.querySelector('.who-won');
const newGameBtn = document.querySelector('.new-game-btn');

let playerScore = 0;
let computerScoreValue = 0;
let roundCount = 0;
let gameInProgress = true; // Flag to track if the game is still in progress

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Check if the game is still in progress (less than 10 rounds played)
        if (gameInProgress && roundCount < 10) {
            const playerChoice = button.textContent; // Get the emoji text from the button

            // Display the player's choice
            yourEmoji.textContent = playerChoice;

            // Simulate the computer's choice (you can replace this with your logic)
            const computerChoice = getComputerChoice();
            computerEmoji.textContent = computerChoice;

            // Implement a function to determine the round winner
            const roundResult = determineWinner(playerChoice, computerChoice);

            // Handle the game result (update scores, display round result, etc.)
            handleGameResult(roundResult);

            // Increment the round count
            roundCount++;

            // Check if the game has been played for 10 rounds
            if (roundCount === 10) {
                gameInProgress = false; // Game is over
                displayWinner();
            }
        }
    });
});

// Function to simulate computer's choice (replace with your logic)
function getComputerChoice() {
    const choices = ['🧱', '📄', '✂️'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner based on game rules
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie'; // It's a tie
    } else if (
        (playerChoice === '🧱' && computerChoice === '✂️') ||
        (playerChoice === '✂️' && computerChoice === '📄') ||
        (playerChoice === '📄' && computerChoice === '🧱')
    ) {
        return 'player'; // Player wins
    } else {
        return 'computer'; // Computer wins
    }
}

// Function to handle the game result (update scores, display round result, etc.)
function handleGameResult(roundResult) {
    if (roundResult === 'player') {
        playerScore++;
    } else if (roundResult === 'computer') {
        computerScoreValue++;
    }

    // Update and display scores
    yourScore.textContent = playerScore;
    computerScore.textContent = computerScoreValue;

    // Display round result (e.g., "You win!", "Computer wins!", "It's a tie!")
    displayRoundResult(roundResult);
}

// Function to display round result (you can customize this as needed)
function displayRoundResult(result) {
    // Implement your logic to display the result on the page (e.g., in a <div>)
}

// Function to display the winner after 10 rounds


function displayWinner() {
    winnerDiv.style.display = 'block';
    newGameBtn.style.display = "block"

    // Determine the overall winner based on scores
    if (playerScore > computerScoreValue) {
        whoWonSpan.textContent = 'YOU';
    } else if (computerScoreValue > playerScore) {
        whoWonSpan.textContent = 'COMPUTER';
    } else {
        whoWonSpan.textContent = '   TIE';
    }
}
