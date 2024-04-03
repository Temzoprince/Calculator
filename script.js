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

// Calculator Buttons

const buttonsArr = ['7', '4', '1', '0', '8', '5', '2', '.', '9', '6', '3', '=', '/', 'x', '-', '+']

function createGrid(gridSize, element) {
  const container = document.querySelector(element);
  // Columns section - Create the number of columns needed for the grid
  for (i = 1; i <= gridSize; i++) {
    let div = document.createElement("div");
    div.classList.add(`col${i}`);
    container.appendChild(div);
  }

  // Rows Section - For each column, make as many rows as there are columns
  const columns = container.querySelectorAll("div");

  // In each column, make as many rows as there are columns
  for (i = 1, arr = 0; i <= columns.length; i++) {
    // Select each column
    let currentColumnDiv = container.querySelector(`.col${i}`);
    console.log(`current column is col: ${i}`);
    for (j = 1; j <= columns.length; j++) {
      // Create as many rows as there are columns
      //   console.log(`current row is row: ${j}`);
      let newRowDiv = document.createElement("div");
      newRowDiv.classList.add(`row${j}`);
      //   console.log(currentColumn);
      currentColumnDiv.appendChild(newRowDiv);
      let btn = document.createElement("btn")
      btn.classList.add(`${buttonsArr[arr]}`)
      btn.textContent = `${buttonsArr[arr]}`
      newRowDiv.appendChild(btn)
      arr++;
    }
  }
}

createGrid(4, ".lower");

// const

for (i = 1; i < 10; i++) {
    // create new button
    //append button to
}
