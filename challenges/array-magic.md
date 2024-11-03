# Programming Challenge: [Array Magic with Cards][array-magic]

## Introduction

In JavaScript, an array is a flexible list-like structure that can hold any type of values (numbers, strings, objects, etc.). Arrays in JavaScript have no fixed length and are zero-indexed, which means their indices start at 0. 

Here are a few array basics:
- To create an array, use square brackets `[]` and separate elements with commas.
- To access or modify an array element, use the index position inside square brackets after the array name.
  
For example:
```javascript
const numbers = [1, 'two', 3, 'four'];
numbers[2]; 
// => 3
numbers[0] = 'one';
numbers; 
// => ['one', 'two', 3, 'four']
```

# Array Manipulation with Cards

JavaScript arrays have several methods to add, remove, or modify elements. Here are a few important ones:

- **`push()`**: Adds one or more elements to the end of the array.
- **`pop()`**: Removes the last element from the array.
- **`shift()`**: Removes the first element from the array.
- **`unshift()`**: Adds one or more elements to the beginning of the array.
- **`splice()`**: Changes the array by adding, removing, or replacing elements.

## Instructions

As a magician-to-be, Elyse needs to practice some basic card manipulations. She has a stack of cards represented by an array of numbers from 1 to 10. Each card's position in the stack corresponds to an index in the array (0 for the first card, 1 for the second, and so on).

**Note**: Each function should update the array of cards and return the modified array, following the Builder pattern.

### Tasks

1. **Retrieve a card from a stack**

   Return the card at a specified `position` in the stack.
   ```javascript
   const position = 2;
   getItem([1, 2, 4, 1], position);
   // => 4
```

2. **Exchange a card in the stack**

Replace the card at the given position with a replacementCard. Return the updated stack.
```javascript
const position = 2;
const replacementCard = 6;
setItem([1, 2, 4, 1], position, replacementCard);
// => [1, 2, 6, 1]
```

3. **Insert a card at the top of the stack**

Add a new card to the top of the stack. Return the updated stack.
```javascript
const newCard = 8;
insertItemAtTop([5, 9, 7, 1], newCard);
// => [5, 9, 7, 1, 8]
```

4. **Remove a card from the stack**

Remove the card at the specified position. Return the updated stack.
```javascript
const position = 2;
removeItem([3, 2, 6, 4, 8], position);
// => [3, 2, 4, 8]
```

5. **Remove the top card from the stack**

Remove the card at the top of the stack. Return the updated stack.

```javascript
removeItemFromTop([3, 2, 6, 4, 8]);
// => [3, 2, 6, 4]
```

6. **Insert a card at the bottom of the stack**

Add a new card to the bottom of the stack. Return the updated stack.

```javascript
const newCard = 8;
insertItemAtBottom([5, 9, 7, 1], newCard);
// => [8, 5, 9, 7, 1]
```

7. **Remove a card from the bottom of the stack**

Remove the card at the bottom of the stack. Return the updated stack.

```javascript
removeItemAtBottom([8, 5, 9, 7, 1]);
// => [5, 9, 7, 1]
```

8. **Check the size of the stack**

Check if the number of cards in the stack matches a specified stackSize.

```javascript
const stackSize = 4;
checkSizeOfStack([3, 2, 6, 4, 8], stackSize);
// => false
```

## Reference
For more details on array methods, visit:

[Array.prototype.push() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
[Array.prototype.pop() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
[Array.prototype.shift() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
[Array.prototype.unshift() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
[Array.prototype.splice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)