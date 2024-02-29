
/********************************************************* START TIMER *******************************************************/

function startTimer() { // fonction pour start un timer


    let milisecondes = timer //converti le timer en milisecondes


    if (milisecondes < 10) {
        milisecondes = "0" + timer
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

        k = Math.floor((Math.random() * i)+1)

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


/********************************************************* SHUFFLE CHILDREN *******************************************************/

// function shuffleNotClicked(parent) { // fonction pour mélanger les boites de manière aléatoire et unique

//     let children = parent.querySelectorAll('.not-clicked'); // Sélectionne les boîtes qui n'ont pas été cliquées
//     let i = children.length;
//     let k;
//     let temp;

//     while (i-- > 0) {
//         k = Math.floor(Math.random() * i);

//         temp = children[k];

//         temp.style.animation = 'appear 0.5s'

//         children[k] = children[i]

//         parent.appendChild(temp); // marche car cela ne prend pas la valeur en tant que tel mais en tant que pointeur pour modifier l'ordre et donc prendre l'élément en retirant ce derniers




//     }
//     console.log(board.querySelectorAll('.not-clicked'))
// }


/********************************************************* GAME START *******************************************************/

function gameStart() {

    let refreshIntervalId = setInterval(startTimer, 10)

    for (let i = 1; i <= boxNumber; i++) {

        const newBox = box.cloneNode() //fonction .cloneNode() pour cloner la div (avec propriétés) et la placer dans newBox
        newBox.innerText = i
        board.appendChild(newBox) //ajoute newBox dans une balise ('div') enfant à board

        newBox.addEventListener('click', function () { // le script se lance uniquement lorsque l'événement (ici "click") est réalisé. lors du premier chargement tout est ignoré

            if (i == nb) { // si le joueur à cliqué sur la bonne boite
                // newBox.classList.remove("not-clicked")
                newBox.classList.add('box-clicked') // ajout de la classe box-clicked à newBox

                shuffleChildren(board)

                //1
                if (nb == board.children.length) { // vérifie que le joueur à eu toutes les boites
                    board.querySelectorAll('.box').forEach(function (el) {
                        showReaction("sucess", el)
                        clearInterval(refreshIntervalId) //stop le timer
                    })  // ajout de la classe newBox
                }
                nb++
            }
            //2
            else if (i > nb) { // si il a cliqué sur une boite plus grande
                showReaction("error", newBox) // ajout de la classe error à newBox pendant 0.8s
                nb = 1
                board.querySelectorAll(".box-clicked").forEach(function (el) { //enleve la classe box-clicked

                    el.classList.remove("box-clicked")
                    clearInterval(refreshIntervalId) // Stop le timer
                    
                    setTimeout(function () {
                        resetTimer()
                        refreshIntervalId = setInterval(startTimer, 10) 
                        shuffleChildren(board)
                    }, 800);
                })

                //3 si il a cliqué sur une boite déjà cliqué
            } else {
                showReaction("notice", newBox) //Ajout de la classe notice à newBox pendant 0.8s
            }


        })


    }
}


/********************************************************* DOM *******************************************************/

/*** BOARD & BOX & TIMERCONTAINER & STARTBUTTON  ******/
const board = document.querySelector("#board") // Attribution de l'Id HTML dans board
const box = document.createElement("div") // Création de la div dans le document (en mémoire)
box.classList = "box" // Ajout de la classe box dans la div box (variable pointe vers la div)
// box.classList.add("not-clicked")

const startButton = document.querySelector("start-button")
const timerContainer = document.createElement("div")
timerContainer.classList = "timer-container"
document.querySelector('header').appendChild(timerContainer)


/********************************************************* VARIABLES *******************************************************/


let timer = 0 // initialisation du timer pour utilisé dans la fonction startTimer
let secondes = 0 // initialisation des secondes
let nb = 1 // initialisation du score (ici c'est la boite voulue) pour controler l'état du jeu
let boxNumber = 10 /* prompt("nombre de boites ? : ") */




shuffleChildren(board)