# Programming Challenge: **Who’s Got Game? Manage the Leaderboard!** 🏆

## Overview

Welcome to the **Who’s Got Game? Manage the Leaderboard!** programming challenge! In this exercise, you'll use your JavaScript skills to create, update, and manage a high-score board for gamers. Whether you're managing scores for a friendly competition or a hyper-competitive e-sports league, this challenge will help you learn to work with objects, keys, and values in JavaScript.

## Challenge Description

Your task is to implement a high-score tracking system using JavaScript objects. You'll build functions to manage the leaderboard, including adding players, updating scores, and deleting entries. This exercise is perfect for practicing object manipulation and understanding how to modify data structures dynamically.

### Requirements

1. **Create the Leaderboard:**
    Start with an object called `highScores`, which will store player names as keys and their scores as values.
    ```javascript
    const highScores = {};
    ```

2. **Add New Players:**
    Write a function `addPlayer` that takes two parameters: the player's name and their initial score. The function should add the player to the `highScores` object.
    ```javascript
    addPlayer("Alice", 50);
    addPlayer("Bob", 30);
    ```

3. **Update Player Scores:**
    Write a function `updateScore`, which updates a player's score by adding a given value to their current score.
    ```javascript
    updateScore("Alice", 20); // Alice now has 70 points
    ```

4. **Remove Players:**
    Write a function `removePlayer` that removes a player from the leaderboard.
    ```javascript
    removePlayer("Bob");
    ```

5. **Return the High Scores:**
    Ensure your leaderboard can be displayed by logging the `highScores` object.

### Example Code

Here's an example of how your code should work:
```javascript
// Initialize the leaderboard
const highScores = {};

// Add players
addPlayer("Alice", 50);
addPlayer("Bob", 30);

// Update scores
updateScore("Alice", 20); // Alice now has 70 points
updateScore("Bob", 40); // Bob now has 70 points

// Remove players
removePlayer("Alice");

// Display leaderboard
console.log(highScores); // { "Bob": 70 }
```

### Considerations

- Make sure your functions handle edge cases, such as trying to update a score for a non-existent player or removing a player not on the board.
- Your solution should be clean, readable, and efficient.

## Reference

[High Score Board Challenge on Exercism.org](https://exercism.org/tracks/javascript/exercises/high-score-board)