const choices =  {
  rock : "assets/images/rock-pc-icon.png" ,
  paper : "assets/images/paper-pc-icon.png",
  scissors: "assets/images/scissors-pc-icon.png"
}

rockBtn.addEventListener("click", getPlayer);
paperBtn.addEventListener("click", getPlayer);
scissorsBtn.addEventListener("click", getPlayer);
const resultSection = document.querySelector(".result-section");


let playerScore = 0;


function getComputer() {
  // const playerChoice = this.firstChild.alt; // 'rock', 'paper', 'scissors'
  // console.log(playerChoice);
  const choiceKeys = Object.keys(choices);
  const randomIndex = Math.floor(Math.random() * choiceKeys.length);
  return choiceKeys[randomIndex];
}
const images = document.querySelectorAll("img")
function getPlayer() {
  const move = this.firstChild.src;  
const playerChoice = getPlayerChoice(move);  

paperBtn.innerHTML = `<img src=${move}>`;

const computerMove = getComputer();
const playerMove = choices[computerMove];

scissorsBtn.innerHTML = `<img src=${playerMove}>`;

const bg = document.querySelector(".game-section");
bg.style.background = "inherit";
rockBtn.style.display = "none";

resultSection.style.display = "block";

if (playerChoice === computerMove) {
  winnerName.innerHTML = 'DRAW';
  playerText.style.display = 'block';
  computerText.style.display = 'block';
} else if (playerChoice === 'rock' && computerMove === 'scissors') {
  winnerName.innerText = 'YOU WIN';
  playerText.style.display = 'block';
   computerText.style.display = 'block';
  playerScore++;
  point()
} else if (playerChoice === 'scissors' && computerMove === 'paper') {
  winnerName.innerText = 'YOU WIN';
  playerText.style.display = 'block';
  computerText.style.display = 'block';
  playerScore++;
  point()
} else if (playerChoice === 'paper' && computerMove === 'rock') {
  winnerName.innerText = 'YOU WIN';
  playerText.style.display = 'block';
  computerText.style.display = 'block';
  playerScore++;
  point()
} else {
  winnerName.innerText = 'YOU LOSE';
  playerText.style.display = 'block';
  computerText.style.display = 'block';
  return;
}

function getPlayerChoice(src) {
  if (src.includes('rock')) {
    return 'rock';
  } else if (src.includes('paper')) {
    return 'paper';
  } else if (src.includes('scissors')) {
    return 'scissors';
  }
  return;
}


}
restartBtn.addEventListener("click", returnGame);
function returnGame() {
    rockBtn.style.display = "inline-block";
    paperBtn.style.display = "inline-block";
    scissorsBtn.style.display = "inline-block";
    
    rockBtn.innerHTML = `<img src="${choices.rock}" alt="rock">`;
    paperBtn.innerHTML = `<img src="${choices.paper}" alt="paper">`;
    scissorsBtn.innerHTML = `<img src="${choices.scissors}" alt="scissors">`;
  
    const bg = document.querySelector(".game-section");
    bg.style.background = "";  
    resultSection.style.display = "none";  
     playerScore = 0;
    scoreArea.innerHTML = "0";
    playerText.style.display = 'none'
    computerText.style.display = 'none';
    
  }
  
function point() {
  scoreArea.innerHTML = playerScore;
}

  rulesBtn.addEventListener("click", rules);

 function rules() {
   document.querySelector('.modal').style.display = 'block';
    
 }
 let modal = myModal
 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//  modal
// restartBtn.addEventListener("click");
// rulesBtn.addEventListener("click");