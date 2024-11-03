/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck';
}
/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  if (typeof option1 !== 'string' || typeof option2 !== 'string') {
    throw new Error('Both options must be strings');
  }

  if (option1.localeCompare(option2) < 0) {
    return `${option1} is clearly the better choice.`;
  }

  return `${option2} is clearly the better choice.`;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (typeof originalPrice !== 'number' || typeof age !== 'number' || originalPrice < 0 || age < 0) {
    throw new Error('Invalid input: originalPrice and age must be non-negative numbers');
  }

  if (age > 10) {
    return 0.5 * originalPrice;
  } else if (age < 3) {
    return 0.8 * originalPrice;
  }

  return 0.7 * originalPrice;
}