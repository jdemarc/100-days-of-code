/**
 * Introduction to Currying and Partial Application
 */

// arity: the number of arguments it requires
// currying: convert a function of N arity to an arity of 1.

// An example...

//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3

// This is useful when you can't supply all of the arguments to a function at one time.

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3

// A partial application is described as applying a few arguments at a time and
// returning another function that is applied to more arguments.

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13

/**
 * Fill in the body of the add function so it uses currying to add parameters x, y, z.
 */

function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}

// OR

const add = x => y => z => x + y + z;

add(10)(20)(30);