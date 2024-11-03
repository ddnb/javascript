import MagicArray from '../classes/challenges/MagicArray.js';
import { Challenge } from '../classes/challenges/Challenge.js';

// Mock the Challenge class to control its behavior in tests
jest.mock('../classes/challenges/Challenge.js');

describe('MagicArray Class Unit', () => {
  let consoleSpy;
  let magicArrayInstance;

  beforeAll(() => {
    // Setup a spy to capture console output
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterAll(() => {
    // Clean up the spy after tests
    consoleSpy.mockRestore();
  });

  beforeEach(() => {
    // Initialize a MagicArray instance before each test
    magicArrayInstance = new MagicArray([1, 2, 3, 4, 5]);
    Challenge.mockClear();
  });

  test('getItem() should return the correct item at the specified position', () => {

    console.log(magicArrayInstance.getItem(0));
    expect(magicArrayInstance.getItem(0)).toBe(1);
    expect(magicArrayInstance.getItem(2)).toBe(3);
    expect(magicArrayInstance.getItem(4)).toBe(5);
  });

  // test('should call display or log method in constructor (if applicable)', () => {
  //   new MagicArray([10, 20, 30]); // This instance creation is for testing console calls in constructor
  //   expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('MagicArray'));
  // });

  // test('should call display method in the constructor', () => {
  //   const magicArrayInstance = new MagicArray([1, 2, 3]);
  //   expect(consoleSpy).toHaveBeenCalledWith('MagicArray'); // Check parent constructor
  //   expect(consoleSpy).toHaveBeenCalled(); // Check that display was called
  // });

  test('should initialize cards with the provided array', () => {
    const magicArrayInstance = new MagicArray([1, 2, 3]);
    expect(magicArrayInstance.cards).toEqual([1, 2, 3]);
  });

  test('should initialize cards as an empty array when no arguments are provided', () => {
    const magicArrayInstance = new MagicArray();
    expect(magicArrayInstance.cards).toEqual([]); // Ensure cards is empty
  });

});