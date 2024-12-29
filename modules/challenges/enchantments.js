// /// <reference path="./global.d.ts" />
// // @ts-check

// /**
//  * Get the first card in the given deck
//  *
//  * @param {Card[]} deck
//  *
//  * @returns {Card} the first card in the deck
//  */
// export function getFirstCard(deck) {
//   throw new Error('Implement the getFirstCard function');
// }

// /**
//  * Get the second card in the given deck
//  *
//  * @param {Card[]} deck
//  *
//  * @returns {Card} the second card in the deck
//  */
// export function getSecondCard(deck) {
//   throw new Error('Implement the getSecondCard function');
// }

// /**
//  * Switch the position of the first two cards in the given deck
//  *
//  * @param {Card[]} deck
//  *
//  * @returns {Card[]} new deck with reordered cards
//  */
// export function swapTopTwoCards(deck) {
//   throw new Error('Implement the swapTopTwoCards function');
// }

// /**
//  * Put the top card of the given deck into a separate discard pile
//  *
//  * @param {Card[]} deck
//  *
//  * @returns {[Card, Card[]]} the top card of the given
//  * deck and a new deck containing all the other cards
//  */
// export function discardTopCard(deck) {
//   throw new Error('Implement the discardTopCard function');
// }

// /** @type {Card[]} **/
// const FACE_CARDS = ['jack', 'queen', 'king'];

// /**
//  * Insert face cards into the given deck
//  *
//  * @param {Card[]} deck
//  *
//  * @returns {Card[]} new deck where the second,
//  * third, and fourth cards are the face cards
//  */
// export function insertFaceCards(deck) {
//   throw new Error('Implement the insertFaceCards function');
// }

/**
 * Get the first card from the deck.
 * @param {number[]} deck
 * @returns {number | undefined}
 */
export function getFirstCard(deck) {
  return deck[0];
}

/**
 * Get the second card from the deck.
 * @param {number[]} deck
 * @returns {number | undefined}
 */
export function getSecondCard(deck) {
  return deck[1];
}

/**
 * Swap the top two cards of the deck.
 * @param {number[]} deck
 * @returns {number[]}
 */
export function swapTopTwoCards(deck) {
  if (deck.length < 2) return deck;
  [deck[0], deck[1]] = [deck[1], deck[0]];
  return deck;
}

/**
 * Discard the top card from the deck.
 * @param {number[]} deck
 * @returns {[number | undefined, number[]]}
 */
export function discardTopCard(deck) {
  const topCard = deck.shift();
  return [topCard, deck];
}

/**
 * Insert face cards into the deck.
 * @param {number[]} deck
 * @returns {Array<number | string | undefined>}
 */
export function insertFaceCards(deck) {
  const faceCards = ['jack', 'queen', 'king'];
  if (deck.length === 0) {
    return [undefined, ...faceCards];
  }
  return [deck[0], ...faceCards, ...deck.slice(1)];
}