/**
 * Rest parameters
 */

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

// The rest parameter eliminates the need to check the args array
// and allows us to apply map(), filter() and reduce() on the parameters array.

// Allows sum function to take any number of arguments.
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

