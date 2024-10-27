import { Challenge } from './Challenge.js';

export class HelloWorld extends Challenge {
  constructor() {
    super(`${HelloWorld.name}`); // Pass the challenge name to the parent constructor
    this.display();
  }

  static greet(name = 'World') {
    console.log(`Hello, ${name}!`);
  }
}