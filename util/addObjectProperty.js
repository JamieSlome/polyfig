/**
 *
 * @name addObjectProperty
 *
 * @summary How do you add a key-value pair or new property to an object?
 *
 * @since 1.3.0
 *
 * @category Object
 *
 * @param {Object} x - Object to add new property to
 * @param {string} y - Property name
 * @param {any} z - Property value
 *
 * @return {Object} Provided object with new property added
 *
 * @example
 * => polyfig.addObjectProperty({}, "poly", ["fig"]);
 * => {"poly": ["fig"]}
 */

function addObjectProperty(x, y, z) {
    return typeof x === "object" && x !== null && typeof y === "string"
        ? (x[y] = z)
        : new Error("x is not of type object or y is not of type string");
}

module.exports = addObjectProperty;
