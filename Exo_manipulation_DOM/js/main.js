
function shuffleChildren(parent) {

    let children = parent.children
    let i = children.length
    let k
    let temp
    while (i-- > 0) {

        k = Math.floor(Math.random() * i + 1)

        temp = children[k]

        children[k] = children[i]

        parent.appendChild(temp) // marche car cela prend la valeur en tant que tel mais en tant que pointeur pour modifier l'ordre et donc prendre l'élément en retirant ce derniers

    }



}



const board = document.querySelector("#board") // Attribution de l'Id HTML dans board
const box = document.createElement('div')
box.classList = "box"

let nb = 1

for (let i = 1; i <= 10; i++) {

    const newBox = box.cloneNode()
    newBox.innerText = i
    board.appendChild(newBox)

    newBox.addEventListener('click', function () {

        if (i == nb) {
            newBox.classList.toggle('box-clicked')
            //1
            if (nb == board.children.length) {
                alert("Victoire !")
            }
        nb++
        }
        //2
        else if (i > nb) {
            alert("Trop élevé !")
            nb = 1
            board.querySelectorAll(".box-clicked").forEach(function (el) {
                el.classList.remove("box-clicked")
            })

        //3
        } else {
            alert("Déjà cliqué")
        }


    })


}



shuffleChildren(board)

