let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game Was Draw. Play again.";
  msg.style.backgroundColor = "rgb(26, 215, 196)";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (choice) => {
  const selected = choice.getAttribute("id"); // Player's choice

  const compChoice = genCompChoice();

  const filteredDivs = Array.from(choices).filter(
    (div) => div.getAttribute("id") === compChoice
  );

  filteredDivs.forEach((div) => {
    div.style.backgroundColor = "rgb(26, 215, 196)";
  });

  choice.style.backgroundColor = "red";

  if (selected === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (selected === "rock") {
      //scissor, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (selected === "paper") {
      //rock, scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, selected, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playGame(choice);
  });
});
