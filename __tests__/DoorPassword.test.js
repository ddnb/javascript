// jest __tests__/DoorPassword.test.js
import { Challenge } from '../classes/challenges/Challenge.js';
import DoorPassword from '../classes/challenges/DoorPassword.js';

// Mock the Challenge class
// jest.mock('../classes/challenges/Challenge.js', () => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       display: jest.fn() // Mock the display method
//     };
//   });
// });

describe('DoorPassword Class', () => {
  let consoleSpy;

  beforeAll(() => {
    // Setup a spy to capture console output
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterAll(() => {
    // Clean up the spy after tests
    consoleSpy.mockRestore();
  });

  beforeEach(() => {
    jest.clearAllMocks(); // Clears all mocks before each test
  });

  describe('capitalize', () => {
    it('should capitalize the first letter of a word', () => {
      expect(DoorPassword.capitalize('hello')).toBe('Hello');
      expect(DoorPassword.capitalize('WORLD')).toBe('World');
      expect(DoorPassword.capitalize('javaScript')).toBe('Javascript');
      expect(DoorPassword.capitalize('')).toBe('');
    });
  });

  describe('frontDoorResponse', () => {
    it('should return the first letter of a given line', () => {
      expect(DoorPassword.frontDoorResponse('JavaScript')).toBe('J');
      expect(DoorPassword.frontDoorResponse('Hello')).toBe('H');
      expect(DoorPassword.frontDoorResponse('')).toBe('');
    });
  });

  describe('frontDoorPassword', () => {
    it('should return the capitalized version of the word', () => {
      expect(DoorPassword.frontDoorPassword('javaScript')).toBe('Javascript');
      expect(DoorPassword.frontDoorPassword('hello')).toBe('Hello');
    });
  });

  describe('backDoorResponse', () => {
    it('should return the last letter of a trimmed line', () => {
      expect(DoorPassword.backDoorResponse('JavaScript')).toBe('t');
      expect(DoorPassword.backDoorResponse('Hello')).toBe('o');
      expect(DoorPassword.backDoorResponse('   ')).toBe('');
      expect(DoorPassword.backDoorResponse('A')).toBe('A');
    });
  });

  describe('backDoorPassword', () => {
    it('should return the capitalized version of the word followed by ", please"', () => {
      expect(DoorPassword.backDoorPassword('javaScript')).toBe('Javascript, please');
      expect(DoorPassword.backDoorPassword('hello')).toBe('Hello, please');
    });
  });

  describe('Constructor', () => {
    it('should call the parent constructor with the correct name', () => {
      const doorPasswordInstance = new DoorPassword();
      // expect(Challenge).toHaveBeenCalledWith('DoorPassword');
      // expect(doorPasswordInstance.display).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('DoorPassword'));
    });
  });
});
