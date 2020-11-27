/**
 * Combine Two Arrays Using the concat Method
 */

/**
 * For arrays, the method is called on one,
 * then another array is provided as the argument to concat,
 * which is added to the end of the first array.
 */

/**
 * Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original.
 * The function should return the concatenated array.
 */

function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

// returns [1, 2, 3, 4, 5]