/**
 *
 * @name endsWith
 *
 * @summary How do you check if a string ends with a particular character?
 *
 * @since 1.4.0
 *
 * @category string
 *
 * @param {string} x - `string` to check
 * @param {string} y - Character to validate as a suffix
 *
 * @return {boolean} `true` or `false`
 *
 * @example
 * => polyfig.endsWith("polyfig", "g");
 * => true
 */

function endsWith(x, y) {
    return typeof x === "string" && typeof y === "string"
        ? x.indexOf(y, x.length - y.length) !== -1
        : new Error("x or y is not of type string");
}

module.exports = endsWith;
