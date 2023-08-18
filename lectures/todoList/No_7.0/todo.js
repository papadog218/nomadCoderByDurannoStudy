const toDoFrm = document.querySelector("#todoFrm");
const toDoInput = toDoFrm.querySelector("input");
const toDoList = document.querySelector("#todoList");

function handleToDoSubmit(event) {
    event.preventDefault();
    // ������ ��Ƶα⸸ ��
    const newToDo = toDoInput.value;
    toDoInput.value = "";
}

toDoFrm.addEventListener("submit", handleToDoSubmit);