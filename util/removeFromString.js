/**
 *
 * Summary - Remove from `x` all of `y`
 *
 * Description - This method removes
 * all occurrences of *string* `y` from *string* `x`
 *
 * @name removeFromString
 *
 * @param {string} x - string
 * @param {string} y - string
 *
 * @since      1.0.0
 * @access     public
 *
 * @return `x` with all occurrences of `y` removed
 */

module.exports = (x, y) => {
    return typeof x === "string" && typeof y === "string"
        ? x.split(y).join("")
        : new Error("Both inputs are not of type string");
};
