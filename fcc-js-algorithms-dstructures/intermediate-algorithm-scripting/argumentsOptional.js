/**
 * Arguments Optional
 * 
 * Create a function that sums two arguments together.
 * If only one argument is provided, then return a function that expects one argument and returns the sum.
 */

function addTogether() {

  // Function that checks of the argument is a number.
  const validate = function(num) {
    if (typeof num !== 'number') return undefined;
    else return num;
  }

  let args = [...arguments];

  // If there are two parameters.
  if (args.length > 1) {

    // check that arguments are numbers.
    // this also ignores any arguments beyond the first two.
    let first = validate(args[0]);
    let second = validate(args[1]);

    if (!first || !second) {
      return undefined;
    } else {
      return first + second;
    }
  } else {
    let third = args[0];

    if (validate(third)) {
      return function (arg) {
        if (!third || !validate(arg)) return undefined;
        else return third + arg;
      }
    };
  }
}

console.log(addTogether(2, 3));
console.log(addTogether(5)(7));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));