const loginForm = document.querySelector('#loginFrm');
const loginInput = document.querySelector('#loginFrm input');
const helloArea = document.querySelector("#helloArea");

// CSS 클래스 명을 변수화하여 사용하는 습관을 들이자!
const HIDE_CLASSNAME = "hide";

function onLoginSubmit(event) {
    // 이벤트 동작 제어하기
    event.preventDefault(); 
    // 유저이름을 받으면 기존 폼테그는 안보이게 변경하기
    loginForm.classList.add(HIDE_CLASSNAME);
    // 유저 이름 변수 정의 및 초기화
    const userName = loginInput.value;
    // 환영인사 영역에 문구 만들기
    helloArea.innerText = `Hello ${userName}`;
    // 숨겨둔 환영인사 영역 활성화하기
    helloArea.classList.remove(HIDE_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit);