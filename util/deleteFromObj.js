/**
 *
 * Summary - Remove from object `x`, property `y`
 *
 * Description - This method removes
 * property `y` from *object* `x`
 *
 * @name deleteFromObj
 *
 * @param {object} x - object
 * @param {string} y - property name
 *
 * @access     public
 *
 * @return     {(boolean|Error)} true/false | Error
 */

module.exports = (x, y) => {
    return typeof x === "object" && x !== null
        ? delete x[y]
        : new Error("x is not of type object");
};
