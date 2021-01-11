/**
 * Decode a ROT13 cipher.
 */

function rot13(str) {
  let regex = /[A-Z]/g;

  return str.replace(regex, e =>
    String.fromCharCode((e.charCodeAt(0) % 26) + 65)
  );

}

console.log(rot13("SERR PBQR PNZC"));