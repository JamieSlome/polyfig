/**
 *
 * @name deleteFromObj
 *
 * @summary How do you delete or remove a property from an object?
 *
 * @since 1.1.0
 *
 * @category Object
 *
 * @param {Object} x - Object
 * @param {string} y - Property to remove
 *
 * @return {boolean} `true` or `false`
 *
 * @example
 * => polyfig.deleteFromObj({"polyfig": "fig"}, "polyfig");
 * => {}
 */

function deleteFromObj(x, y) {
    return typeof x === "object" && x !== null
        ? delete x[y]
        : new Error("x is not of type object");
}

module.exports = deleteFromObj;
