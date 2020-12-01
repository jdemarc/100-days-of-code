/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  let words = str.split(' ');
  let longestLength = words[0].length

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestLength) {
      longestLength = words[i].length
    }
  }

  return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/*
Using map();

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

*/
