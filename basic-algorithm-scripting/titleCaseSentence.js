/*

Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/

function titleCase(str) {
  // Lowercase all characters.
  let res = str.toLowerCase();

  // Split string into an array of words.
  let words = res.split(' ');

  // For each word, capitalize the first letter and then add the remainder of the word to the word.
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words back into one string.
  return words.join(' ');
}

titleCase("I'm a little tea pot");