/**
 *
 * Summary - Merges object `x` and `y`
 *
 * Description - This method merges two objects, `x` and `y` into one object
 *
 * @name mergeObjects
 *
 * @param {object} x - object
 * @param {object} y - object
 *
 * @access     public
 *
 * @since 1.2.0
 *
 * @return     {(object|Error)} object with contents of `x` and `y`
 */

module.exports = (x, y) => {
    return typeof x === "object" &&
        typeof y === "object" &&
        x !== null &&
        y !== null
        ? { ...x, ...y }
        : new Error("x or y is not of type object");
};
