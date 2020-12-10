/**
 * Pig Latin
 */

function translatePigLatin(str) {

  // Check if the string begins with a vowel.
  let re = /^[aeiou]/;

  // If the string does begin with a vowel,
  if (str.match(re)) {

    // return the string + 'way'
    return str + 'way';

  // Otherwise...
  } else {
    let consonantGroup = '';

    // Loop through the string. Add consonants to a string variable.
    for (let i = 0; i < str.length; i++) {
      if (!str[i].match(re)) {
        consonantGroup += str[i];

      // Break when a vowel is found.
      } else {
        break;
      }
    }

    // Return the word from where the group was broken off, plus the remainder of the word, plus 'ay'.
    return str.slice(consonantGroup.length) + consonantGroup + 'ay';
  }

}

translatePigLatin("consonant");

/**
 * Alternate / better solutions
 */

// function translatePigLatin(str) {
//   return str
//     .replace(/^[aeiou]\w*/, "$&way")
//     .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
// }

