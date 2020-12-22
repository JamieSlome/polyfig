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
 * @since      1.1.0
 * @access     public
 *
 * @return     {(boolean|Error)} true/false | Error
 */

module.exports = (x) => {
    return typeof x === "string" && x !== null
        ? /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
              x.toLowerCase()
          )
        : new Error("x is not of type string");
};
