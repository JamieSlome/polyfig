/**
 *
 * @name sortArrayByKey
 *
 * @summary How do you sort/order objects in an array by a common property?
 *
 * @since 1.2.0
 *
 * @category Object, Array
 *
 * @param {Array} x - Array of objects to sort/order
 * @param {string} y - Name of property to sort/order by
 *
 * @return {Array} Array `x` sorted/ordered by property name `y`
 *
 * @example
 * => polyfig.sortArrayByKey([{ poly: "poly" }, { poly: "fig" }], "poly");
 * => [{ poly: "fig" }, { poly: "poly" }]
 */

function sortArrayByKey(x, y) {
    return Array.isArray(x) && x !== null
        ? x.sort(function (a, b) {
              return a[y] < b[y] ? -1 : a[y] > b[y] ? 1 : 0;
          })
        : new Error("x is not of type array");
}

module.exports = sortArrayByKey;
