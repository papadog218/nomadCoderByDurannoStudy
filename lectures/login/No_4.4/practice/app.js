const loginForm = document.querySelector('#loginFrm');
const loginInput = document.querySelector('#loginFrm input');
const helloArea = document.querySelector("#helloArea");

function onLoginSubmit(event) {
    // 이벤트 동작 제어하기
    event.preventDefault(); 
    // 유저이름을 받으면 기존 폼테그는 안보이게 변경하기
    loginForm.classList.add("hide");
    // 유저 이름 변수 정의 및 초기화
    const userName = loginInput.value;
    // 환영인사 영역에 문구 만들기
    helloArea.innerText = `Hello ${userName}`;
    // 숨겨둔 환영인사 영역 활성화하기
    helloArea.classList.remove("hide");
}

loginForm.addEventListener('submit', onLoginSubmit);