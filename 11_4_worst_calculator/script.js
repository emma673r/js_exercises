`use strict`;

// All const
const firstNumberInput = document.getElementById(`firstnumber`);
const secondNumberInput = document.getElementById(`secondnumber`);
const operatorInput = document.getElementById(`operator`);
const clearBtn = document.getElementById(`clear`);
const calculateBtn = document.getElementById(`calculate`);
const resultsField = document.getElementById(`results`);
const checkboxBtn = document.getElementById(`doround`);
const decimals = document.getElementById(`decimals`);

// All variables
let firstNumber;
let secondNumber;
let resultValue;
let result;
let roundingUp;

// load DOM before anything else
window.addEventListener(`DOMContentLoaded`, settingUp);

// function settingUp
function settingUp() {
  console.log(`settingUp`);
  //clearBtn calls function clearResults -- click
  clearBtn.addEventListener(`click`, clearResults);
  //calculateBtn calls function calculate -- click
  calculateBtn.addEventListener(`click`, calculate);
}

// function clearResults
function clearResults() {
  console.log(`clearResults`);
  //clear resultsField (textContent to nothing)
  resultsField.textContent = ``;
}

// function calculate
function calculate() {
  console.log(`calculate`);

  //Taking the value of firstNumberInput and secondNumberInput and input into the variable
  firstNumber = parseInt(firstNumberInput.value);
  secondNumber = parseInt(secondNumberInput.value);
  operator = operatorInput.value;

  // Loop for 4 differents calculating operators ( +, -, * and %)
  if (operator === `add`) {
    resultValue = parseInt(firstNumber) + parseInt(secondNumber);
  } else if (operator === `sub`) {
    resultValue = firstNumber - secondNumber;
  } else if (operator === `mul`) {
    resultValue = firstNumber * secondNumber;
  } else if (operator === `div`) {
    resultValue = firstNumber / secondNumber;
  }

  // check checkbox checked or not
  if (checkboxBtn.checked == true) {
    // decimals value --> variable
    roundingUp = parseInt(decimals.value);
    // resultValue and roundUp (interger ?)
    resultValue = resultValue.toFixed(roundingUp);
  }

  //   make the firstNumberInput be the result value
  firstNumberInput.value = resultValue;

  // new html li element
  result = document.createElement(`li`);
  //   new li element should have content of resultValue
  result.textContent = resultValue;
  // Putting new li element in the DOM.
  resultsField.appendChild(result);
  // Add scroll to the resultField
  resultsField.scrollTop = resultsField.scrollHeight;
}
