/**
 * const keyword
 */

// const is the same as let, except the variable is read-only.

"use strict";
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error

// Note: It is common for developers to use uppercase variable identifiers for immutable values
// and lowercase or camelCase for mutable values (objects and arrays).

function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");

// Some developers prefer to assign all their variables using const by default,
// unless they know they will need to reassign the value.
// Only in that case, they use let.

// Objects (arrays and functions) assigned to a variable using const ARE STILL MUTABLE.

// ! Using the const declaration only prevents reassignment of the variable identifier.

const s = [5, 7, 2];
function editInPlace() {
  'use strict';

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  
}
editInPlace();

/**
 * Preventing object mutation.
 */

// Object.freeze(obj) allows you to prevent data mutation.

function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();