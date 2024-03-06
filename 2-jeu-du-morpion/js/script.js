

let units = document.querySelector(".unit0").innerText // unité

const playerTurns = document.querySelectorAll(".player1-turn, .player2-turn"); //indicateur de tour
playerTurns[0].style.display = "none"; //joueur 1 en attente
playerTurns[1].style.display = "none"; //joueur 2 en attente

let winLine = document.querySelector('.win-line') // ligne de victoire
winLine.style.display = "none"

const gameBoard = document.querySelector(".field");

board =
    [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];


/*********************************************************onClickBoard ******************************************/

function onClickBoard(row, col) {




    if (board[row][col] === "") { //vérifie que la cellule est bien vide
        board[row][col] = units; // place l'unité dans la cellule


        displayBoard();

        if (checkWin(units)) { //Vérifie la victoire

            winScreen(); // Ecran de victoire

            return;
        }

        if (checkDraw()) { //Vérifie le match nul

            drawScreen(); //Ecran de match nul

            return;
        }

        if (units === document.querySelector(".unit0").innerText) {

            units = document.querySelector(".unit1").innerText
            playerTurns[1].style.display = "inline-block" //Indicateur 2 apparait
            playerTurns[0].style.display = "none" // indicateur 1 disparrait

        } else {


            units = document.querySelector(".unit0").innerText
            playerTurns[0].style.display = "inline-block" // indicateur 1 apparait
            playerTurns[1].style.display = "none" //Indicateur 2 disparait
        }

    }

}




/*********************************************************CHECK WIN ******************************************/

function checkWin(units) {


    for (let row = 0; row < 3; row++) {
        if (board[row][0] === units && board[row][1] === units && board[row][2] === units) {

            // Affiche la ligne sur les rangées

            if (row === 0) { //row up
                winLine.style.top = "15%"
            }

            if (row === 1) { //row mid
                winLine.style.top = "50%"
            }

            if (row === 2) { // row down
                winLine.style.top = "80%"
            }


            return true;
        }
    }
    for (let col = 0; col < 3; col++) {
        if (board[0][col] === units && board[1][col] === units && board[2][col] === units) { // changer units pour qu'il alterne  

            if (col === 0) { //col left
                winLine.style.transform = "translate(-74%) rotate(90deg)"
            }

            if (col === 1) { //col mid
                winLine.style.transform = "translate(-50%) rotate(90deg)"
            }

            if (col === 2) { // col right
                winLine.style.transform = "translate(-27%) rotate(90deg)"
            }

            return true;
        }
    }

    if (board[0][0] === units && board[1][1] === units && board[2][2] === units) {

        winLine.style.transform = "translate(-50%, -50%) rotate(45deg)" // ligne victoire digonale gauche
        return true;
    }

    if (board[0][2] === units && board[1][1] === units && board[2][0] === units) {

        winLine.style.transform = "translate(-50%, -50%) rotate(-45deg)" // ligne victoire diagonale droite
        return true;
    }

    return false;
}

/*********************************************************CHECK DRAW ******************************************/

function checkDraw() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === "") {
                return false;
            }
        }
    }

    return true;
}




/*********************************************************DISPLAY BOARD ******************************************/

function displayBoard() {

    gameBoard.innerText = "";
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {

            const cell = document.createElement('div');

            cell.classList = "box"

            cell.innerText = board[row][col];

            cell.addEventListener("click", function () {
                onClickBoard(row, col)
            })

            gameBoard.appendChild(cell)
        }
    }
}

/********************************************************** CLEAR BOARD ****************************************************/

function clearBoard() {

    board =
        [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];



    units = document.querySelector(".unit0").innerText;

    playerTurns[0].style.display = "inline-block" // indicateur 1 apparait
    playerTurns[1].style.display = "none" //Indicateur 2 disparait
    winLine.style.transform = "translate(-50%) rotate(180deg)";
    winLine.style.top = "50%"
    displayBoard()
}

/********************************************************** WIN SCREEN ****************************************************/

