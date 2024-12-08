import MagicArray from '../../classes/challenges/MagicArray';

describe('MagicArray Class', () => {
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
  });

  test('should initialize with the provided array', () => {
    expect(magicArrayInstance.cards).toEqual([1, 2, 3, 4, 5]);
  });

  test('getItem() should return the correct item at the specified position', () => {

    console.log(magicArrayInstance.getItem(0));
    expect(magicArrayInstance.getItem(0)).toBe(1);
    expect(magicArrayInstance.getItem(2)).toBe(3);
    expect(magicArrayInstance.getItem(4)).toBe(5);
  });

  test('setItem() should replace the item at the specified position', () => {
    magicArrayInstance.setItem(1, 99);
    expect(magicArrayInstance.getItem(1)).toBe(99);
  });

  test('insertItemAtTop() should add a new item at the end of the array', () => {
    magicArrayInstance.insertItemAtTop(10);
    expect(magicArrayInstance.cards[magicArrayInstance.cards.length - 1]).toBe(10);
  });

  test('removeItem() should remove the item at the specified position', () => {
    magicArrayInstance.removeItem(1);
    expect(magicArrayInstance.cards).toEqual([1, 3, 4, 5]);
  });

  test('removeItemFromTop() should remove the last item from the array', () => {
    magicArrayInstance.removeItemFromTop();
    expect(magicArrayInstance.cards).toEqual([1, 2, 3, 4]);
  });

  test('insertItemAtBottom() should add a new item at the beginning of the array', () => {
    magicArrayInstance.insertItemAtBottom(10);
    expect(magicArrayInstance.cards[0]).toBe(10);
  });

  test('removeItemAtBottom() should remove the first item from the array', () => {
    magicArrayInstance.removeItemAtBottom();
    expect(magicArrayInstance.cards).toEqual([2, 3, 4, 5]);
  });

  test('checkSizeOfStack() should return true if the stack size matches the specified size', () => {
    expect(magicArrayInstance.checkSizeOfStack(5)).toBe(true);
    expect(magicArrayInstance.checkSizeOfStack(4)).toBe(false);
  });

  // Additional test to verify any display method that uses console output, if applicable
  test('should call display or log method in constructor (if applicable)', () => {
    new MagicArray([10, 20, 30]); // This instance creation is for testing console calls in constructor
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('MagicArray'));
  });
});