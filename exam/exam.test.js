const {
  onlyPositiveNumbers,
  composedArray,
  capitalizeFirstLetter,
} = require("./exam");

test("Select positive numbers of -1,7,-7,2,-98", () => {
  expect(onlyPositiveNumbers([-1, 7, -7, 2, -98])).toStrictEqual([7, 2]);
});

test("Does not select negative numbers of -1,7,-7,2,-98", () => {
  expect(onlyPositiveNumbers([-1, 7, -7, 2, -98])).not.toContain(-1);
});

test("composed two arrays and only returns values that are unique in both arrays", function () {
  expect(composedArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toStrictEqual([
    1, 2, 6, 7,
  ]);
});

test("compose two arrays and does not return elements that are in both arrays", function () {
  array1 = [1, 2, 3, 4, 5];
  array2 = [3, 4, 5, 6, 7];
  expect(composedArray(array1, array2)).not.toContain(4);
  expect(composedArray(array1, array2)).not.toContain(3);
  expect(composedArray(array1, array2)).not.toContain(5);
});

test("should capitalize the first letter of a string", () => {
  expect(capitalizeFirstLetter("foo bar baz")).toBe("Foo Bar Baz");
});

test("should not capitalize any other letter of a string", () => {
  expect(capitalizeFirstLetter("foo")).not.toBe("FOo");
  expect(capitalizeFirstLetter("foo")).not.toBe("FoO");
});
