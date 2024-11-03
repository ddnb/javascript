import { Challenge } from '../classes/challenges/Challenge.js';

describe('Challenge Class', () => {
  let consoleSpy;

  beforeAll(() => {
    // Spy on console.log to capture its output for testing
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterAll(() => {
    // Restore the console log spy after tests
    consoleSpy.mockRestore();
  });

  test('should initialize with a valid challenge name', () => {
    const challengeInstance = new Challenge('Sample Challenge');
    expect(challengeInstance).toBeInstanceOf(Challenge);
  });

  test('should throw a TypeError when challengeName is an empty string', () => {
    expect(() => new Challenge('')).toThrow(TypeError);
    expect(() => new Challenge('')).toThrow('challengeName must be a non-empty string');
  });

  test('should throw a TypeError when challengeName is not a string', () => {
    expect(() => new Challenge(123)).toThrow(TypeError);
    expect(() => new Challenge(123)).toThrow('challengeName must be a non-empty string');
    expect(() => new Challenge(null)).toThrow(TypeError);
    expect(() => new Challenge(null)).toThrow('challengeName must be a non-empty string');
  });

  test('display() should log the correct formatted output', () => {
    const challengeInstance = new Challenge('Sample Challenge');
    challengeInstance.display();
    
    expect(consoleSpy).toHaveBeenCalledWith("=====================================");
    expect(consoleSpy).toHaveBeenCalledWith("           Sample Challenge     ");
    expect(consoleSpy).toHaveBeenCalledWith("=====================================");
  });
});
