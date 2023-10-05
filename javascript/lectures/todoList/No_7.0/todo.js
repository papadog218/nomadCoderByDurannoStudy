const toDoFrm = document.querySelector("#todoFrm");
const toDoInput = toDoFrm.querySelector("input");
const toDoList = document.querySelector("#todoList");

function handleToDoSubmit(event) {
    event.preventDefault();
    // 변수에 담아두기만 함
    const newToDo = toDoInput.value;
    toDoInput.value = "";
}

toDoFrm.addEventListener("submit", handleToDoSubmit);