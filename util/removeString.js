/**
 *
 * Summary: Remove all occurrences of a `string` from any other `string`
 *
 * Description: This method removes all occurrences of a
 * specific `string` from another `string`
 *
 * @param {string} item - string
 * @param {string} otherItem - string
 *
 * @since      1.0.0
 * @access     public
 *
 * @return `otherItem` will all occurrences of `item` removed
 */

module.exports = (item, otherItem) => {
    return typeof item === "string" && typeof otherItem === "string"
        ? otherItem.split(item).join("")
        : new Error("Both inputs are not of type string");
};
