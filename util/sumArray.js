/**
 *
 * @name sumArray
 *
 * @summary How do you find the sum of an array of numbers?
 *
 * @since 1.4.0
 *
 * @category Array
 *
 * @param {string} x - Array
 *
 * @return {Number} Sum of the number array elements
 *
 * @example
 * => polyfig.sumArray([1,2,3,4]]);
 * => 10
 */

function sumArray(x) {
    return Array.isArray(x) && x !== null
        ? x.filter((a) => typeof a === "number").reduce((a, b) => a + b, 0)
        : new Error("x is not of type array");
}

module.exports = sumArray;
