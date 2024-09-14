
// initializing the values 
const rpsBtn = document.querySelectorAll('.rpsButton')
const gameObj=['rock','paper','scissors']
const result = document.getElementById('result')
const player = document.getElementById('playerScoreElement')
const computer= document.getElementById('computerScoreElement')
const playerDisplay = document.getElementById('playerDisplay')
const computerDisplay = document.getElementById('computerDisplay')
const gameScore={playerScore :0,computerScore:0}
const imageUrl ={rock :'./images/stone.jpg',paper :'./images/paper.jpg',scissors :'./images/SCISSORS.jpg'}
const winDisplay = document.getElementById('win-display')

// collect computer choice
function getComputerChoice(){
    const choice = gameObj[Math.floor(Math.random()*gameObj.length)]
  
  return choice;
}

// compare both choice and get result
function getResult(playerChoice,computerChoice){
  let score;
  if(playerChoice == computerChoice){
    score = 0
  }else if(playerChoice == 'rock' && computerChoice == 'scissors'){
    score = 1
  }else if(playerChoice == 'paper' && computerChoice == 'rock'){
    score = 1
  }else if(playerChoice =='scissors' && computerChoice == 'paper'){
    score = 1
  }else{
    score = -1
  }
  return score; 
}
// show the result as DOM              // here we want to over write
// function showResult(score,playerChoice,computerChoice){
  //   result.innerText =`playerChoice :${playerChoice}    computerChoice :${computerChoice}  Score = ${score}`
  // const finalScore = scoreCount()
//   console.log({finalScore})
// } 

// show result 
function displayChoice(playerChoice,computerChoice){
  playerDisplay.src = imageUrl[playerChoice]
   computerDisplay.src = imageUrl[computerChoice]   
}

function scoreCount(score){
  // const updateValue = updateScore.value;


  if(score === 1 && gameScore['playerScore'] <= 10 ){
    gameScore['playerScore']++
    player.innerText = gameScore['playerScore']
    winDisplay.innerText = "Win"
    console.log('player',gameScore)
  }else if(score == -1 && computer.innerText <= 10){
    gameScore['computerScore']++
    computer.innerText = gameScore['computerScore']
    winDisplay.innerText = 'Fail'
  }else{
    winDisplay.innerText = 'Draw'
  }
  setTimeout(showResult,100)
  // return gameScore;
}
const showResult = () =>{
  if(player.innerText == 10){
    winDisplay.innerText = 'You Won'
    for(const btn of rpsBtn){
      btn.disabled = true;
    }

    alert('player won')
    rpsBtn.disabled = true;
  }else if(computer.innerText == 10){
    winDisplay.innerText = 'You Fail'
    alert('You Fail') 
    for(const btn of rpsBtn){
      btn.disabled = true;
    }   
  }
}

// here we want to overwrite
function onClickRps(playerChoice){                     
  console.log({playerChoice})
  const computerChoice = getComputerChoice()
  console.log({computerChoice})
  const score = getResult(playerChoice ,computerChoice)
  displayChoice(playerChoice,computerChoice)
  console.log(playerChoice,computerChoice)
  scoreCount(score);
  
}


// To collect all data from both side and find result
// this function active while onclick
function playGame(){
  rpsBtn.forEach(rpsBtn => rpsBtn.onclick=()=>onClickRps(rpsBtn.value))
}
function clearAll(){
  gameScore['playerScore'] =''  
  gameScore['computerScore']=''
  player.innerText = ''
  computer.innerText =''
  winDisplay.innerText = ''
  playerDisplay.src = './images/stone-transformed.jpeg'
  computerDisplay.src = './images/stone-transformed.jpeg'
  for(const btn of rpsBtn){
    btn.disabled = false;
  }
  
}
  playGame()
