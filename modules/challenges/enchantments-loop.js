/**
 * Counts the number of times a specific card appears in the stack.
 * @param {number[]} stack - The stack of cards.
 * @param {number} card - The card to count.
 * @return {number} - The count of the card in the stack.
 */
export function cardTypeCheck(stack, card) {
  return stack.filter(c => c === card).length;
}

/**
 * Determines the number of odd or even cards in the stack.
 * @param {number[]} stack - The stack of cards.
 * @param {boolean} typeIsEven - True if counting even cards, false if counting odd cards.
 * @return {number} - The count of odd or even cards in the stack.
 */
export function determineOddEvenCards(stack, typeIsEven) {
  return stack.filter(card => (typeIsEven ? card % 2 === 0 : card % 2 !== 0)).length;
}