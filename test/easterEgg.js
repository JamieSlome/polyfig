const polyfig = require("../index.js");
const expect = require("chai").expect;

require("chai").should();

describe("polyfig", function () {
    describe("getEasterEgg", function () {
        it("should exist as a method", function () {
            expect(polyfig.getEasterEgg).to.exist;
        });

        it("should get the easter egg", function () {
            const easterEgg = polyfig.getEasterEgg();
            easterEgg.should.equal(
                "A package with a great name, but no great meaning; yet."
            );
        });
    });
});
