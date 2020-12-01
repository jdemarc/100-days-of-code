/**
 * Use the some Method to Check that Any Elements in an Array Meet a Criteria
 */

// Works with arrays to check if ANY element passes a test.
// Returns a boolean value.

/**
 * Prompt:
 * Use the some method inside the checkPositive function to check if any element in arr is positive.
 * The function should return a Boolean value.
 */

function checkPositive(arr) {
  return arr.some((el) => el > 0)
}
checkPositive([1, 2, 3, -4, 5]);