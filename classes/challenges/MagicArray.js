import { Challenge } from './Challenge.js';

export default class MagicArray extends Challenge { // with export default can be imported with any name
  constructor(cards = []) {
    super(`${MagicArray.name}`); // Pass the challenge name to the parent constructor
    this.display();
    this.cards = cards;
  }

  /**
   * Retrieve card from cards array at the 0-based position
   *
   * @param {number} position
   * @returns {number} the card
   */
  getItem(position) {
    return this.cards[position];
  }

  /**
   * Exchange card with replacementCard at the 0-based position
   *
   * @param {number} position
   * @param {number} replacementCard
   * @returns {MagicArray} the updated MagicArray instance
   */
  setItem(position, replacementCard) {
    this.cards[position] = replacementCard;
    return this;
  }

  /**
   * Insert newCard at the end of the cards array
   *
   * @param {number} newCard
   * @returns {MagicArray} the updated MagicArray instance
   */
  insertItemAtTop(newCard) {
    this.cards.push(newCard);
    return this;
  }

  /**
   * Remove the card at the 0-based position
   *
   * @param {number} position
   * @returns {MagicArray} the updated MagicArray instance
   */
  removeItem(position) {
    this.cards.splice(position, 1);
    return this;
  }

  /**
   * Remove card from the end of the cards array
   *
   * @returns {MagicArray} the updated MagicArray instance
   */
  removeItemFromTop() {
    this.cards.pop();
    return this;
  }

  /**
   * Insert newCard at the beginning of the cards array
   *
   * @param {number} newCard
   * @returns {MagicArray} the updated MagicArray instance
   */
  insertItemAtBottom(newCard) {
    this.cards.unshift(newCard);
    return this;
  }

  /**
   * Remove card from the beginning of the cards array
   *
   * @returns {MagicArray} the updated MagicArray instance
   */
  removeItemAtBottom() {
    this.cards.shift();
    return this;
  }

  /**
   * Compare the number of cards with the given stackSize
   *
   * @param {number} stackSize
   * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
   */
  checkSizeOfStack(stackSize) {
    return this.cards.length === stackSize;
  }
}
