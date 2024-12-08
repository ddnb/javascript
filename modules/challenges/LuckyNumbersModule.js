// @ts-check

/**
 * Calculates the sum of two arrays of numbers by concatenating their elements
 * and converting the result to a number.
 *
 * @param {number[]} firstArray - The first array of numbers.
 * @param {number[]} secondArray - The second array of numbers.
 * @returns {number} The sum of the two concatenated arrays as a number.
 * @throws {TypeError} If either argument is not an array of numbers.
 */
export function twoSum(firstArray, secondArray) {
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
    throw new TypeError('Both arguments must be arrays');
  }
  if (!firstArray.every(Number.isFinite) || !secondArray.every(Number.isFinite)) {
    throw new TypeError('Both arrays must contain only numbers');
  }
  return Number(firstArray.join('')) + Number(secondArray.join(''));
}

/**
 * Determines if a given number is a palindrome.
 *
 * @param {number} number - The number to check.
 * @returns {boolean} True if the number is a palindrome, false otherwise.
 * @throws {TypeError} If the input is not a finite number.
 */
export function luckyNumber(number) {
  if (typeof number !== 'number' || !Number.isFinite(number)) {
    throw new TypeError('Input must be a finite number');
  }
  return String(number) === [...String(number)].reverse().join('');
}

/**
 * Generates an error message based on the validity of the input.
 *
 * @param {string|null|undefined} inputValue - The input value to validate.
 * @returns {string} An error message if the input is invalid, otherwise an empty string.
 */
export function errorMessage(inputValue) {
  if (inputValue === null || inputValue === undefined || inputValue.trim() === '') {
    return 'Required field';
  }
  return !isNaN(Number(inputValue)) && Number(inputValue) !== 0 ? '' : 'Must be a number besides 0';
}