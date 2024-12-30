// // @ts-check

// /**
//  * Double every card in the deck.
//  *
//  * @param {number[]} deck
//  *
//  * @returns {number[]} deck with every card doubled
//  */
// export function seeingDouble(deck) {
//   throw new Error('Implement the seeingDouble function');
// }

// /**
//  *  Creates triplicates of every 3 found in the deck.
//  *
//  * @param {number[]} deck
//  *
//  * @returns {number[]} deck with triplicate 3s
//  */
// export function threeOfEachThree(deck) {
//   throw new Error('Implement the threeOfEachThree function');
// }

// /**
//  * Extracts the middle two cards from a deck.
//  * Assumes a deck is always 10 cards.
//  *
//  * @param {number[]} deck of 10 cards
//  *
//  * @returns {number[]} deck with only two middle cards
//  */
// export function middleTwo(deck) {
//   throw new Error('Implement the middleTwo function');
// }

// /**
//  * Moves the outside two cards to the middle.
//  *
//  * @param {number[]} deck with even number of cards
//  *
//  * @returns {number[]} transformed deck
//  */

// export function sandwichTrick(deck) {
//   throw new Error('Implement the sandwichTrick function');
// }

// /**
//  * Removes every card from the deck except 2s.
//  *
//  * @param {number[]} deck
//  *
//  * @returns {number[]} deck with only 2s
//  */
// export function twoIsSpecial(deck) {
//   throw new Error('Implement the twoIsSpecial function');
// }

// /**
//  * Returns a perfectly order deck from lowest to highest.
//  *
//  * @param {number[]} deck shuffled deck
//  *
//  * @returns {number[]} ordered deck
//  */
// export function perfectlyOrdered(deck) {
//   throw new Error('Implement the perfectlyOrdered function');
// }

// /**
//  * Reorders the deck so that the top card ends up at the bottom.
//  *
//  * @param {number[]} deck
//  *
//  * @returns {number[]} reordered deck
//  */
// export function reorder(deck) {
//   throw new Error('Implement the reorder function');
// }

// solution.js
/**
 * Doubles all the values in the deck.
 * @param {number[]} deck - The deck of cards.
 * @return {number[]} - The deck with all values doubled.
 */
export function seeingDouble(deck) {
  return deck.map(card => card * 2);
}

/**
 * Converts each 3 in the deck into three 3s.
 * @param {number[]} deck - The deck of cards.
 * @return {number[]} - The deck with each 3 converted into three 3s.
 */
export function threeOfEachThree(deck) {
  return deck.flatMap(card => (card === 3 ? [3, 3, 3] : [card]));
}

/**
 * Extracts the middle two cards from the deck.
 * @param {number[]} deck - The deck of cards.
 * @return {number[]} - The middle two cards.
 */
export function middleTwo(deck) {
  const middleIndex = Math.floor(deck.length / 2);
  return deck.slice(middleIndex - 1, middleIndex + 1);
}

/**
 * Moves the outside two cards into the middle.
 * @param {number[]} deck - The deck of cards.
 * @return {number[]} - The deck with the outside two cards moved to the middle.
 */
export function sandwichTrick(deck) {
  if (deck.length < 2) return deck;
  const first = deck.shift();
  const last = deck.pop();
  const middleIndex = Math.floor(deck.length / 2);
  deck.splice(middleIndex, 0, last, first);
  return deck;
}

/**
 * Keeps only the 2s in the deck.
 * @param {number[]} deck - The deck of cards.
 * @return {number[]} - The deck with only 2s.
 */
export function twoIsSpecial(deck) {
  return deck.filter(card => card === 2);
}

/**
 * Sorts the cards in the deck from lowest to highest.
 * @param {number[]} deck - The deck of cards.
 * @return {number[]} - The sorted deck.
 */
export function perfectlyOrdered(deck) {
  return deck.slice().sort((a, b) => a - b);
}

/**
 * Reorders the deck.
 * @param {number[]} deck - The deck of cards.
 * @return {number[]} - The reordered deck.
 */
export function reorder(deck) {
  return deck.reverse();
}