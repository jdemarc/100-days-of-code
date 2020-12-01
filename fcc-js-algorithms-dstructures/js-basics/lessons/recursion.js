/**
 * Recursion
 */

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum (arr, n) {
  // Base case. Recursive functions must have a base case to know when to stop.
  if (!n) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
    // Using third test case...
    // sum + 4;
    // (sum + 4) + 3
    // ((sum + 4) + 3) + 2)
  }
}

// Test cases --
// sum([1], 0) should equal 0.

// sum([2, 3, 4], 1) should equal 2.

// sum([2, 3, 4, 5], 3) should equal 9.