/**
 * Use the every Method to Check that Every Element in an Array Meets a Criteria
 */

// The every method checks if EVERY element passes a test.
// It returns a boolean.

/**
 * Prompt:
 * Use the every method inside the checkPositive function to check if every element in arr is positive.
 * The function should return a Boolean value.
 */

function checkPositive(arr) {
  return arr.every((el) => el > 0);
}

console.log(checkPositive([1, 2, 3, -4, 5]));