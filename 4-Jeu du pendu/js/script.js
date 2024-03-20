let wordToGuess = "";
let guessedWord = "";
let maxWrongAttempts = 6;
let wrongAttempts = 0;

// Sélection des éléments HTML
const wordContainer = document.getElementById('word-container');
const guessInput = document.getElementById('guess-input');
const messageContainer = document.getElementById('message-container');

// Fonction pour initialiser le jeu
function initializeGame() {
    fetch("https://trouve-mot.fr/api/random/1")
        .then(response => response.json())
        .then(data => {
            wordToGuess = data[0].name.toLowerCase();
            guessedWord = "_".repeat(wordToGuess.length);
            displayWord();
        })
        .catch(error => console.log("Une erreur s'est produite :", error));
}

// Fonction pour afficher l'état actuel du mot à deviner
function displayWord() {
    wordContainer.textContent = guessedWord;
}

// Fonction pour vérifier si la lettre est dans le mot et mettre à jour l'affichage
function checkLetter(letter) {
    let found = false;
    let newGuessedWord = "";
    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === letter) {
            newGuessedWord += letter;
            found = true;
        } else {
            newGuessedWord += guessedWord[i];
        }
    }
    guessedWord = newGuessedWord;
    return found;
}

// Fonction pour jouer le jeu
function playGame() {
    if (guessedWord === wordToGuess) {
        messageContainer.textContent = "Félicitations ! Vous avez deviné le mot: " + wordToGuess;
        return;
    }
    if (wrongAttempts >= maxWrongAttempts) {
        messageContainer.textContent = "Désolé, vous avez dépassé le nombre maximal d'erreurs. Le mot était: " + wordToGuess;
        return;
    }

    let letter = guessInput.value.trim().toLowerCase();
    if (!letter || letter.length !== 1 || !letter.match(/[a-z]/)) {
        messageContainer.textContent = "Veuillez entrer une lettre valide !";
        return;
    }

    if (checkLetter(letter)) {
        messageContainer.textContent = "Bien joué ! La lettre " + letter + " est dans le mot.";
    } else {
        wrongAttempts++;
        messageContainer.textContent = "Désolé, la lettre " + letter + " n'est pas dans le mot. Nombre d'erreurs : " + wrongAttempts;
    }

    displayWord();
    guessInput.value = ''; // Effacer le contenu de l'entrée après chaque tentative
}

// Événement au presser d'une touche dans l'entrée
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        playGame();
    }
});

// Lancer le jeu au chargement de la page
initializeGame();


