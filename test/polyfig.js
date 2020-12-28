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

    describe("isObjectEmpty", function () {
        it("should exist as a method", function () {
            expect(polyfig.isObjectEmpty).to.exist;
        });

        it("should validate an empty object", function () {
            const x = {};
            const outcome = polyfig.isObjectEmpty(x);

            outcome.should.equal(true);
        });

        it("should invalidate a populated object", function () {
            const x = {
                polyfig: "rules"
            };
            const outcome = polyfig.isObjectEmpty(x);

            outcome.should.equal(false);
        });
    });

    describe("isKeyInObject", function () {
        it("should exist as a method", function () {
            expect(polyfig.isKeyInObject).to.exist;
        });

        it("should validate an existing key", function () {
            const x = "polyfig";
            const y = {
                polyfig: "rules"
            };
            const outcome = polyfig.isKeyInObject(x, y);

            outcome.should.equal(true);
        });

        it("should invalidate a non-existing key", function () {
            const x = "polyapple";
            const y = {
                polyfig: "rules"
            };
            const outcome = polyfig.isKeyInObject(x, y);

            outcome.should.equal(false);
        });
    });

    describe("sortArrayByKey", function () {
        it("should exist as a method", function () {
            expect(polyfig.sortArrayByKey).to.exist;
        });

        it("should order array of objects by key with string value", function () {
            const x = [{ poly: "poly" }, { poly: "fig" }];
            const y = "poly";
            const outcome = polyfig.sortArrayByKey(x, y);

            outcome.should.eql([{ poly: "fig" }, { poly: "poly" }]);
        });

        it("should order array of objects by key with number value", function () {
            const x = [{ poly: 2 }, { poly: 1 }];
            const y = "poly";
            const outcome = polyfig.sortArrayByKey(x, y);

            outcome.should.eql([{ poly: 1 }, { poly: 2 }]);
        });
    });

    describe("mergeObjects", function () {
        it("should exist as a method", function () {
            expect(polyfig.mergeObjects).to.exist;
        });

        it("should merge two objects into one object", function () {
            const x = { poly: "fig" };
            const y = { fig: "poly" };
            const outcome = polyfig.mergeObjects(x, y);

            outcome.should.eqls({ poly: "fig", fig: "poly" });
        });
    });

    describe("sizeOfObject", function () {
        it("should exist as a method", function () {
            expect(polyfig.sizeOfObject).to.exist;
        });

        it("should calculate number of keys in object", function () {
            const x = { poly: "fig", fig: "poly", foly: "pig" };
            const outcome = polyfig.sizeOfObject(x);

            outcome.should.equal(3);
        });
    });

    describe("onlyUniqueValues", function () {
        it("should exist as a method", function () {
            expect(polyfig.onlyUniqueValues).to.exist;
        });

        it("should remove all duplicate values from array", function () {
            const outcome = polyfig.onlyUniqueValues([
                1,
                2,
                3,
                "1",
                "3",
                "2",
                1
            ]);
            outcome.should.eqls([1, 2, 3, "1", "3", "2"]);
        });
    });

    describe("addObjectProperty", function () {
        it("should exist as a method", function () {
            expect(polyfig.addObjectProperty).to.exist;
        });

        it("should add a new property to an object", function () {
            const x = {};
            const y = "poly";
            const z = ["fig"];
            polyfig.addObjectProperty(x, y, z);
            const outcome = x;
            outcome.should.eqls({ poly: ["fig"] });
        });
    });

    describe("endsWith", function () {
        it("should exist as a method", function () {
            expect(polyfig.endsWith).to.exist;
        });

        it("should validate that a string ends with a truthy character", function () {
            const x = "polyfig";
            const y = "g";
            const outcome = polyfig.endsWith(x, y);
            outcome.should.equal(true);
        });

        it("should invalidate that a string ends with a falsy character", function () {
            const x = "polyfig";
            const y = "i";
            const outcome = polyfig.endsWith(x, y);
            outcome.should.equal(false);
        });
    });

    describe("sumArray", function () {
        it("should exist as a method", function () {
            expect(polyfig.sumArray).to.exist;
        });

        it("should sum all array elements of type number", function () {
            const x = [1, 2, 3, 4, "1", 4, 2, "3"];
            const outcome = polyfig.sumArray(x);
            outcome.should.equal(16);
        });
    });
});
