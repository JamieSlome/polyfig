/**
 *
 * Summary - Sorts objects in an `array` by an orderable key
 *
 * Description - This method orders objects in an `array` by a common
 * orderable key in each object
 *
 * @name sortArrayByKey
 *
 * @param {array} x - `array` of objects
 * @param {string} y - common key in each object to sort by
 *
 * @access     public
 *
 * @since 1.2.0
 *
 * @return     {(array|Error)} Sorted array `x` by orderable key `y`
 *
 */

module.exports = (x, y) => {
    return Array.isArray(x) && x !== null
        ? x.sort(function (a, b) {
              return a[y] < b[y] ? -1 : a[y] > b[y] ? 1 : 0;
          })
        : new Error("x is not of type array");
};
