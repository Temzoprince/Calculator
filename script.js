/*
Create a Calculator
*/

// Calculator operations

const add = (a,b) => a + b

const subtract = (a,b) => a - b

const multiply = (a,b) => a * b

const divide = (a, b) => a / b

let num1;
let num2;
let operator;

//Operate function

const operate = (num1, num2, operator) => {
    if (operator == '+') {
        return add(num1, num2)
    } else if (operator == '-') {
        return subtract(num1, num2)
    } else if(operator == '*') {
        return multiply(num1, num2)
    } else if(operator == '/') {
        return divide(num1, num2)
    }
}

console.log(operate(3, 4, '*'))
