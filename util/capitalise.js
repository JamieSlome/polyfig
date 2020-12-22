/**
 *
 * Summary - Capitalise a string, `x`
 *
 * Description - This method capitalises the first letter of a string, `x`
 *
 * @name capitalise
 *
 * @param {string} x
 *
 * @access     public
 *
 * @return     {(string|Error)} `x` with the first letter capitalised
 */

module.exports = (x) => {
    return typeof x === "string" && x !== null
        ? x.charAt(0).toUpperCase() + x.slice(1)
        : new Error("x is not of type string");
};
