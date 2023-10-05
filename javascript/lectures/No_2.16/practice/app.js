const age = parseInt(prompt("How old are you??"));

// else if 끼리는 위의 조건이 참이면 아래 조건은 실행되지 않는다
// } else if (age > 80) { <-- age가 100이면 이 조건이 참이여서 아래의 조건문이 실행 안됨
//     console.log("you can do everythink");
// } else if (age === 100) {
//     console.log("special age");

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 19) {
    console.log("Too young");
} else if (age >= 19 && age <= 50) {
    console.log("you can drink");
} else if (age > 50 && age <= 80) {
    console.log("you should exercise");
} else if (age === 100) {
    console.log("special age");
} else if (age > 80) {
    console.log("you can do everythink");
}
