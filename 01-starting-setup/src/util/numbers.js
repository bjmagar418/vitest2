import {validateStringNotEmpty,validateNumber} from './validation.test'

export function transformToNumber(value) {
  // return NaN;
  return +value;
}
export function cleanNumbers(numberValues) {
  const numbers = [];
 for (const numberInput of numberInputs) {
   validateStringNotEmpty(numberInput);
   const number = transformToNumber(numberInput);
   validateNumber(number);
   numbers.push(number);
 }
 return numbers;
}
