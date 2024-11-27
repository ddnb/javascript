// Import the Strings class
import { Strings } from '../../classes/Strings.js';

// Test the capitalize method
test('capitalize should capitalize the first letter of a word', () => {
  expect(Strings.capitalize('hello')).toBe('Hello');
  expect(Strings.capitalize('WORLD')).toBe('World');
  expect(Strings.capitalize('javaScript')).toBe('Javascript');
  expect(Strings.capitalize('')).toBe('');
  expect(Strings.capitalize(null)).toBe(null);
  expect(Strings.capitalize(undefined)).toBe(undefined);
});

// Test the capitalizeFirstWord method
test('capitalizeFirstWord should capitalize the first word of a sentence', () => {
  expect(Strings.capitalizeFirstWord('hello world')).toBe('Hello world');
  expect(Strings.capitalizeFirstWord('HELLO WORLD')).toBe('Hello WORLD');
  expect(Strings.capitalizeFirstWord('javaScript is fun')).toBe('Javascript is fun');
  expect(Strings.capitalizeFirstWord('')).toBe('');
  expect(Strings.capitalizeFirstWord(null)).toBe(null);
  expect(Strings.capitalizeFirstWord(undefined)).toBe(undefined);
});