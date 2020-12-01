/**
 * Loops
 */

// While loop
// Runs while a specified condition is true. Stops when no longer true.

var myArray = [];

var i = 5; 

while (i >= 0) {
    myArray.push(i)
    i--;
}

// for loop
// for ([initialization]; [condition]; [final-expression])

// Push odd values into an array using a for loop.
var anotherArray = [];

for (let i = 1; i < 10; i += 2) {
    anotherArray.push(i);
}

// Summing an array with a for loop.
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;

for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

// Multiplying elements of a subarray.

// 1 * 2 * 3 * 4 * 5 * 6 * 7 = 5040
function multiplyAll(arr) {
    var product = 1;
    for (let i = 0; i < arr.length; i++) {
        // length = 3;
        // iteration 1: arr[0] = [1, 2]
        // iteration 2: arr[1] = [3, 4]
        // iteration 3: arr[2] = [5, 6, 7]
      for (let j = 0; j < arr[i].length; j++) {
        console.log('arr[i][j]= ', arr[i][j])
        // length = 2;
        // iteration 1: arr[i][j] = 1; 1 * 1 = 1
        // iteration 2: arr[i][j] = 2; 1 * 2 = 2;
        // return to outer loop

        // length = 2;
        // iteration 3: arr[i][j] = 3; 2 * 3 = 6;
        // iteration 4: arr[i][j] = 4; 6 * 4 = 24;
        // return to outer loop

        // length = 3;
        // iteration 5: arr[i][j] = 5; 24 * 5 = 120;
        // iteration 6: arr[i][j] = 6; 120 * 6 = 720;
        // iteration 7: arr[i][j] = 7; 720 * 7 = 5040;
        product *= arr[i][j];
      }
    }

    console.log(product);
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);

// Do while loop.
// Do one pass of the code inside the loop regardless; then continue to run the loop while the condition is true.

var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
}
while (i < 5);

// Only pushes the number 10 into the array. i is then incremented to 11, so the while loop does not execute.

