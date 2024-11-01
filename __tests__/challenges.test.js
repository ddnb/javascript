import * as Challenges from '../challenges.js';

// Add test
// // HelloWorld
// const helloWorldInstance = new HelloWorld();
// console.log(helloWorldInstance); // Outputs the instance details
// HelloWorld.greet(); // Output: "Hello, World!"
// HelloWorld.greet('Alice'); // Output: "Hello, Alice!"
// HelloWorld.greet('JavaScript'); // Output: "Hello, JavaScript!"

// // DoorPassword
// const doorPasswordInstance = new DoorPassword();
// console.log(doorPasswordInstance); // Outputs the instance details
// const firstLetter = DoorPassword.frontDoorResponse("JavaScript");
// console.log(`The first letter of "JavaScript" is: ${firstLetter}`); // Output: "The first letter of 'JavaScript' is: J"
// const frontDoorPassword = DoorPassword.frontDoorPassword("JavaScript");
// console.log(`The front door password for "JavaScript" is: ${frontDoorPassword}`); // Outputs the capitalized password

// console.log("\n=====================================");
// console.log("         Have a nice day!       ");
// console.log("=====================================");

describe('HelloWorld Challenge', () => {
  let consoleSpy;

  beforeAll(() => {
    // Setup a spy to capture console output
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterAll(() => {
    // Clean up the spy after tests
    consoleSpy.mockRestore();
  });

  test('should call display method in the constructor', () => {
    const helloWorldInstance = new Challenges.HelloWorld();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('HelloWorld'));
  });

  test('greet() should output "Hello, World!" by default', () => {
    Challenges.HelloWorld.greet();
    expect(consoleSpy).toHaveBeenCalledWith('Hello, World!');
  });

  test('greet() should output "Hello, JavaScript!" when called with "JavaScript"', () => {
    Challenges.HelloWorld.greet('JavaScript');
    expect(consoleSpy).toHaveBeenCalledWith('Hello, JavaScript!');
  });
});