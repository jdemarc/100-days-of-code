/**
 * Apply Functional Programming to Convert Strings to URL Slugs
 */

/**
 * Prompt:
 * Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:
 * The input is a string with spaces and title-cased words
 * The output is a string with the spaces between words replaced by a hyphen (-)
 * The output should be all lower-cased letters
 * The output should not have any spaces
 */


// Make all characters lowercase. Split them by any spaces.
// Fitler our any extra spaces and join string back using hyphens.

function urlSlug(title) {
  return title
    .toLowerCase()
    .split(' ')
    .filter((s) => s !== '')
    .join('-');
}

/*
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    // Split at any whitespace character that appears at least once.
    .split(/\s+/)
    .join('-');
}
*/

console.log(urlSlug(' Winter Is Coming'));