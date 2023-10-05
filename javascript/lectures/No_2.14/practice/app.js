// isNaN(): 내장함수이고 넘긴 값이 숫자면 false 아니면 true를 반환함
const age = parseInt(prompt("How old are you??"));

// console.log(isNaN(age));


// if 조건문으로 age가 숫자인지 아닌지 구별하기
if (isNaN(age)) {
    console.log("Please write a number");
} else {
    console.log("Thank you!");
}