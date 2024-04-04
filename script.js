/*
Create a Calculator
*/

/*
 * Dom manipulation for On Screen Calculator
 */

// Calculator Buttons array
const buttonsArr = [
  "7",
  "4",
  "1",
  "0",
  "8",
  "5",
  "2",
  ".",
  "9",
  "6",
  "3",
  "=",
  "/",
  "*",
  "-",
  "+",
];

//Function to create grid
function createGrid(gridSize, element) {
  const grid = document.querySelector(element);
  for (i = 1, arr = 0; i <= gridSize; i++) {
    let col = document.createElement("div");
    col.classList.add(`grid-column-${i}`);
    for (j = 1; j <= gridSize; j++) {
      let row = document.createElement("div");
      row.classList.add(`grid-row-${j}`);
      let btn = document.createElement("btn");
      btn.classList.add(`btn-${buttonsArr[arr]}`)
      btn.textContent = `${buttonsArr[arr]}`;
      row.appendChild(btn);
      arr++;
      col.appendChild(row);
    }
    grid.appendChild(col);
  }
}

// Function to display text on calculator
displayTextSpan = document.querySelector(".display-text");
let addTextToDisplay = function (text, update) {
  if (update) {
    return displayTextSpan.textContent += text;
  }
  return displayTextSpan.textContent = text;
};

// Function to populate display when buttons clicked
let numberButtonsUpdateDisplay = function(btnNumber) {
  let number = document.querySelector(`.btn-${btnNumber}`)

  number.addEventListener('click', () => {
    if (displayTextSpan.textContent == ans) {
      displayValue = addTextToDisplay(`${btnNumber}`, false)
      console.log(displayValue)
    } else {
      displayValue = addTextToDisplay(`${btnNumber}`, true)
      console.log(displayValue)
    }
  })
}

let addBtnCallAdd = function() {
  let addBtn = document.querySelector(`.btn-+`)
  addBtn.addEventListener('click', () => {
    num1 = displayTextSpan.textContent
    displayTextSpan.textContent = '';
    displayValue = addTextToDisplay(`${btnNumber}`, true)
    console.log(num1)
    console.log(displayValue)
  })
}


/*
 * Functionality of Calculator
 */

// Variables for calculator

let num1;
let num2;
let operator;
var ans;
var displayValue;

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

console.log(operate(3, 4, "*"));

/*
 * Calculator Operation
 */

// 4x4 Grid for the calculator buttons
createGrid(4, ".lower");

console.log(addTextToDisplay('hello', false))

ans = 'hello';

for (i = 0; i < 10; i++) {
  numberButtonsUpdateDisplay(i)
}

addBtnCallAdd()