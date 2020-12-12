/**
 * Test Method
 */

// Returns true or false if the regex 'pattern' is found.

let str = "Hello world."
let regex = /hello/;

console.log('Literal string matching: ',regex.test(str));

// Above, we are testing for the literal match of the word 'Hello'.
// 'hello' returns false.

// You can search for multiple literal strings using the OR operationg, '|'

/**
 * OR operator
 */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

console.log('Literal string with OR:', result);

/**
 * Ignoring case.
 */

// the 'i' flag.

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let uncasedResult = fccRegex.test(myString);

console.log('Ignoring case matching: ', uncasedResult);