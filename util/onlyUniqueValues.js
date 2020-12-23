/**
 *
 * Summary - Removes duplicate values from `array`
 *
 * Description - This method removes duplicate values from array `x`
 *
 * @name onlyUniqueValues
 *
 * @param {object} x - array
 *
 * @access     public
 *
 * @since 1.2.0
 *
 * @return     {(array|Error)} `array` with only unique values
 */

module.exports = (x) => {
    return Array.isArray(x) && x !== null
        ? x.filter((value, index, self) => {
              return self.indexOf(value) === index;
          })
        : new Error("x is not of type array");
};
