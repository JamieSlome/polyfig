/**
 *
 * @name isObjectEmpty
 *
 * @summary How do you validate that an object is empty?
 *
 * @since 1.2.0
 *
 * @category Object
 *
 * @param {Object} x - Object to validate is empty
 *
 * @return {boolean} `true` or `false`
 *
 * @example
 * => polyfig.isObjectEmpty({});
 * => true
 */

function isObjectEmpty(x) {
    return typeof x === "object" && x !== null
        ? Object.keys(x).length === 0 && x.constructor === Object
        : new Error("x is not of type object");
}

module.exports = isObjectEmpty;
