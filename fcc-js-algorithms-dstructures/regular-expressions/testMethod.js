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

// Specify only the lower number of matches.

let haStr = "Hazzzah";
let haRegex = /haz{4,}ah/i;
// the above regex says there must be at least 4 z's

let haResult = haRegex.test(haStr);

console.log('Testing with quantity specifers, specifying only lower limit: ', haResult);

// Match the exact amount of a quantity by just putting an integer in the braces.
// {4}

let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i;
let timResult = timRegex.test(timStr);

console.log('Testing with specific quantity: ', timResult);

// Check for possible existence of an element with ?.
// the 'previous element is optional'

let favWord = "favorite";
let favRegex = /favou?rite/;
let favResult = favRegex.test(favWord);

console.log('Test for optional element: ', favResult);

// Look aheads.
// Check for a pattern further along within the string.
// Negative lookaheads allow you to check a pattern DOES NOT exist further along in the string.

let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/;
let pwResult = pwRegex.test(sampleWord);

console.log('Lookahead test: ', pwResult);