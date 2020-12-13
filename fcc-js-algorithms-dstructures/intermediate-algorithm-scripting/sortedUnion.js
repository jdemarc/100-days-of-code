/**
 * Sorted Union
 */

/*

Write a function that takes two or more arrays and returns a new array
of unique values in the order of the original provided arrays.

In other words, all values present from all arrays
should be included in their original order,
but with no duplicates in the final array.

The unique numbers should be sorted by their original order,
but the final array should not be sorted in numerical order.

*/

function uniteUnique(arr) {
  let args = [...arguments];

  let flattened = [].concat(...args);

  return flattened.filter((item, index) => flattened.indexOf(item) === index);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Step 1: get all arguments into one variable.
// Step 2: flatten arguments into a single array
// Step 3: filter all duplicates out.