// @ts-check

/**
 * Class representing a freelancer's rate calculations.
 */
export class FreelancerRates {
  /**
   * Creates an instance of FreelancerRates.
   * @param {number} ratePerHour - The hourly rate.
   */
  constructor(ratePerHour) {
    this.ratePerHour = ratePerHour;
    this.hoursPerDay = 8;
    this.fullMonthDays = 22; // Assume 22 working days in a month
  }

  /**
   * The day rate, given a rate per hour.
   *
   * @returns {number} the rate per day
   */
  dayRate() {
    return this.hoursPerDay * this.ratePerHour;
  }

  /**
   * Calculates the number of days in a budget, rounded down.
   *
   * @param {number} budget - The total budget.
   * @returns {number} the number of days
   */
  daysInBudget(budget) {
    return Math.floor(budget / this.dayRate());
  }

  /**
   * Calculates the rate per month with a discount.
   *
   * @param {number} numDays - The total number of days worked.
   * @param {number} discount - The discount percentage, e.g., 20% written as 0.2.
   * @returns {number} the rounded up monthly rate
   */
  priceWithMonthlyDiscount(numDays, discount) {
    // Determine how many full months the project spans
    const fullMonths = Math.floor(numDays / this.fullMonthDays);
    const remainingDays = numDays % this.fullMonthDays;

    // Calculate discounted price for the full months
    const discountedPrice =
      fullMonths *
      this.dayRate() * 
      this.fullMonthDays * 
      (1 - discount);

    // Calculate price for the remaining days without discount
    const remainingPrice = remainingDays * this.dayRate();

    // Total price is the sum of the discounted price and the remaining price
    const totalPrice = discountedPrice + remainingPrice;

    // Return the total price, rounded up
    return Math.ceil(totalPrice);
  }
}
