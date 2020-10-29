/**
 * Var and Let
 */

// The var keyword lets you overwrite variables, and it does not throw an error.

var camper = 'James';
var camper = 'David';
console.log(camper);
// logs 'David'

// A variable can only be declared once when using let.

let fish = 'Tuna';
let fish = 'Salmon'; // throws an error

// the string "use strict"; catches common mistakes... such as not declaring a variable.

"use strict";
x = 3.14; // throws an error because x is not declared

/**
 * var/let scoping
 */

// A variable declared with the var keyword is declared globally, or locally if declared inside a function.
// A variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}


