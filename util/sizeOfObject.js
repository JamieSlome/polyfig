/**
 *
 * Summary - Calculates number of keys in `object`
 *
 * Description - This method calculates the number of keys
 * in an `object`
 *
 * @name sizeOfObject
 *
 * @param {object} x - object
 *
 * @access     public
 *
 * @since 1.2.0
 *
 * @return     {(number|Error)} Number of keys in object
 */

module.exports = (x) => {
    return typeof x === "object" && x !== null
        ? Object.keys(x).length
        : new Error("x is not of type object");
};
