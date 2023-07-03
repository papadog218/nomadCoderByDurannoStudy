const calculator = {
    plus: function(num1, num2) {
        return num1 + num2;
    },
    minus: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    },
    power: function(num1, num2) {
        return num1 ** num2;
    }
};

const plusReault = calculator.plus(8, 30);
const minusReault = calculator.minus(830, 30);
const multiplyReault = calculator.multiply(8, 30);
const divideReault = calculator.divide(30, 8);
const powerReault = calculator.power(30, 8);
console.log(plusReault, minusReault, multiplyReault, divideReault, powerReault);