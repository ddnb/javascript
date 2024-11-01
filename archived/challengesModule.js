// Object containing JavaScript challenges
const challenges = {
    // Function to greet with "Hello, World!"
    helloWorld: () => {
      console.log("Hello, World!");
    },
  
    // Function to greet with "Hi" followed by the name
    hi: (name) => {
      console.log(`Hi, ${name}!`);
    },
  
    // Function to calculate freelancer earnings
    freelancerRates: (hourlyRate, hoursWorked) => {
      // Convert input strings to numbers
      hourlyRate = parseFloat(hourlyRate);
      hoursWorked = parseFloat(hoursWorked);
  
      // Calculate total earnings
      const totalEarnings = hourlyRate * hoursWorked;
  
      return totalEarnings;
    },
  };
  
// Export the challenges object
module.exports = challenges;