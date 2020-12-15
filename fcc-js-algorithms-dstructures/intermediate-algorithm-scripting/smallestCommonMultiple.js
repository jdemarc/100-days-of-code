/**
 * Smallest Common Multiple
 */

/*

Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that
is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

*/

function smallestCommons(arr) {
  // Need to find range from smallest to largest given range from array.
  let nums = [];
  
  // Array numbers may not be given in order, so use Math.min, Math.max.
  let a = Math.min(...arr);
  let b = Math.max(...arr);

  // Create range.
  for (let i = a; i <= b; i++) {
    nums.push(i);
  }

  console.log(nums);

  // Continuation...

  // Check if all the numbers are a multiple of the max.
  // If they are not, increment max. Check again.
  // Continue until all numbers are a multiple of the max.


  return arr;
}


console.log(smallestCommons([1,5]));