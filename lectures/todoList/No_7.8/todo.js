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
    // 로컬스토리지에서 지우기 위한 세팅 추가
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    // li에 id값 추가함
    li.id = newToDo.id;

    // span.innerText = newToDo;
    // newToDo가 객체로 변경됨에 따라 원하는 값을 부르게 수정함 
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

    // 지우려면 키 값이 필요해서 배열에 객체로 저장되게 수정함!
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