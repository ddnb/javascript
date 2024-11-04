# Programming Challenge: [Bird Watching][bird-watching]

## Overview

Welcome to the **Bird Watching Programming Challenge**! This challenge is designed to help you practice using `for` loops in JavaScript. You will work with an array of bird counts per day to perform various tasks such as calculating the total number of birds, determining the bird count for a specific week, and correcting a counting mistake.

## Challenge Description

The objective of this challenge is to analyze and manipulate bird count data using `for` loops. You will implement three functions to achieve the following tasks:

### Requirements

1. **Determine the total number of birds that you counted so far**
   - Implement a function named `totalBirdCount` that accepts an array containing the bird count per day. It should return the total number of birds counted.

```javascript
  const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
  totalBirdCount(birdsPerDay);
  // => 34
```

2. **Calculate the number of visiting birds in a specific week**
   - Implement a function named `birdsInWeek` that accepts an array of bird counts per day and a week number. It returns the total number of birds counted in that specific week. Assume weeks are always tracked completely.

```javascript
  const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
  birdsInWeek(birdsPerDay, 2);
  // => 12
  ```
   
  3. **Fix a counting mistake**

Implement a function named `fixBirdCountLog` that takes an array of birds counted per day as an argument. It should correct the counting mistake and return the modified array. The mistake is that one bird was missed every second day, starting from the first day.

```javascript
const birdsPerDay = [2, 5, 0, 7, 4, 1];
fixBirdCountLog(birdsPerDay);
// => [3, 5, 1, 7, 5, 1]### Example Output
```

When the functions are executed with the provided examples, they should display the expected results as shown in the comments.

## Reference
https://en.wikipedia.org/wiki/For_loop