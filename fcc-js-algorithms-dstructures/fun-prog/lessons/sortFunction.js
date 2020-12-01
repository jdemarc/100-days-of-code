/**
 * Sort an Array Alphabetically using the sort Method
 */

// The sort method sorts elements according to a callback function.

// The default method sorts by Unicode point value. This can return unexpected results.

// The callback function is typically referred to as the compare function.

/**
 * If compareFunction(a,b) returns a value less than 0 for two elements a and b,
 * then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b,
 * then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b,
 * then a and b will remain unchanged.
 */

function alphabeticalOrder(arr) {
  return arr.sort((a, b) => a > b);
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// Without mutating global variable...

var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  return arr.slice().sort((a, b) => a > b)
}

console.log(nonMutatingSort(globalArray));
