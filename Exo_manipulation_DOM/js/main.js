
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
            newBox.classList.toggle('box-clicked');
            nb++  
            console.log(nb)
            if (nb == board.children.length){ 
                alert("gagné")
            }
        } else {
            alert("perdu")
            window.location.href = window.location.href
        }
        
        

    })


}



shuffleChildren(board)