function winScreen() {

    winLine.style.display = "block"

    setTimeout(() => {
        winLine.style.display = "none"
        clearBoard()
    }, 1800);

}

/********************************************************** SELECT CHARACTER ****************************************************/

function selectCharacter() {
    const selectedUnits = document.querySelectorAll(".unit-selected"); // Sélection des éléments représentant les personnages déjà sélectionnés

    Array.from(selectedUnits).forEach(unit => { // Masquer tous les personnages sélectionnés au départ
        unit.style.display = "none";
    });

    const selectedCharacters = []; // Tableau pour stocker les personnages déjà sélectionnés par ce joueur

    for (let j = 0; j < 2; j++) { // Boucle pour chaque joueur

        const characterOptions = document.querySelectorAll(".character-selection" + j + " .unit-option"); // Sélection de tous les éléments représentant les personnages pour ce joueur
        const iconOptions = document.querySelectorAll(".character-selection" + j + " .unit-icon");
        const nameOptions = document.querySelectorAll(".character-selection" + j + " .unit-option p");

        for (let i = 0; i < 6; i++) { // Boucle pour chaque option de personnage
            characterOptions[i].addEventListener("click", function () { // Ajout d'un écouteur d'événements sur chaque option de personnage
                const selectedCharacter = characterOptions[i].innerText; // Récupération du personnage sélectionné
                const selectedIcon = iconOptions[i].innerText;
                const selectedName = nameOptions[i].innerText;

                console.log(nameOptions[i])

                if (selectedCharacters.includes(selectedCharacter)) { // Vérification si le personnage est déjà sélectionné

                    showReaction("error", characterOptions[i]); // Si oui, afficher une réaction d'erreur et arrêter la sélection

                    return;

                }

                selectedCharacters.push(selectedCharacter); // Ajouter le personnage sélectionné à la liste des personnages déjà sélectionnés par ce joueur          document.querySelector('.unit' + j + "-name").innerText = selectedName;
                document.querySelector('.unit' + j).innerText = selectedIcon; // Ajoute le bonhomme à la div .unit
                document.querySelector('.unit' + j + "-name").innerText = selectedName;
                document.querySelector(".character-selection" + j).style.display = "none"; // Masquer la sélection de personnage
                selectedUnits[j].style.display = "flex"; // Afficher le personnage sélectionné dans l'interface




                if (selectedUnits[0].style.display === "flex" && selectedUnits[1].style.display === "flex") { // Vérifier si tous les joueurs ont sélectionné leur personnage
                    clearBoard(); // Si oui, mettre à jour le plateau de jeu
                    displayBoard();
                }
            });
        }
    }
}

/* 

    0 : enlever les éléments player-name et units
    1 : afficher une liste d'units associés à un nom prédéfini
        : -> créer les éléments
        : -> la faire apparaitre
    2 : addeventlistener click -> inner text -> unit
    3 : faire apparaitre l'écran unit
    4 : répéter l'opération pour l'autre joueur

*/

/********************************************************** SHOW REACTION  ****************************************************/

function showReaction(type, el) {

    el.id = (type)
    setTimeout(() => {
        el.id = ""
    }, 800);
}

/********************************************************** START GAME  ****************************************************/

function startGame() {

    for (let i = 0; i < 2; i++) {

        document.querySelector(".character-selection" + i).style.display = "flex";
        document.querySelector('.unit' + i).innerText = "";
        document.querySelector('.unit' + i + "-name").innerText = "";
    }

    for (let row = 0; row < 3; row++) { // while(){} préférable au ca où le joueur clique plusieurs fois sur start mais pas génant ici
        for (let col = 0; col < 3; col++) {

            const cell = document.querySelector('.field div');

            gameBoard.removeChild(cell)

        }
    }

    playerTurns[0].style.display = "none"; //joueur 1 en attente
    playerTurns[1].style.display = "none"; //joueur 2 en attente

    selectCharacter()
}



selectCharacter()





