/**
 *
 * @name sizeOfObject
 *
 * @summary How do you calculate the number of properties inside an object?
 *
 * @since 1.2.0
 *
 * @category Object
 *
 * @param {Object} x - Object
 *
 * @return {Number} Number of properties in object `x`
 *
 * @example
 * => polyfig.sizeOfObject({"poly": "fig", "fig": "poly"});
 * => 2
 */

function sizeOfObject(x) {
    return typeof x === "object" && x !== null
        ? Object.keys(x).length
        : new Error("x is not of type object");
}

module.exports = sizeOfObject;
