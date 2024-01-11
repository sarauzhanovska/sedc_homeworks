let input = document.getElementById('display');

function appendToInput(value) {
  input.value += value;
}

function clearInput() {
  input.value = '';
}

function operate(operator) {
  input.value += operator;
}

function appendDecimal() {
    const currentInput = input.value;
    if (currentInput === '' || !currentInput.endsWith('.')) {
      input.value += '.';
    }
  }
  
  function backspace() {
    input.value = input.value.slice(0, -1);
  }

function calculate() {
  try {
    const expression = input.value;
    const result = Function(`'use strict'; return (${expression})`)();
    input.value = result;
  } catch (error) {
    input.value = 'Error';
  }
}