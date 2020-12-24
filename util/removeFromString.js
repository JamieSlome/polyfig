/**
 *
 * @name removeFromString
 *
 * @summary How do you remove a substring from another string?
 *
 * @since 1.0.2
 *
 * @category string
 *
 * @param {string} x - String to be reduced
 * @param {string} y - Remove all instances of
 *
 * @return {string} `x` with substrings matching `y` removed
 *
 * @example
 * => polyfig.removeFromString("polyfig polyfig", "fig");
 * => "poly poly"
 */

function removeFromString(x, y) {
    return typeof x === "string" && typeof y === "string"
        ? x.split(y).join("")
        : new Error("Both inputs are not of type string");
}

module.exports = removeFromString;
