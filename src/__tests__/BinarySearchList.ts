import binary_fn from "@code/BinarySearchList";

describe("Binary Search Tests", () => {
    test("binary search array", function () {
        const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
        expect(binary_fn(foo, 69)).toEqual(true);
        expect(binary_fn(foo, 1336)).toEqual(false);
        expect(binary_fn(foo, 69420)).toEqual(true);
        expect(binary_fn(foo, 69421)).toEqual(false);
        expect(binary_fn(foo, 1)).toEqual(true);
        expect(binary_fn(foo, 0)).toEqual(false);
    });

    test("finds an item in the middle of the array", () => {
        expect(binary_fn([1, 2, 3, 4, 5], 3)).toBe(true);
    });

    test("returns false when the item is not in the array", () => {
        expect(binary_fn([1, 2, 3, 4, 5], 6)).toBe(false);
    });

    test("finds an item at the beginning of the array", () => {
        expect(binary_fn([1, 2, 3, 4, 5], 1)).toBe(true);
    });

    test("finds an item at the end of the array", () => {
        expect(binary_fn([1, 2, 3, 4, 5], 5)).toBe(true);
    });

    test("returns false for an empty array", () => {
        expect(binary_fn([], 1)).toBe(false);
    });

    test("returns false when looking for an item not between existing values", () => {
        expect(binary_fn([10, 20, 30, 40, 50], 25)).toBe(false);
    });
});
