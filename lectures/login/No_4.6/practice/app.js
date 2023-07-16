const loginForm = document.querySelector('#loginFrm');
const loginInput = document.querySelector('#loginFrm input');
const helloArea = document.querySelector("#helloArea");

// CSS 클래스 명을 변수화하여 사용하는 습관을 들이자!
const HIDE_CLASSNAME = "hide";
// 로컬스토리지에 정의한 키값도 변수화한다!
const UAERNAME_KEY = 'userName';

function onLoginSubmit(event) {
    // 이벤트 동작 제어하기
    event.preventDefault(); 
    // 유저이름을 받으면 기존 폼테그는 안보이게 변경하기
    loginForm.classList.add(HIDE_CLASSNAME);
    // 유저 이름 변수 정의 및 초기화
    const userName = loginInput.value;

    // 사용자가 매번 로그인하지 않게 유저이름을 로컬스토리지에 저장하기
    localStorage.setItem(UAERNAME_KEY, userName);

    // // 환영인사 영역에 문구 만들기
    // helloArea.innerText = `Hello ${userName}`;
    // // 숨겨둔 환영인사 영역 활성화하기
    // helloArea.classList.remove(HIDE_CLASSNAME);
    
    // 함수화 적용
    paintHelloText(userName);
}

// 반복 수행 작업은 함수화 하기
function paintHelloText(userName) {
    helloArea.innerText = `Hello ${userName}`;
    helloArea.classList.remove(HIDE_CLASSNAME);
}

// 로컬스토리지에 저장된 값이 있는지 확인
const isUserName = localStorage.getItem(UAERNAME_KEY);

// 로컬스토리지에 저장된 값이 null인지 아닌지에 따라 화면구성하기
if (isUserName === null) {
    // 폼화면 보여주기
    loginForm.classList.remove(HIDE_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // 환영문구 보여주기
    paintHelloText(isUserName);
}