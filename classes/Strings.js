export class Strings {
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  static capitalizeFirstWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}