/**
 * 
 * Integer d is a divisor of interger n is n / d = 0
 * 
 * Given an integer, for each digit that makes up the integer determine whether it is a divisor.
 * Count the number of divisors occurring within the integer. 
 * 
 */

function findDigits(n) {
  let num = n.toString();
  let numArr = num.split('');

  let divisors = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (n % parseInt(numArr[i]) === 0) {
      divisors++;
    }
  }

  return divisors;
}

console.log(findDigits(1012));