class challengesObject {
  static helloWorld() {
    console.log("Hello, World!");
  }

  static greet(name) {
    console.log(`Hi, ${name}!`);
  }

  static calculateFreelancerEarnings(hourlyRate, hoursWorked) {
    const rate = parseFloat(hourlyRate);
    const hours = parseFloat(hoursWorked);
    return rate * hours;
  }
}

module.exports = challengesObject;