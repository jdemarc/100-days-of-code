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

/**
 * Wildcard testing
 */

// the character '.'
// aka dot, aka period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./;
let wildResult = unRegex.test(exampleStr);

console.log('Using wildcard matching: ', wildResult);

// strings such as: run, sun, fun, pun, bun will match the above regex.

// Test the end of strings using the anchor character, $.

let caboose = "The last car on a train is the caboose";
let anchorRegex = /caboose$/;
let anchorResult = anchorRegex.test(caboose);

console.log('Test using anchor character: ', anchorResult);

// Quantity specifiers, { }

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i;
let ohResult = ohRegex.test(ohStr);

console.log('Testing with quantity specifers: ', ohResult);