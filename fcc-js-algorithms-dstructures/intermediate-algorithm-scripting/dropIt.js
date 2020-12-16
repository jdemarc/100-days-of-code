/**
 * Drop It
 */

/*

Given the array arr, iterate through and remove each element
starting from the first element (the 0 index) until the function func returns true
when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied,
otherwise, arr should be returned as an empty array.

*/

function dropElements(arr, func) {

  let result = [];

  // Iterate over the array.
  for (let i = 0; i < arr.length; i++) {

    // Find the first element that satisfies the callback.
    if (func(arr[i])) {
      
      // Push everything from the original array, starting from the first element that satisfies the cb,
      // into the results array. Then break.
      for (let j = i; j < arr.length; j++) {
        result.push(arr[j]);
      }

      break;
    }
  }

  return result;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));