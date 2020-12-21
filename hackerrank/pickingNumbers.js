/**
 * Picking Numbers
 */

// Find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

let arr = [4, 5, 6, 3, 3, 1];

// ans: 3, { 4, 3, 3 }

function pickingNumbers(a) {

  let result = [];

  // Create a mapping of how many times a number occurs.
  a.forEach(e => result[e] = (result[e] || 0) + 1);

  let max = 0;

  result.forEach((e, i) => {
    const maybeMax = e + (result[i + 1] || 0);
    if (maybeMax > max) max = maybeMax;
  });

  return max;
}

console.log(pickingNumbers(arr));

// youtube: https://www.youtube.com/watch?v=NnzZ5Is06Ek