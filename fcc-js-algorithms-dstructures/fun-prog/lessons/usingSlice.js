/**
 * Return Part of an Array Using the slice Method
 */

// Slice returns a copy of certain elements of an array (or the whole array)
// First argument tells where to begin the slice,
// second argument tells where to end, non-inclusive.

// Default start at beginning of array to end of the array.

function sliceArr (anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}

var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);