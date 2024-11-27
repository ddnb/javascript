export class Strings {
  // static capitalize(word) {
  //   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  // }
  static capitalize(word) {
    if (word == null || word.length === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  // static capitalizeFirstWord(sentence) {
  //   if (sentence == null || sentence.length === 0) {
  //     return sentence;
  //   }
  //   const [firstWord, ...rest] = sentence.split(' ');
  //   return [capitalize(firstWord), ...rest].join(' ');
  // }
  static capitalizeFirstWord(sentence) {
    if (sentence == null) return sentence;
    const [firstWord, ...rest] = sentence.split(' ');
    return [Strings.capitalize(firstWord), ...rest].join(' ');
  }
}