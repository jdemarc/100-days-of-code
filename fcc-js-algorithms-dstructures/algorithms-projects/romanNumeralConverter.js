/**
 * Convert numbers to Roman Numerals.
 * 
 */

function convertToRoman(num) {
  const symbols = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }

  console.log(symbols[1]);
  
  return num;
}

console.log(convertToRoman(36));