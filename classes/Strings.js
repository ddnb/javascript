export class Strings {
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  // static capitalizeFirstWord(word) {
  //   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  // }
  static capitalizeFirstWord(sentence) {
    if (sentence == null || sentence.length === 0) {
      return sentence;
    }
    const [firstWord, ...rest] = sentence.split(' ');
    return [capitalize(firstWord), ...rest].join(' ');
  }
}