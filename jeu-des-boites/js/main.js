/********************************************************* DOM *******************************************************/

/*** BOARD & BOX & TIMERCONTAINER & STARTBUTTON & SCORE  ******/
const board = document.querySelector("#board") // Attribution de l'Id HTML dans board
const box = document.createElement("div") // Création de la div dans le document (en mémoire)
box.classList = "box" // Ajout de la classe box dans la div box (variable pointe vers la div)
// box.classList.add("not-clicked")  
const scoreBackground = document.querySelector(".score-background")
const score = document.createElement('p')
score.classList = "score"

let startButton = document.querySelector(".start-button")
startButton.addEventListener("click", gameStart)

const timerContainer = document.createElement("div")
timerContainer.classList = "timer-container"
document.querySelector('header').appendChild(timerContainer)