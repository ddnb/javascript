const basePrices = {
  Margherita: 7,
  Formaggio: 10,
  Caprese: 9,
};

const extraPrices = {
  ExtraSauce: 1,
  ExtraToppings: 2,
};

/**
 * Calculates the price of a pizza with optional extras.
 * @param {string} pizza - The type of pizza.
 * @param {...string} extras - The extras for the pizza.
 * @return {number} - The total price of the pizza.
 */
export function pizzaPrice(pizza, ...extras) {
  let price = basePrices[pizza] || 0;
  for (const extra of extras) {
    price += extraPrices[extra] || 0;
  }
  return price;
}

/**
 * Calculates the total price of an order of pizzas.
 * @param {PizzaOrder[]} orders - The array of pizza orders.
 * @return {number} - The total price of the order.
 */
export function orderPrice(orders) {
  return orders.reduce((total, order) => total += pizzaPrice(order.pizza, ...order.extras), 0);
}