/**
 * Arguments Optional
 * 
 * Create a function that sums two arguments together.
 * If only one argument is provided, then return a function that expects one argument and returns the sum.
 */

function addTogether() {
  console.log(...arguments);
  console.log(arguments.length);
  
  return false;
}

console.log(addTogether(2, 3));