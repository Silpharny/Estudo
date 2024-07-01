const input = document.querySelector("#text")
const button = document.querySelector(".addTask")
const taskListOutput = document.querySelector(".task-list")


const taskList = []

let createNewTask = () => {

    taskList.push({
        newTask: input.value,
        isChecked: false
    })


    input.value = ''
    input.focus()
    showTaskList()
}


let showTaskList = () => {
    let task = ""
    
    taskList.forEach((item, index) => {
  
    task += `
        <li class="task ${item.isChecked && "done"}">
            <img src="img/icons8-checked-60.png" alt="Check" onclick="completeTask(${index})">
            <h4 class="task-text">${item.newTask}</h4>
            <img src="img/icons8-trash-60.png" alt="Trash" onclick="deleteTask(${index})">
        </li>
        ` 
    })

    taskListOutput.innerHTML = task
}


let deleteTask = (index) => {
    
    delete taskList[index]
    showTaskList()
}

let completeTask = (index) => {

    taskList[index].isChecked = !taskList[index].isChecked

    console.log(taskList);
    showTaskList()
}

button.addEventListener('click', createNewTask)