/********************************************************* VARIABLES *******************************************************/

let timer = 0 // initialisation du timer pour utilisé dans la fonction startTimer
let secondes = 0 // initialisation des secondes
let milisecondes = 0 //initialisation des milisecondes
let nb = 1 // initialisation du score (ici c'est la boite voulue) pour controler l'état du jeu
let boxNumber = 9 /*nombre de boites */
let refreshIntervalId // permet de refresh l'intervalle du timer
let bestTime = 99999999999999