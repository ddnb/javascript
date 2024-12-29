//@ts-check

/**
 * Builds a sign with the given occasion and name.
 * @param {string} occasion
 * @param {string} name
 * @returns {string}
 */
export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

/**
 * Builds a birthday sign based on the age.
 * @param {number} age
 * @returns {string}
 */
export function buildBirthdaySign(age) {
  if (age < 50) {
    return 'Happy Birthday! What a young fellow you are.';
  } else {
    return 'Happy Birthday! What a mature fellow you are.';
  }
}

/**
 * Builds a graduation sign for the given name and year.
 * @param {string} name
 * @param {number} year
 * @returns {string}
 */
export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`;
}

/**
 * Calculates the cost of a sign based on the number of characters and the currency.
 * @param {string} sign
 * @param {string} currency
 * @returns {string}
 */
export function costOf(sign, currency) {
  const BASE = 20;
  const cost = sign.length * 2 + BASE;
  return `Your sign costs ${cost.toFixed(2)} ${currency}.`;
}