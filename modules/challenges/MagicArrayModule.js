/**
 * Retrieve card from the stack at the 0-based position
 *
 * @param {number[]} stack
 * @param {number} position
 * @returns {number} the card at the given position
 */
export function getItem(stack, position) {
  return stack[position];
}

/**
 * Replace card at the 0-based position with a replacement card
 *
 * @param {number[]} stack
 * @param {number} position
 * @param {number} replacementCard
 * @returns {number[]} the updated stack
 */
export function setItem(stack, position, replacementCard) {
  stack[position] = replacementCard;
  return stack;
}

/**
 * Add a new card at the end of the stack
 *
 * @param {number[]} stack
 * @param {number} newCard
 * @returns {number[]} the updated stack
 */
export function insertItemAtTop(stack, newCard) {
  stack.push(newCard);
  return stack;
}

/**
 * Add a new card at the beginning of the stack
 *
 * @param {number[]} stack
 * @param {number} newCard
 * @returns {number[]} the updated stack
 */
export function insertItemAtBottom(stack, newCard) {
  stack.unshift(newCard);
  return stack;
}

/**
 * Remove card from the stack at the 0-based position
 *
 * @param {number[]} stack
 * @param {number} position
 * @returns {number[]} the updated stack
 */
export function removeItem(stack, position) {
  stack.splice(position, 1);
  return stack;
}

/**
 * Remove the last card from the stack
 *
 * @param {number[]} stack
 * @returns {number[]} the updated stack
 */
export function removeItemFromTop(stack) {
  stack.pop();
  return stack;
}

/**
 * Remove the first card from the stack
 *
 * @param {number[]} stack
 * @returns {number[]} the updated stack
 */
export function removeItemAtBottom(stack) {
  stack.shift();
  return stack;
}

/**
 * Check if the stack contains exactly the given number of cards
 *
 * @param {number[]} stack
 * @param {number} stackSize
 * @returns {boolean} true if stack length matches the stackSize, otherwise false
 */
export function checkSizeOfStack(stack, stackSize) {
  return stack.length === stackSize;
}
