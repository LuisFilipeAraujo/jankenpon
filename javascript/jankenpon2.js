const userChoiceDisplay = document.createElement('h2')
const computerChoiceDisplay = document.createElement('h2')
const resultDisplay = document.createElement('h2')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
let userChoice
let computerChoice

const handleClick = (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
  generateComputerChoice()
  getResult()
}

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  computerChoice = randomChoice
  computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button')
  button.id = choices[i] // you can delete this id you want to use e.target.HTML in the handleClick
  button.innerHTML = choices[i]
  button.addEventListener('click', handleClick)
  gameGrid.appendChild(button)
}

const getResult = () => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'scissorslizard':
    case 'rockscissors':
    case 'rocklizard':
    case 'paperrock':
    case 'paperspock':
    case 'lizardspock':
    case 'lizardpaper':
    case 'spockscissors':
    case 'spockrock':
      resultDisplay.innerHTML = "YOU WIN!"
      break

    case 'paperscissors':
    case 'paperlizard':
    case 'scissorsrock':
    case 'scissorsspock':
    case 'rockpaper':
    case 'rockspock':
    case 'lizardscissors':
    case 'lizardrock':
    case 'spocklizard':
    case 'spockpaper':
      resultDisplay.innerHTML = "YOU LOSE!"
      break

    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
    case 'lizardlizard':
    case 'spockspock':
    resultDisplay.innerHTML = "ITS A DRAW!"
    break
  }
}

var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 
