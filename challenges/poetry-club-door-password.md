# Programming Challenge: [Poetry Club Door Password][door-password]

## Overview

Welcome to the **Poetry Club Door Password Challenge**! This challenge tests your ability to work with strings and manipulate text in JavaScript. You'll implement logic to derive passwords from lines of poetry by picking specific letters and formatting them correctly. Gaining entry through both the front and back doors requires different responses, so pay close attention to the requirements.

## Challenge Description

The poetry club has a door policy that requires visitors to respond with specific letters from each line of a poem recited by the guard. This will form the daily password, but the rules for deriving the password vary depending on whether you're entering through the front or the back door.

### Requirements

1. **Determine the Front Door Password**:
   - **Task 1**: Get the first letter of each line for the front door.
     - Implement `frontDoorResponse(line)`:
       - **Input**: A line from the poem as a string.
       - **Output**: The first letter of that line.

   - **Task 2**: Capitalize the combined letters for the front door password.
     - Implement `frontDoorPassword(word)`:
       - **Input**: A string containing the letters you obtained in Task 1.
       - **Output**: A correctly capitalized word.

2. **Determine the Back Door Password**:
   - **Task 3**: Get the last letter of each line for the back door.
     - Implement `backDoorResponse(line)`:
       - **Input**: A line from the poem as a string.
       - **Output**: The last non-whitespace letter of that line.

   - **Task 4**: Format the back door password politely.
     - Implement `backDoorPassword(word)`:
       - **Input**: A string containing the letters you obtained in Task 3.
       - **Output**: A correctly capitalized word with ', please' added at the end.

### Example Usage

Using the following lines of the poem:

**Front Door**:
1. `frontDoorResponse('Stands so high');` should return `"S"`
2. `frontDoorPassword('SHIRE');` should return `"Shire"`

**Back Door**:
1. `backDoorResponse('Stands so high');` should return `"h"`
2. `backDoorPassword('horse');` should return `"Horse, please"`

## Reference

For more on acrostic and telestich poetry, see [Acrostic Poem - Wikipedia](https://en.wikipedia.org/wiki/Acrostic).

For additional background on this challenge, visit the official [Exercism Poetry Club Door Policy Instructions](https://github.com/exercism/javascript/blob/main/exercises/concept/poetry-club-door-policy/.docs/instructions.md).

