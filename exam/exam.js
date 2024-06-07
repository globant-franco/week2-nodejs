// Create a function that receives an array of numbers and returns an array containing only the positive numbers.

const onlyPositiveNumbers = (numbers) => numbers.filter((num) => num >= 0);

console.log(
  "Positive numbers of [-10, 0, -1, 3, 5, -9] are: ",
  onlyPositiveNumbers([-10, 0, -1, 3, 5, -9])
);

// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

const composedArray = (array1, array2) =>
  array1
    .concat(array2)
    .filter((number) => !array1.includes(number) || !array2.includes(number));

console.log(
  "Composed array result ",
  composedArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
);

// Create a function that will capitalize the first letter of each word in a text
const capitalizeFirstLetter = (text) =>
  text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

console.log(
  "Capitalize first letter result: ",
  capitalizeFirstLetter("hello world! 1 BAC toast")
);

module.exports = { onlyPositiveNumbers, composedArray, capitalizeFirstLetter };
