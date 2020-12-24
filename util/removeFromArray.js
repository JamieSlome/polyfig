/**
 *
 * @name removeFromArray
 *
 * @summary How do you remove a specific element from an array?
 *
 * @since 1.0.2
 *
 * @category Array
 *
 * @param {Array} x - Array
 * @param {any} y - Remove all instances of
 *
 * @return {Array} `x` with all instances of `y` removed
 *
 * @example
 * => polyfig.removeFromArray(["1","1",2,3], "1");
 * => [2,3]
 */

function removeFromArray(x, y) {
    return Array.isArray(x)
        ? x.filter((item) => item !== y)
        : new Error("x is not of type array");
}

module.exports = removeFromArray;
