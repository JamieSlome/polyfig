const polyfig = require("../index.js");
const expect = require("chai").expect;

require("chai").should();

describe("polyfig", function () {
    describe("removeFromString", function () {
        it("should exist as a method", function () {
            expect(polyfig.removeFromString).to.exist;
        });

        it("should remove all occurrences of a string from another", function () {
            const x = "polyfig is a simple JavaScript utility library";
            const y = "polyfig";
            const outcome = polyfig.removeFromString(x, y);
            outcome.should.equal(" is a simple JavaScript utility library");
        });
    });

    describe("removeFromArray", function () {
        it("should exist as a method", function () {
            expect(polyfig.removeFromArray).to.exist;
        });

        it("should remove all occurrences of a specific number from array", function () {
            const x = [1, 2, 3, 2, 1, 2, 3, 2, 1];
            const y = 2;
            const outcome = polyfig.removeFromArray(x, y);
            outcome.should.eql([1, 3, 1, 3, 1]);
        });

        it("should remove all occurrences of a specific string from array", function () {
            const x = ["1", "2", "3", "2", "1", "2", "3", "2", "1"];
            const y = "2";
            const outcome = polyfig.removeFromArray(x, y);
            outcome.should.eql(["1", "3", "1", "3", "1"]);
        });
    });

    describe("deleteFromObj", function () {
        it("should exist as a method", function () {
            expect(polyfig.deleteFromObj).to.exist;
        });

        it("should delete a property from an object", function () {
            const x = {
                propOne: "polyfig",
                propTwo: "rules"
            };
            const y = "propOne";

            polyfig.deleteFromObj(x, y);

            x.should.eqls({ propTwo: "rules" });
        });
    });

    describe("isEmail", function () {
        it("should exist as a method", function () {
            expect(polyfig.isEmail).to.exist;
        });

        it("should validate a truthy email", function () {
            const x = "jamie@418sec.com";
            const outcome = polyfig.isEmail(x);

            outcome.should.equal(true);
        });

        it("should invalidate a false email", function () {
            const x = "jamie@418sec..com";
            const outcome = polyfig.isEmail(x);

            outcome.should.equal(false);
        });
    });
});
