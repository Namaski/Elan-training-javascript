const timerContainer = document.createElement("div")
timerContainer.classList = "timer-container"
document.body.insertBefore(timerContainer, board)


let timer = 0 // initialisation du timer pour utilisé dans la fonction startTimer
let secondes = 0 // initialisation des secondes
let chiffreSecondes = 0

function startTimer() { // fonction pour start un timer
    

    let milisecondes = timer //converti le timer en milisecondes
    
    
    if(milisecondes < 10) {
        milisecondes = "0" + timer
    }

    
    if (milisecondes >= 99) {
        timer = 0 // reset les milisecondes à 0 lorsque 1000 est atteint
        secondes++
    }
    
    if(secondes < 10) {
        timerContainer.innerText = "0"+ secondes + ":" + milisecondes
    } else {
        timerContainer.innerText = secondes + ":" + milisecondes
    }

    timer++
}

function stopTimer() {
    

}

