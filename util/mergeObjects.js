/**
 *
 * @name mergeObjects
 *
 * @summary How do you merge two objects together?
 *
 * @since 1.2.0
 *
 * @category Object
 *
 * @param {Object} x - Object to merge
 * @param {Object} y - Object to merge
 *
 * @return {Object} Merged object with contents of `x` and `y`
 *
 * @example
 * => polyfig.mergeObjects({"poly": "fig"}, {"fig": "poly"});
 * => {"poly": "fig","fig": "poly"}
 */

function mergeObjects(x, y) {
    return typeof x === "object" &&
        typeof y === "object" &&
        x !== null &&
        y !== null
        ? { ...x, ...y }
        : new Error("x or y is not of type object");
}

module.exports = mergeObjects;
