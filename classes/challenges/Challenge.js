/** Base class for coding challenges */
export class Challenge {
  // constructor(challengeName) {
  //   this.challengeName = challengeName;
  // }
  #challengeName;
  constructor(challengeName) {
    if (!challengeName || typeof challengeName !== 'string') {
      throw new TypeError('challengeName must be a non-empty string');
    }
    this.#challengeName = challengeName;
  }

  display() {
    console.log("=====================================");
    console.log(`           ${this.challengeName}     `);
    console.log("=====================================");
  }
}