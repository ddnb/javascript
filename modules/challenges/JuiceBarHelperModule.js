// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
// export function timeToMixJuice(name) {
//   throw new Error('Please implement the timeToMixJuice function');
// }
export function timeToMixJuice(name) {
  const PREPARATION_TIMES = {
    "Pure Strawberry Joy": 0.5,
    Energizer: 1.5,
    "Green Garden": 1.5,
    "Tropical Island": 3,
    "All or Nothing": 5,
    default: 2.5,
  };

  return PREPARATION_TIMES[name] || PREPARATION_TIMES["default"];
}

const LIME_SIZES_TO_WEDGES = {
  small: 6,
  medium: 8,
  large: 10,
};

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
// export function limesToCut(wedgesNeeded, limes) {
//   throw new Error('Please implement the limesToCut function');
// }
export function limesToCut(wedgesNeeded, limes) {
  let limesCut = 0;

  while (wedgesNeeded > 0 && limes.length > 0) {
    limesCut++;
    wedgesNeeded -= LIME_SIZES_TO_WEDGES[limes.shift()];
  }

  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
// export function remainingOrders(timeLeft, orders) {
//   throw new Error('Please implement the remainingOrders function');
// }
export function remainingOrders(timeLeft, orders) {
  const remainingOrders = [...orders];

  while (timeLeft > 0 && remainingOrders.length > 0) {
    timeLeft -= timeToMixJuice(remainingOrders.shift());
  }

  return remainingOrders;
}
