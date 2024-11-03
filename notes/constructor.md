# Using Constructors in JavaScript Classes

In JavaScript, constructors are special methods in classes used for creating and initializing objects. In this guide, we’ll walk through how to set up constructors in a base class (`Challenges`) and child classes (`HelloWorld` and `DoorPassword`) to dynamically pass the class name to the parent constructor using `super(${this.constructor.name})`. This approach makes your code easier to maintain, as it avoids hardcoding the class name.

## Step 1: Define the `Challenges` Class

First, create a base class `Challenges` with a constructor that accepts a `challengeName` parameter. The constructor sets this value to an instance property and displays the challenge name when called.

**File**: `classes/challenges/Challenges.js`

```javascript
export class Challenges {
  constructor(challengeName) {
    this.challengeName = challengeName;
  }

  display() {
    console.log("=====================================");
    console.log(`           Challenge: ${this.challengeName}     `);
    console.log("=====================================");
  }
}
```

## Step 2: Update the `HelloWorld` Class

Define the `HelloWorld` class by extending `Challenges`. In the constructor, use `super(${this.constructor.name})` to dynamically pass the class name to the parent `Challenges` class. This way, the challenge name is automatically displayed.

**File**: `classes/challenges/HelloWorld.js`

```javascript
import { Challenges } from './Challenges.js';

export class HelloWorld extends Challenges {
  constructor() {
    super(`${this.constructor.name}`); // Pass class name to parent constructor
    this.display(); // Call display method from Challenges
  }

  static greet(name = 'World') {
    console.log(`Hello, ${name}!`);
  }
}
```

## Step 3: Update the `DoorPassword` Class

Similarly, update the `DoorPassword` class to dynamically pass its name to the `Challenges` constructor.

**File**: `classes/challenges/DoorPassword.js`

```javascript
import { Challenges } from './Challenges.js';

export class DoorPassword extends Challenges {
  constructor() {
    super(`${this.constructor.name}`); // Pass class name to parent constructor
    this.display(); // Call display method from Challenges
  }

  static frontDoorResponse(line) {
    return line.length > 0 ? line[0] : "";
  }

  static frontDoorPassword(word) {
    return this.capitalize(word);
  }

  static capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
```

## Step 4: Usage in Your Main Script

Now, you can create instances of `HelloWorld` and `DoorPassword` in your main script. Each instance will automatically display its challenge name, thanks to the dynamic `super(${this.constructor.name})`.

**File**: `challenges.js`

```javascript
import { HelloWorld } from './classes/challenges/HelloWorld.js';
import { DoorPassword } from './classes/challenges/DoorPassword.js';

// Create an instance of HelloWorld
const helloWorldInstance = new HelloWorld();
console.log(helloWorldInstance);
HelloWorld.greet(); // Output: "Hello, World!"
HelloWorld.greet('JavaScript'); // Output: "Hello, JavaScript!"
console.log("\n");

// Create an instance of DoorPassword
const doorPasswordInstance = new DoorPassword();
console.log(doorPasswordInstance);

// Get the first letter response from the front door
const firstLetter = DoorPassword.frontDoorResponse("JavaScript");
console.log(`The first letter of "JavaScript" is: ${firstLetter}`);

// Get the front door password
const frontDoorPassword = DoorPassword.frontDoorPassword("JavaScript");
console.log(`The front door password for "JavaScript" is: ${frontDoorPassword}`);

console.log("\n=====================================");
console.log("             End of Challenges       ");
console.log("=====================================");
```

## Summary

Using `super(${this.constructor.name});` in a derived class constructor allows you to dynamically retrieve the name of the class at runtime. This technique:

- **Enhances maintainability**: If the class name changes, you don’t need to update it in the constructor.
- **Works seamlessly with ES modules and JavaScript classes**, keeping your code clean and easy to follow.

With these changes, creating an instance of `HelloWorld` or `DoorPassword` will automatically display the name of each challenge.
