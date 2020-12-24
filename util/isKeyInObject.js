/**
 *
 * @name isKeyInObject
 *
 * @summary How do you validate that a key or property exists in an object?
 *
 * @since 1.2.0
 *
 * @category Object
 *
 * @param {Object} x - Object to check for key or property
 * @param {string} y - Property to validate exists in object
 *
 * @return {boolean} `true` or `false`
 *
 * @example
 * => polyfig.isKeyInObject({"poly": "fig"}, "poly");
 * => true
 */

function isKeyInObject(x, y) {
    return typeof y === "object" && y !== null && typeof x === "string"
        ? y.hasOwnProperty(x)
        : new Error("y is not of type object or x is not type string");
}

module.exports = isKeyInObject;
