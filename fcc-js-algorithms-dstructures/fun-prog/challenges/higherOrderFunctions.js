/**
 * Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
 */

/**
 * We have defined a function named squareList.
 * You need to complete the code for the squareList function using any combination of map(), filter(), and reduce()
 * so that it returns a new array containing only the square of
 * only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.
 * An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].
 */

// const squareList = arr => {
//   return arr.filter((el) => el > 0 && Number.isInteger(el)).map((el => el**2));
// };

const squareList = (arr) => {
  return arr.reduce((acc, num) => {
    if (num > 0 && Number.isInteger(num)) {
      return acc.concat(num**2)
    } else {
      return acc;
    }
  }, [])
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
