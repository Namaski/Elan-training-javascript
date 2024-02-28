//TEST1

document.addEventListener('DOMContentLoaded', function () {

    const box = document.createElement("div") // créer un div dans une constante "box"

    box.classList.add("box") // assigner une classe .box via "classList" et "add" à la constante box

    const board = document.getElementById("#board") // placer un id dans une variable graçe à getElementbyId
    board.appendChild(box) // place la div .box dans la div #board
    

    function color(board) {
        element.style.color = "red" // changer la couleur de la police de board

    }


    

})

//TEST 2

const board = document.getElementById("board") // placer un id dans une variable graçe à getElementbyId (autre méthode : querySelector("#board"))

/*********MODIFICATION*******/

function colorRed(el) {   // fonction pour changer la couleur de la police de board  // DEMANDER COMMENT FAIRE POUR APPLIQUER LE CHANGEMENT DANS LA FONCTION
   el.style.color = "red" 
   
}

let texts = [1, 2, 3, 4, 5] 
let div = 0

for ( let i = 0; i < texts.length; i++) {
    div = document.createElement("div")
    div.classList.add("box")
    div.innerHTML = texts[i];
    document.body.appendChild(div) // place la div .box dans la div #board
    div.style.color
    colorRed(div)
    
}


// color(board)

// board.style.color ="red"

/////////////////////////  TEST 2 //////////
// var div

// let boites = [1,2,3,4,5]

// boites.forEach(function (i) {
//     var div = document.createElement("div")
//     div.className = "box"
//     div.innerHTML = i 
//     document.body.appendChild(div)
// });






// Vérification

function areAllUnique(array) {
    let uniqueValues = new Set();

    for (let i = 0; i < array.length; i++) {
        if (uniqueValues.has(array[i])) {
            console.log("La valeur " + array[i] + " n'est pas unique.");
            return false;
        } else {
            uniqueValues.add(array[i]);
        }
    }

    console.log("Toutes les valeurs sont uniques.");
    return true;
}

/////////////////////////////MAIN TEST

console.log(areAllUnique(arrayBoxBridge));


const board = document.getElementById("board") // placer un id dans une variable graçe à getElementbyId (autre méthode : querySelector("#board"))

let arrayBox = []; //tableau avec mes divs html
let arrayBoxBridge = [] // tableau pour pouvoir placer par la suite l'élément html

for (let i = 0; i <= 19; i++) {
    arrayBox[i] = document.createElement("div")
    arrayBox[i].classList.add("box")
    arrayBox[i].innerHTML = i;
    arrayBoxBridge[i] = 0
    board.appendChild(arrayBox[i]) // place la div .box dans la div #board
}

arrayBox.forEach(function (i) {
    i.style.color = "red"
});

console.log(arrayBox)

// TEST 1 0 = 10 1 = 4 2 = 7

for (let i = 0; i < arrayBoxBridge.length; i++) { // 

    var a = Math.ceil(Math.random() * 20)  // Génére une valeur aléatoire 

    console.log("première variable " + a)

    for (let i2 = 0; i2 < arrayBoxBridge.length - (arrayBoxBridge.length - i); i2++) { // TROUVER UN MOYEN D'AVOIR UNE VALEUR DIFFERENTES SUR CHAQUES DIV ; vérif pas 100% fiable 

        console.log("l'index " + i2)

        if (a == arrayBoxBridge[i2]) {

            a = Math.ceil(Math.random() * 20)

            console.log("deuxième variable " + a)

            for (let i3 = 0; i3 < arrayBoxBridge.length - (arrayBoxBridge.length - i); i3++) {

                if (a == arrayBoxBridge[i3]) {

                    a = Math.ceil(Math.random() * 20)

                    arrayBoxBridge[i] = a
                    arrayBox[i].innerHTML = a
                }
                
                arrayBoxBridge[i] = a
                arrayBox[i].innerHTML = a //place la valeur aléatoire dans .box  
            }

        }

    }
    outer_loop :
    for (let i4 = 0; i4 < arrayBoxBridge.length - (arrayBoxBridge.length - i) + 1; i4++) {
        console.log("l'index 2 est " + i4)
        if (a == arrayBoxBridge[i]) {
            (console.log("moi "+ a +" je suis entré"))
            break outer_loop;
        }
        arrayBoxBridge[i] = a
        arrayBox[i].innerHTML = a //place la valeur aléatoire dans .box
        
        
    }


}

//CHAT GPT

// for (let i = 0; i < arrayBoxBridge.length; i++) {
//     let a;
//     do {
//         a = Math.ceil(Math.random() * 20);
//     } while (arrayBoxBridge.includes(a)); // Vérifie si a est déjà présent dans arrayBoxBridge

//     arrayBoxBridge[i] = a;
//     arrayBox[i].innerHTML = a;
// }