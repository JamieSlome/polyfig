/**
 *
 * Summary - Validate if key `x` exists in object `y`
 *
 * Description - This method validates that in object `y`,
 * there exists a key with name `x`
 *
 * @name isKeyInObject
 *
 * @param {object} x - property name
 * @param {string} y - object
 *
 * @access     public
 *
 * @return     {(boolean|Error)} true/false | Error
 */

module.exports = (x, y) => {
    return typeof y === "object" && y !== null && typeof x === "string"
        ? y.hasOwnProperty(x)
        : new Error("y is not of type object or x is not type string");
};
