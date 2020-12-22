/**
 *
 * Summary - Validate if object `x` is empty
 *
 * Description - This method validates that
 * `x` is an empty object
 *
 * @name isObjectEmpty
 *
 * @param {object} x
 *
 * @access     public
 *
 * @return     {(boolean|Error)} `true` or `false`
 */

module.exports = (x) => {
    return typeof x === "object" && x !== null
        ? Object.keys(x).length === 0 && x.constructor === Object
        : new Error("x is not of type object");
};
