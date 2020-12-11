/**
 * Missing Letters
 */

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
  // Loop over the string
  for (let i = 0; i < str.length; i++) {

    // If there is a differencce between one letter and the next that is greater than 1,
    // a letter is missing in the sequence.
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {

      // Return that letter.
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

console.log(fearNotLetter("abce"));