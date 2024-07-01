let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem('@listaTarefas')) || []

function deletarTarefa(posicao){
    tarefas.splice(posicao,1)
    renderTarefas()
    salvarDados()
}

function renderTarefas() {
    listElement.innerHTML = ""
    
    tarefas.map((tarefa) => {
        let liElement = document.createElement('li')
        let tarefaText = document.createTextNode(tarefa)

        let linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')
        
        let linkText = document.createTextNode("Excluir")
        linkElement.appendChild(linkText)

        let posicao = tarefas.indexOf(tarefa)

        linkElement.setAttribute('onclick', `deletarTarefa(${posicao})`)

        liElement.appendChild(tarefaText)
        liElement.appendChild(linkElement)
        listElement.appendChild(liElement)
    })
}

renderTarefas()

function adicionarTarefas() {
  if (inputElement.value === "") {
    alert("digite alguma tarefa!");
    return false;
  } else {
    let tarefa = inputElement.value;
    tarefas.push(tarefa);
    inputElement.value = "";
  }
    renderTarefas()
    salvarDados()
}

function salvarDados() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
}

buttonElement.onclick = adicionarTarefas;
