/**
 * Arrow functions
 */

// anonymous functions... an example.

const myFunc = function() {
  const myVar = "value";
  return myVar;
}

// becomes...

const myFuncTwo = () => {
  const myVar = "value";
  return myVar;
}

// If there is no function body and only a return value, it can be written even more simply.

const myFuncThree = () => "value";

// Example 2
var magic = function() {
  "use strict";
  return new Date();
};

// becomes...
const magic = () => new Date();

/**
 * Arrow functions with parameters
 */

// doubles input value and returns it
const doubler = (item) => item * 2;

// the same function, without the argument parentheses
const doublerTwo = item => item * 2;

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;

// Example
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

// becomes...
const myConcat = (arr1, arr2) => arr1.concat(arr2);

/**
 * Arrow functions with default parameters.
 */

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

// Example
// Adds 1 if no value is specified.
const increment = (number, value = 1) => number + value;

