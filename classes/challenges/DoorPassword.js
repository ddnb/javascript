import { Challenge } from './Challenge.js';

class DoorPassword extends Challenge {
  constructor() {
    super(`${DoorPassword.name}`);
    this.display();
  }

  static capitalize(word) {
    if (typeof word !== 'string' || word.length === 0) {
      return ''; // Return an empty string for invalid inputs
    }
    return word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
  }

  static frontDoorResponse(line) {
    return line.length > 0 ? line[0] : "";
  }

  static frontDoorPassword(word) {
    return this.capitalize(word);
  }

  static backDoorResponse(line) {
    line = line.trim();
    return line.length > 0 ? line[line.length - 1] : "";
  }

  static backDoorPassword(word) {
    return this.capitalize(word) + ", please";
  }
}

export default DoorPassword;