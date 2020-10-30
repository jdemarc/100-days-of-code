/**
 * Export functions
 */

// When you want to use functions in several different files, you can export them as follows...

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

// Named exports
export { uppercaseString, lowercaseString };

// Default exports

export default function subtract(x, y) {
  return x - y;
}