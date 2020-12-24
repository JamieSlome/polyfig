/**
 *
 * @name onlyUniqueValues
 *
 * @summary How do you remove duplicate values from an array?
 *
 * @since 1.2.0
 *
 * @category Array
 *
 * @param {Array} x - Array with non-unique values
 *
 * @return {Array} Array with only unique values
 *
 * @example
 * => polyfig.onlyUniqueValues([1,2,3,1]);
 * => [1,2,3]
 */

function onlyUniqueValues(x) {
    return Array.isArray(x) && x !== null
        ? x.filter((value, index, self) => {
              return self.indexOf(value) === index;
          })
        : new Error("x is not of type array");
}

module.exports = onlyUniqueValues;
