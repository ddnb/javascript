# JavaScript Challenges

## Overview

Welcome to the **JavaScript Challenges Package**! This package is designed to help beginners and intermediate developers learn JavaScript through practical coding exercises and programming challenges. Whether you are just starting or looking to sharpen your skills, this package provides a variety of functions and challenges to enhance your understanding of JavaScript.

## Features

- **Learn JavaScript Basics**: Explore fundamental concepts with easy-to-understand functions.
- **Programming Challenges**: Solve challenges that reinforce your learning and improve problem-solving skills.
- **Well-structured Code**: Clear examples and implementations to guide you through the learning process.
- **Testing with Jest**: Built-in tests to validate your solutions and ensure code quality.

## Installation

You can install the package via npm:

```bash
npm install @ddnb/javascript
```

## Usage

To use the functions provided in this package, simply require it in your JavaScript file:

- Import and Use the Classes in a Consumer Project

```js
// Import specific classes
import { HelloWorld, DoorPassword } from '@ddnb/javascript';

// Or import the entire module
import * as Challenges from '@ddnb/javascript';

const helloWorld = new Challenges.HelloWorld();
helloWorld.greet(); // Output: "Hello, World!"
```

- If your project uses CommonJS, modify index.js to use module.exports:

```js
// index.js (CommonJS)
const HelloWorld = require('./classes/challenges/HelloWorld.js');

module.exports = { HelloWorld };

```

## Programming Challenges

The package includes a series of programming challenges to help you practice your skills. Each challenge is designed to address different JavaScript concepts.

### Example Challenge
Challenge: Write a function that takes an array of numbers and returns the sum.

#### Solution:

```js
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
```

## Running Tests

To ensure everything is working correctly, you can run the tests included with the package. Make sure you have Jest installed, then run:

```
npm test
npx jest __tests__/HelloWorld.test.js
```

## Contributing
Contributions are welcome! If you have ideas for new features, challenges, or improvements, please submit a pull request or open an issue.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

## Contact
If you have any questions or feedback, feel free to reach out!

- Email: me@lehungio.com 
- GitHub: @lehungio
- [Challenge Me!!!](https://github.com/ddnb/javascript/issues/new?assignees=&labels=new&projects=&template=DEFAULT.md&title=Programming+Challenge%3A+%5BChallenge+Name%5D%5BNamespace%5D)
