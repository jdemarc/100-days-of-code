/**
 * Arguments Optional
 * 
 * Create a function that sums two arguments together.
 * If only one argument is provided, then return a function that expects one argument and returns the sum.
 */

function addTogether() {

  
  let args = [...arguments];

  let valid = function (args) {
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] !== "number") {
        console.log(args[i]);
        return undefined;
      }
    }
  }

  valid(args);

  return false;
}

console.log(addTogether(2, 3));
// console.log(addTogether(5)(7));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
// console.log(addTogether(2)([3]));