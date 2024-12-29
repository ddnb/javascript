/**
 * Creates a translation function.
 * @param {number} dx - The translation distance along the x-axis.
 * @param {number} dy - The translation distance along the y-axis.
 * @returns {function(number, number): [number, number]} - The translation function.
 */
export function translate2d(dx, dy) {
  return function(x, y) {
    return [x + dx, y + dy];
  };
}

/**
 * Creates a scaling function.
 * @param {number} sx - The scaling factor along the x-axis.
 * @param {number} sy - The scaling factor along the y-axis.
 * @returns {function(number, number): [number, number]} - The scaling function.
 */
export function scale2d(sx, sy) {
  return function(x, y) {
    return [x * sx, y * sy];
  };
}

/**
 * Composes two transformation functions.
 * @param {function(number, number): [number, number]} f - The first transformation function.
 * @param {function(number, number): [number, number]} g - The second transformation function.
 * @returns {function(number, number): [number, number]} - The composed transformation function.
 */
export function composeTransform(f, g) {
  return function(x, y) {
    const [x1, y1] = f(x, y);
    return g(x1, y1);
  };
}

/**
 * Memoizes a transformation function.
 * @param {function(number, number): [number, number]} transform - The transformation function to memoize.
 * @returns {function(number, number): [number, number]} - The memoized transformation function.
 */
export function memoizeTransform(transform) {
  let lastX, lastY, lastResult;
  return function(x, y) {
    if (x === lastX && y === lastY) {
      return lastResult;
    }
    lastX = x;
    lastY = y;
    lastResult = transform(x, y);
    return lastResult;
  };
}