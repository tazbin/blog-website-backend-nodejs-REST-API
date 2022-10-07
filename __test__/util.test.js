const {
    makeObjectSelected,
    makeObjectExcept
} = require('../util');

describe('util test suit', () => {

    test('should return object with selected keys', () => {
        details = {
            name: "tazbinur",
            address: "jashore",
            age: 100,
            hasCar: true,
            visited: ["dhaka", "khulna", "barishal"]
        }
        selectedDetails = {
            name: "tazbinur",
            address: "jashore",
            visited: ["dhaka", "khulna", "barishal"]
        }
        result = makeObjectSelected(details, ["name", "address", "visited"]);
        expect(result).toStrictEqual(selectedDetails);

    });

    test('should return object without selected keys', () => {

        details = {
            name: "tazbinur",
            address: "jashore",
            age: 100,
            hasCar: true,
            visited: ["dhaka", "khulna", "barishal"]
        }
        newDetails = {
            name: "tazbinur",
            address: "jashore",
            visited: ["dhaka", "khulna", "barishal"]
        }
        result = makeObjectExcept(details, ["age", "hasCar"]);
        expect(result).toStrictEqual(newDetails);

    });

});