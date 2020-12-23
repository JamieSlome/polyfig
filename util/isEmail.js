/**
 *
 * Summary - Validate an e-mail address, `x`
 *
 * Description - This method validates that
 * `x` is an e-mail address
 *
 * @name isEmail
 *
 * @param {string} x
 *
 * @access     public
 *
 * @since 1.2.0
 *
 * @return     {(boolean|Error)} `true` or `false`
 */

module.exports = (x) => {
    return typeof x === "string" && x !== null
        ? /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
              x.toLowerCase()
          )
        : new Error("x is not of type string");
};
