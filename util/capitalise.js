/**
 *
 * @name capitalise
 *
 * @summary How do you capitalise the first letter of a string?
 *
 * @since 1.2.0
 *
 * @category string
 *
 * @param {string} string To capitalise
 *
 * @return {string} Capitalised string
 *
 * @example
 * => polyfig.capitalise("hello");
 * => "Hello"
 */

function capitalise(x) {
    return typeof x === "string" && x !== null
        ? x.charAt(0).toUpperCase() + x.slice(1)
        : new Error("x is not of type string");
}

module.exports = capitalise;
