export class Challenge {
  constructor(challengeName) {
    this.challengeName = challengeName;
  }

  display() {
    console.log("=====================================");
    console.log(`           ${this.challengeName}     `);
    console.log("=====================================");
  }
}