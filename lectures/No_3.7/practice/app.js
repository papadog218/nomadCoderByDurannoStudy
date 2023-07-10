// html 태그에 접근하는 법 (단일 태그 가져오기 : querySelector, 다중 태그 가져오기 : querySelectorAll)
const h1 = document.querySelector(".hello h1");

/*
    CSS 영역까지 포함했을 때 코드
*/
// function handleClicked() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor == 'cornflowerblue') {
//         newColor = 'tomato';
//     } else {
//         newColor = 'cornflowerblue';
//     }
//     h1.style.color = newColor;
// };

/*
    CSS 영역을 분리시켰을 때 코드
*/
// function handleClicked() {
//     // 철자가 중요! CSS 파일에 사용한 것과 틀리면 짤없음!!
//     h1.className = 'active';
// };

/*
    getter: 조회기능, setter: 수정기능 => h1.className의 역할임
*/
// function handleClicked() {
//     // ===은 타입까지 비교확인함, ==은 자동형변환해주고 비교함(문자를 숫자로만 변환하는듯함)
//     // const flag = 0 == '0';
//     // const flag = 0 == '00';
//     // const flag = 0 === '0';
//     // console.log(`flag = ${flag}`);

//     if (h1.className === 'active') {
//         h1.className = '';
//     } else {
//         h1.className = 'active';
//     }
// };

/*
    CleanCode part.1
    중복 사용되는 사용자지정 값(raw value)들을 변수화 한다!
    => 사용자지정 값(raw value)은 오타가 발생해도 에러를 띄우지 않는다
    => 수정 시 유지보수할 영역이 줄어들게 된다
*/
// function handleClicked() {
//     const clickedClass = 'clicked';
//     // 결국 변수에 담아 사용해도 변수명을 틀리면 안되는 것은 똑같다
//     // 하지만 이런 경우에는 에러를 띄워준다!! (개발 시 에러의 원인을 알 수 있는 것은 큰 도움임)
//     if (h1.className === clickedClass) {
//         h1.className = '';
//     } else {
//         h1.className = clickedClass;
//     }
// };

/*
    위의 함수에서 클래스명을 변경시키는 방법에는 버그가 존재함
    만일 html의 불러온 태그 영역에 클래스명이 수정된다면 그때마다 해당 JS와 CSS를 수정해야되는 버그(매우 불편)

    이것에 대한 해답은 기존 클래스명에 영향을 주지 않고 내가 추가한 클래스명만 추가 삭제하면 됨
    방법은 아래와 같음
*/
function handleClicked() {
    // 기본 스킬
    // const clickedClass = 'clicked';
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }

    // 위의 스킬을 많이 사용해서 JS에 이미 해당 기능의 함수가 존재함
    h1.classList.toggle('clicked');
};

h1.addEventListener('click', handleClicked);

// tip. 전체 라인수로 비교하면서 보면 클린코드는 꼭 적은 코드가 아니라는걸 알수있음