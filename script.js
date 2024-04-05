/*
Create a Calculator
*/

/*
 * Functionality of Calculator
 */

// Variables for calculator

let num1;
let num2;
let operator = '';
let ans;
let displayValue;

// Basic operations function

const round = (n, dp) => {
  const h = +('1'.padEnd(dp + 1, '0')) // 10 or 100 or 1000 or etc
  return Math.round(n * h) / h
}

const add = (a, b) => round((a + b), 3);

const subtract = (a, b) => round((a - b), 3);

const multiply = (a, b) => round((a * b), 3);

const divide = (a, b) => {
  if (b === 0) {
    return "Error";
  }

  let c = a / b

  c = round(c, 3)
  console.log(c)

  return c;
};

//Operate function

const operate = (num1, num2, operator) => {
  num1 = +num1;
  num2 = +num2
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
mainDisplayText = displayTextSpan.textContent;
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
    if (ans == 'Error') {
      return
    }
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
  let clearBtn = document.querySelector('.clear')

  clearBtn.addEventListener('click', () => {
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
  let delBtn = document.querySelector('.delete')

  delBtn.addEventListener('click', () => {
    if (ans == 'Error') {
      return
    }
    displayValue = removeLastDigitFromDisplay()
  })
}

// Function for Operator buttons
let operatorButtons = function() {
  let operatorBtn = document.querySelectorAll('.operator')
  console.log(operatorBtn)

  for (i = 0; i < operatorBtn.length; i++) {
    currentOperatorBtn = operatorBtn[i]
    currentOperatorBtn.addEventListener('click', (e) => {
      if (ans == 'Error') {
        return
      }
      if (!(operator == '')) {
        console.log(`\n num1 is ${num1}`)
        num2 = displayValue
        console.log(`\n num2 is ${num2}`)
        ans = operate(num1, num2, operator)
        console.log('answer is ' + ans)
        operator = e.target.value
        if (ans == 'Error') {
          calculationDisplay('')
          displayValue = addDigitToMainDisplay(`${ans}`, false)
          return
        }
        calculationDisplay(`${ans} ${e.target.textContent}`)
        displayValue = addDigitToMainDisplay(`${ans}`, false)
      }
      num1 = displayValue;
      console.log(`\n num1 is ${num1}`)
      ans = num1
      operator = e.target.value
      console.log('operator is ' + operator)
      calculationDisplay(`${num1} ${e.target.textContent}`)
    })
  }
}

// Function for Equals button
let equalsButton = function() {
  let equalsBtn = document.querySelector('.equals')
  equalsBtn.addEventListener('click', () => {
    if (ans == 'Error' || operator == '') {
      return
    }
    num2 = displayValue
    console.log(`\n num2 is ${num2}`)
    ans = operate(num1, num2, operator)
    console.log('answer is ' + ans)
    calculationDisplay(`${num1} ${operator} ${num2} =`)
    displayValue = addDigitToMainDisplay(`${ans}`, false)
    operator = ''
  }) 
}

// Function for Decimal button
let decimalButton = function() {
  let decimalBtn = document.querySelector('.decimal')
  decimalBtn.addEventListener('click', () => {
    if (ans == 'Error') {
      return
    }
    if (ans == 0) {
      displayValue = addDigitToMainDisplay('.', true)
      ans = ' '
    }
    if (!displayValue.includes('.')) {
      displayValue = addDigitToMainDisplay('.', true)
      ans = ' '
    }
  }) 
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

operatorButtons()

equalsButton()

decimalButton()