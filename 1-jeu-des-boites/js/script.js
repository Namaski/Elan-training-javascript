/********************************************************* START TIMER *******************************************************/

function startTimer() { // fonction pour start un timer


    milisecondes = timer % 100; //converti le timer en milisecondes


    if (milisecondes < 10) {
        milisecondes = "0" + milisecondes
    }


    if (milisecondes >= 99) {
        timer = 0 // reset les milisecondes à 0 lorsque 1000 est atteint
        secondes++
    }

    if (secondes < 10) {
        timerContainer.innerText = "0" + secondes + ":" + milisecondes
    } else {
        timerContainer.innerText = secondes + ":" + milisecondes
    }

    timer++
}

/********************************************************* RESET TIMER *******************************************************/

function resetTimer() {
    timer = 0
    secondes = 0
}

/********************************************************* SHUFFLE CHILDREN *******************************************************/

function shuffleChildren(parent) { // fonction pour mélanger les boites de manière aléatoire et unique


    let children = parent.children
    let i = children.length
    let k
    let temp


    while (i-- > 0) {

        k = Math.floor((Math.random() * i) + 1)

        temp = children[k]

        children[k] = children[i]

        parent.appendChild(temp) // marche car cela ne prend pas la valeur en tant que tel mais en tant que pointeur pour modifier l'ordre et donc prendre l'élément en retirant ce derniers

    }
}

/********************************************************* SHOW REACTION *******************************************************/

function showReaction(type, clickedBox) { //Fonction pour appliquer la classe souhaité à l'élément html puis l'enlever si la classe est différente de sucess
    clickedBox.classList.add(type) // ajout de la classe
    if (type !== "sucess") { // retrait de la classe après 800 secondes si différente de "sucess"
        setTimeout(function () {
            clickedBox.classList.remove(type)
        }, 800)
    }
}

/********************************************************* CLEAR BOARD *******************************************************/

function clearBoard() {

    const board = document.querySelector('#board')

    while (board.firstChild) {
        board.removeChild(board.firstChild)
    }
}

/********************************************************* GAME START *******************************************************/

function gameStart() {
    nb = 1
    clearInterval(refreshIntervalId)
    resetTimer()
    clearBoard()

    setTimeout(function () { // au bout de 0.3s le timer démarre
        refreshIntervalId = setInterval(startTimer, 10)
    }, 300);


    for (let i = 1; i <= boxNumber; i++) {

        const newBox = box.cloneNode() //fonction .cloneNode() pour cloner la div (avec propriétés) et la placer dans newBox
        newBox.innerText = i
        board.appendChild(newBox) //ajoute newBox dans une balise ('div') enfant à board

        newBox.addEventListener('click', function () { // le script se lance uniquement lorsque l'événement (ici "click") est réalisé. lors du premier chargement tout est ignoré

            if (i == nb) { // si le joueur à cliqué sur la bonne boite
                // newBox.classList.remove("not-clicked")
                newBox.classList.add('box-clicked') // ajout de la classe box-clicked à newBox
                shuffleChildren(board) //mélange les boites

                //1
                if (nb == board.children.length) { // vérifie que le joueur à eu toutes les boites
                    
                    board.querySelectorAll('.box').forEach(function (el) {
                        showReaction("sucess", el)
                        clearInterval(refreshIntervalId) //stop le timer
                    })

                    const newScore = score.cloneNode()
                    let newTime = timer

                    if (newTime < bestTime) {
                        bestTime = newTime // mettre à jour le meilleur temps avec le nouveau temps
                    }

                    newScore.innerText = secondes + ":" + milisecondes

                    // Récupérer tous les scores actuels
                    const currentScores = Array.from(scoreBackground.children);
                    
                    // Ajouter le nouveau score à la liste
                    currentScores.push(newScore);

                    // Trier les scores par temps décroissant
                    currentScores.sort(function(a, b) {
                        const timeA = a.innerText.split(":").map(Number);
                        const timeB = b.innerText.split(":").map(Number);
                        if (timeA[0] !== timeB[0]) {
                            return timeA[0] - timeB[0];
                        } else {
                            return timeA[1] - timeB[1];
                        }
                    });

                    // Effacer les scores existants
                    scoreBackground.innerHTML = '';

                    // Ajouter les scores triés au DOM
                    currentScores.forEach(function(scoreNode) {
                        scoreBackground.appendChild(scoreNode);
                    });
                }
                nb++
                //2 
            } else if (i > nb) { // si il a cliqué sur une boite plus grande
                showReaction("error", newBox) // ajout de la classe error à newBox pendant 0.8s

                //3 si il a cliqué sur une boite déjà cliqué
            } else {
                showReaction("notice", newBox) //Ajout de la classe notice à newBox pendant 0.8s
            }
        })
    }
}