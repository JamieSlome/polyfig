/**
 *
 * Summary - Remove from *array* `x`, all of specific item `y`
 *
 * Description - This method removes
 * all of specific item of *any* `y` from *array* `x`
 *
 * @name removeFromArray
 *
 * @param {array} x - array
 * @param {any} y - any
 *
 * @access     public
 *
 * @since 1.0.2
 *
 * @return     {(array|Error)} `x` with all of specific item `y` removed
 */

module.exports = (x, y) => {
    return Array.isArray(x)
        ? x.filter((item) => item !== y)
        : new Error("x is not of type array");
};
