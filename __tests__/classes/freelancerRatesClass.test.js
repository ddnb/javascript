import { FreelancerRates } from '../../classes/challenges/FreelancerRates.js';

describe('FreelancerRates', () => {
  const ratePerHour = 50; // Example hourly rate
  const freelancer = new FreelancerRates(ratePerHour);

  test('should calculate the day rate correctly', () => {
    const expectedDayRate = freelancer.hoursPerDay * ratePerHour;
    expect(freelancer.dayRate()).toBe(expectedDayRate);
  });

  test('should calculate the number of days in budget correctly', () => {
    const budget = 1000; // Example budget
    const expectedDays = Math.floor(budget / freelancer.dayRate());
    expect(freelancer.daysInBudget(budget)).toBe(expectedDays);
  });

  test('should calculate the total price with monthly discount correctly', () => {
    const numDays = 45; // Total days worked
    const discount = 0.2; // 20% discount

    // Calculate full months and remaining days
    const fullMonths = Math.floor(numDays / freelancer.fullMonthDays);
    const remainingDays = numDays % freelancer.fullMonthDays;

    // Calculate the discounted price for full months
    const discountedPrice =
      fullMonths * freelancer.dayRate() * freelancer.fullMonthDays * (1 - discount);

    // Calculate the price for the remaining days without discount
    const remainingPrice = remainingDays * freelancer.dayRate();

    // Total expected price
    const expectedTotalPrice = Math.ceil(discountedPrice + remainingPrice);

    expect(freelancer.priceWithMonthlyDiscount(numDays, discount)).toBe(expectedTotalPrice);
  });

  test('should round up the total price correctly', () => {
    const numDays = 23; // Total days worked
    const discount = 0.15; // 15% discount

    // Calculate full months and remaining days
    const fullMonths = Math.floor(numDays / freelancer.fullMonthDays);
    const remainingDays = numDays % freelancer.fullMonthDays;

    // Calculate the discounted price for full months
    const discountedPrice =
      fullMonths * freelancer.dayRate() * freelancer.fullMonthDays * (1 - discount);

    // Calculate the price for the remaining days without discount
    const remainingPrice = remainingDays * freelancer.dayRate();

    // Total expected price
    const expectedTotalPrice = Math.ceil(discountedPrice + remainingPrice);

    expect(freelancer.priceWithMonthlyDiscount(numDays, discount)).toBe(expectedTotalPrice);
  });
});
