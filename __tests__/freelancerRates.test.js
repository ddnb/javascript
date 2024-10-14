const challenges = require('../challenges'); // Adjust the path if necessary

describe('Freelancer Rates', () => {
  test('should calculate total earnings correctly', () => {
    const hourlyRate = 50;
    const hoursWorked = 10;
    const expectedTotalEarnings = 500;

    const totalEarnings = challenges.freelancerRates(hourlyRate, hoursWorked);

    expect(totalEarnings).toBe(expectedTotalEarnings);
  });

  // ... other test cases as in the previous response
});