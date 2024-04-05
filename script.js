/*
Create a Calculator
*/

/*
 * Functionality of Calculator
 */

// Variables for calculator

let num1;
let num2;
let operator;
let ans;
let displayValue;

// Basic operations function

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) {
    return "Error";
  }

  return a / b;
};

//Operate function

const operate = (num1, num2, operator) => {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  }
};

/*
 * Dom manipulation for On Screen Calculator
 */

// Function to display text on calculator
displayTextSpan = document.querySelector(".screen-current");
let addDigitToMainDisplay = function (text, update) {
  if (update) {
    return displayTextSpan.textContent += text;
  }
  return displayTextSpan.textContent = text;
};

calculationTextSpan = document.querySelector(".screen-last");
let calculationDisplay = function (text) {
    return calculationTextSpan.textContent = text;
};

let removeLastDigitFromDisplay = function () {
  if (!(displayValue = '')) {
    let currentDisplayNumber =  displayTextSpan.textContent;
    let newDisplayNumber = currentDisplayNumber.slice(0, currentDisplayNumber.length - 1)
    return displayTextSpan.textContent = newDisplayNumber
  }
};

// Function for number buttons to affect display
let numberButtonsUpdateDisplay = function(btnNumber) {
  let number = document.querySelector(`.btn-${btnNumber}`)

  number.addEventListener('click', () => {
    if (displayTextSpan.textContent == ans) {
      displayValue = addDigitToMainDisplay(`${btnNumber}`, false)
      console.log(displayValue)
    } else {
      displayValue = addDigitToMainDisplay(`${btnNumber}`, true)
      console.log(displayValue)
    }
  })
}

// Function for Clear button
let clearButton = function() {
  let clear = document.querySelector('.clear')

  clear.addEventListener('click', () => {
    calculationDisplay('')
    displayValue = addDigitToMainDisplay(`0`, false)
    ans = 0;
    num1 = ''
    num2 = ''
    operator = ''
  })
}

// Function for Delete button
let deleteButton = function() {
  let del = document.querySelector('.delete')

  del.addEventListener('click', () => {
    displayValue = removeLastDigitFromDisplay()
  })
}

// Function for operator buttons
let operatorButton = function() {
  let operatorBtn = document.querySelectorAll('.operator')
  console.log(operatorBtn)

  divideOperator = operatorBtn[0]
  divideOperator.addEventListener('click', (e) => {
    num1 = displayValue;
    console.log(`\n${num1}`)
    // clear screen using ans -- Add digit removes value if ans is equal to display value
    ans = num1
    calculationDisplay(`${num1} ÷`)
    operator = e.target.value;
    console.log(operator)
  })

  //multiply
  multiplyOperator = operatorBtn[0]
  multiplyOperator.addEventListener('click', (e) => {
    num1 = displayValue;
    console.log(`\n${num1}`)
    // clear screen using ans -- Add digit removes value if ans is equal to display value
    ans = num1
    calculationDisplay(`${num1} ÷`)
  })

  //subtract

  //add
}

/*
 * Calculator Operation
 */

ans = 0;

for (i = 0; i < 10; i++) {
  numberButtonsUpdateDisplay(i)
}

clearButton()

deleteButton()

operatorButton()