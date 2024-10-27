import { HelloWorld } from '../classes/challenges/HelloWorld.js';

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
    const helloWorldInstance = new HelloWorld();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('HelloWorld'));
  });

  test('greet() should output "Hello, World!" by default', () => {
    HelloWorld.greet();
    expect(consoleSpy).toHaveBeenCalledWith('Hello, World!');
  });

  test('greet() should output "Hello, JavaScript!" when called with "JavaScript"', () => {
    HelloWorld.greet('JavaScript');
    expect(consoleSpy).toHaveBeenCalledWith('Hello, JavaScript!');
  });
});
