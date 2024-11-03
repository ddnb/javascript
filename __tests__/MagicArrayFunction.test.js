import { Challenge } from '../classes/challenges/Challenge.js';
import { createMagicArray } from '../functions/challenges/MagicArrayFunction.js';

describe('createMagicArray', () => {
  let magicArray;

  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(); // Mock console.log to avoid actual logging in tests
    magicArray = createMagicArray([1, 2, 3]);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should initialize with the provided cards array', () => {
    expect(magicArray.cards).toEqual([1, 2, 3]);
  });

  test('should display the challenge name in the constructor', () => {
    const displaySpy = jest.spyOn(Challenge.prototype, 'display');
    createMagicArray();
    expect(displaySpy).toHaveBeenCalled();
  });

  describe('getItem', () => {
    test('should return the card at the specified position', () => {
      expect(magicArray.getItem(0)).toBe(1);
      expect(magicArray.getItem(1)).toBe(2);
      expect(magicArray.getItem(2)).toBe(3);
    });
  });

  describe('setItem', () => {
    test('should replace the card at the specified position and return the updated object', () => {
      magicArray.setItem(1, 5);
      expect(magicArray.cards).toEqual([1, 5, 3]);
    });
  });

  describe('insertItemAtTop', () => {
    test('should add a new card at the end of the array and return the updated object', () => {
      magicArray.insertItemAtTop(4);
      expect(magicArray.cards).toEqual([1, 2, 3, 4]);
    });
  });

  describe('removeItem', () => {
    test('should remove the card at the specified position and return the updated object', () => {
      magicArray.removeItem(1);
      expect(magicArray.cards).toEqual([1, 3]);
    });
  });

  describe('removeItemFromTop', () => {
    test('should remove the last card in the array and return the updated object', () => {
      magicArray.removeItemFromTop();
      expect(magicArray.cards).toEqual([1, 2]);
    });
  });

  describe('insertItemAtBottom', () => {
    test('should add a new card at the beginning of the array and return the updated object', () => {
      magicArray.insertItemAtBottom(0);
      expect(magicArray.cards).toEqual([0, 1, 2, 3]);
    });
  });

  describe('removeItemAtBottom', () => {
    test('should remove the first card in the array and return the updated object', () => {
      magicArray.removeItemAtBottom();
      expect(magicArray.cards).toEqual([2, 3]);
    });
  });

  describe('checkSizeOfStack', () => {
    test('should return true if the stack size matches the given number', () => {
      expect(magicArray.checkSizeOfStack(3)).toBe(true);
      expect(magicArray.checkSizeOfStack(2)).toBe(false);
    });
  });
});
