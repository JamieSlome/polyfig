/**
 *
 * @name isEmail
 *
 * @summary How do you validate an e-mail address?
 *
 * @since 1.2.0
 *
 * @category string
 *
 * @param {string} x - To validate
 *
 * @return {boolean} `true` or `false`
 *
 * @example
 * => polyfig.isEmail("jamie418sec.com");
 * => false
 */

function isEmail(x) {
    return typeof x === "string" && x !== null
        ? /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
              x.toLowerCase()
          )
        : new Error("x is not of type string");
}

module.exports = isEmail;
