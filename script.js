// starting playerScore ,computerScore

const totalScore = { computerScore: 0, playerScore: 0 };

// Get computer choices

function getComputerChoice() {
  const rpschoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return rpschoice[randomNumber];
}

// Get result Compares Computer choice and Player choice

function getResult(playerChoice, computerChoice) {
  let score;
  // match draw means 0
  if (playerChoice == computerChoice) {
    score = 0;
  }

  // humans wins condition
  else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  }

  // otherwise human loss
  else {
    score = -1;
  }

  return score;
}

// show result in player

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const playerhandsDiv = document.getElementById("playerhands");
  const computerhandsDiv = document.getElementById("computerhands");
  const playerScoreDiv = document.getElementById("player-score");

  if (score == -1) {
    resultDiv.innerText = "You Lose!";
    resultDiv.style.color = "red";
    resultDiv.style.fontWeight = "500";
  } else if (score == 0) {
    resultDiv.innerText = "It's a Tie!";
    resultDiv.style.color = "white";
    resultDiv.style.fontWeight = "400";
  } else {
    resultDiv.innerText = "You Won!";
    resultDiv.style.color = "green";
    resultDiv.style.fontWeight = "700";
  }

  playerhandsDiv.innerText = `👱Player: ${playerChoice}`;
  computerhandsDiv.innerText = `🤖Computer: ${computerChoice}`;
  playerScoreDiv.innerText = `Your Score : ${totalScore["playerScore"]}`;
}

// Result computerChoice and playerChoice

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);

  totalScore["playerScore"] += score;
  showResult(score, playerChoice, computerChoice);
}

function endGame(totalScore) {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;

  const resultDiv = document.getElementById("result");
  const playerhandsDiv = document.getElementById("playerhands");
  const computerhandsDiv = document.getElementById("computerhands");
  const playerScoreDiv = document.getElementById("player-score");

  resultDiv.innerText = "";
  playerhandsDiv.innerText = "";
  computerhandsDiv.innerText = "";
  playerScoreDiv.innerText = "";
}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons[0].onclick = () => console.log(rpsButtons[0].value);

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });

  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalScore);
}

playGame();
