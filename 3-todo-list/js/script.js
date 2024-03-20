const addBtn = document.querySelector("#btn")
const todoCard = document.querySelector('.todoCard')
const todoCards = document.querySelector("#todoCards") 
addBtn.addEventListener("click",addTask)



function delTask(Task) {
    Task.remove()
    updateCount();
}


function addTask() {
    
    const newCard = todoCard.cloneNode(true);
    const newDelBtn = newCard.querySelector(".delBtn")
    const newTextArea = newCard.querySelector(".task");
    
    newTextArea.value = "New Task"

    newDelBtn.addEventListener("click",function () {
        delTask(newCard)
    })

    todoCards.appendChild(newCard)
    updateCount();
}

function updateCount() {
    
    const cardsCount = document.querySelector(".cardsNumber")


    let arrayTodoCards = Array.from(document.querySelectorAll(".todoCard")) 
    let i = arrayTodoCards.length
    cardsCount.innerHTML = "There is " + i + " task"
    console.log(i)
}