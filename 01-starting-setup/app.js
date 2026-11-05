import {extractEnteredNumberValues, extractNumbers } from './src/parser.js';
import {
  validateStringNotEmpty,
  validateNumber,
} from './src/util/validation.js';
import { add, calculateResult } from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';
import { generateResultText, outputResult } from './src/output.js';

const form = document.querySelector('form');
// const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();
  // const formData = new FormData(form);
  // const numberInputs = extractNumbers(formData);
 const numberValues= extractEnteredNumberValues(form);
 const result = calculateResult(numberValues);
const resultText = generateResultText(result);

outputResult(resultText);

  // let resultText = '';

  // if (result === 'invalid') {
  //   resultText = 'Invalid input. You must enter valid numbers.';
  // } else if (result !== 'no-calc') {
  //   resultText = 'Result: ' + result;
  // }

  // output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);
