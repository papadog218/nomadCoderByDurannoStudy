// true || true = true
// true || false = true
// false || true = true
// false || false = false

// true && true = true
// true && false = false
// false && true = false
// false && false = false


const age = parseInt(prompt("How old are you??"));

// else if를 사용하게 되면 if와 else if 조건 모두가 거짓일 때만 else 문이 동작한다! (else는 생략도 가능함)
if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 19) {
    console.log("Too young");
} else if (age >= 19 && age <= 50) {
    console.log("you can drink");
} else if (age > 50 && age <= 80) {
    console.log("you should exercise");
} else if (age > 80){
    console.log("you can do everythink");
}