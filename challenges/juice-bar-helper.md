# Programming Challenge: [Juice Bar Helper][juice-bar-helper]

## Overview

Welcome to the **Juice Bar Helper Programming Challenge**! This challenge is designed to help you practice using while loops and switch statements in JavaScript. You will create functions to assist your friend Li Mei in managing her juice bar more efficiently.

## Challenge Description

The objective of this challenge is to create three functions that will help Li Mei with her juice bar operations. You will use while loops and switch statements to implement these functions.

### Requirements

1. **Determine how long it takes to mix a juice**
  - Create a function named `timeToMixJuice` that takes a juice from the menu as an argument and returns the number of minutes it takes to mix that drink.
  - Use a switch statement to handle the different juice types.

2. **Replenish the lime wedge supply**
  - Create a function named `limesToCut` that takes the number of lime wedges needed and an array representing the supply of whole limes.
  - Use a while loop to determine how many limes need to be cut to meet the required number of wedges.

3. **Finish up the shift**
  - Create a function named `remainingOrders` that takes the number of minutes left in Li Mei's shift and an array of juices that have been ordered but not prepared yet.
  - Use a while loop to determine which orders Li Mei can complete before her shift ends.

### Example Outputs

#### `timeToMixJuice`

```javascript
timeToMixJuice('Tropical Island');
// => 3

timeToMixJuice('Berries & Lime');
// => 2.5
```

#### `limesToCut`

```javascript
limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);
// => 4
```

#### `remainingOrders`

```javascript
remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']);
// => ['Green Garden']
```

## Reference
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch