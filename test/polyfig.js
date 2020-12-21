const polyfig = require("../index.js");
const expect = require("chai").expect;

require("chai").should();

describe("polyfig", function () {
    describe("removeFrom", function () {
        it("should exist as a method", function () {
            expect(polyfig.removeFrom).to.exist;
        });

        it("should remove all occurrences of a string from another", function () {
            const x = "polyfig is a simple JavaScript utility library";
            const y = "polyfig";
            const outcome = polyfig.removeFrom(x, y);
            outcome.should.equal(" is a simple JavaScript utility library");
        });
    });
});
