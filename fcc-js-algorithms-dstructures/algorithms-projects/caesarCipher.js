/**
 * Decode a ROT13 cipher.
 */

function rot13(str) {
  console.log(str.charCodeAt(0) - 13);
  console.log(String.fromCharCode(70));

  let decoded = '';
  let regex = /[A-Z]/g;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' || 
        str[i] === '.' ||
        str[i] === '!' ||
        str[i] === '?' ) {
      decoded += str[i];
    } else {
      decoded += String.fromCharCode((str.charCodeAt(i) % 26) + 65)
    }
  }

  return decoded;
}

console.log(rot13("SERR PBQR PNZC"));