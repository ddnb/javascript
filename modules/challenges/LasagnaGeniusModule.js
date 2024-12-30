/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Returns the cooking status of the lasagna.
 * @param {number} remainingTimeInMinutes - The remaining time in minutes.
 * @returns {string} - The cooking status.
 */
export function cookingStatus(remainingTimeInMinutes) {
  if (remainingTimeInMinutes === 0) {
    return 'Lasagna is done.';
  }

  if (!remainingTimeInMinutes) {
    return 'You forgot to set the timer.';
  }

  return 'Not done, please wait.';
}

/**
 * Calculates the preparation time based on the number of layers and average time per layer.
 * @param {string[]} layers - The layers of the lasagna.
 * @param {number} [averageTimePerLayer=2] - The average time per layer in minutes.
 * @returns {number} - The total preparation time.
 */
export function preparationTime(layers, averageTimePerLayer = 2) {
  return layers.length * averageTimePerLayer;
}

/**
 * Calculates the quantities of noodles and sauce needed based on the layers.
 * @param {string[]} layers - The layers of the lasagna.
 * @returns {Object} - The quantities of noodles and sauce.
 */
export function quantities(layers) {
  const GRAMS_OF_NOODLES_PER_LAYER = 50;
  const LITERS_OF_SAUCE_PER_LAYER = 0.2;

  return {
    noodles: layers.filter((layer) => layer === 'noodles').length * GRAMS_OF_NOODLES_PER_LAYER,
    sauce: layers.filter((layer) => layer === 'sauce').length * LITERS_OF_SAUCE_PER_LAYER,
  }
}

/**
 * Adds the secret ingredient from a friend's list to your list.
 * @param {string[]} friendsIngredients - The list of ingredients from a friend.
 * @param {string[]} myIngredients - Your list of ingredients.
 */
export function addSecretIngredient(friendsIngredients, myIngredients) {
  const secretIngredient = friendsIngredients[friendsIngredients.length - 1];
  myIngredients.push(secretIngredient);
}

/**
 * Scales the recipe based on the number of portions.
 * @param {Object} recipe - The original recipe.
 * @param {number} numberOfPortions - The number of portions to scale to.
 * @returns {Object} - The scaled recipe.
 */
export function scaleRecipe(recipe, numberOfPortions) {
  const scaledRecipe = { ...recipe };
  const scalingFactor = numberOfPortions / 2;

  for (let ingredient in scaledRecipe) {
    scaledRecipe[ingredient] *= scalingFactor;
  }

  return scaledRecipe;
}