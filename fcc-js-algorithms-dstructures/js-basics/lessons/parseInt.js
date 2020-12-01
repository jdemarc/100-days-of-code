/**
 * parseInt
 */

// Parse a string into an integer using parseInt();
// parseInt(string, radix);

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

// The second argument, radix, specifies the base of a number between 2 and 36. By default, base 10.

// Parse a binary string by specifying base 2.

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

