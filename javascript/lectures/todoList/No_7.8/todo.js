const toDoFrm = document.querySelector("#todoFrm");
const toDoInput = toDoFrm.querySelector("input");
const toDoList = document.querySelector("#todoList");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delToDo(event) {
    const li = event.target.parentElement;
    li.remove(); 
    // ���ý��丮������ ����� ���� ���� �߰�
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    // li�� id�� �߰���
    li.id = newToDo.id;

    // span.innerText = newToDo;
    // newToDo�� ��ü�� ����ʿ� ���� ���ϴ� ���� �θ��� ������ 
    span.innerText = newToDo.text;
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", delToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();

    const newToDo = toDoInput.value;
    toDoInput.value = "";

    // ������� Ű ���� �ʿ��ؼ� �迭�� ��ü�� ����ǰ� ������!
    const newToDoObj = {
        text: newToDo
        , id: Date.now()
    }

    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
} 

toDoFrm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}