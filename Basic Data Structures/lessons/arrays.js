/**
 * Arrays
 */

// store of a collection of data

let myArr = [1, 2, 'three', true];
console.log(myArr);

// each array has an index, beginning with 0.

let myVar = myArr[1]; // assigns 2

myArr[3] = 32242;
console.log(myArr);

// add items to an array using push() and unshift()

// push adds to the end, unshift adds to the front.

function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// remove items from an array using pop() and shift()

// pop removes the last item, shift removes the first item

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// splice allows us to remove any number of consecutive items from an array

// splice's first parameter determines the starting point, and the second parameter determines how many elements to remove.

// splice modifies the array it is being called on and returns a new array.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
// removes [4, 5, 1, 7]
console.log(arr);

// the third parameter is what you want to add back to the array

function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  // removes the first two items and adds 'DarkSalmon' and 'BlanchedAlmond'
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// slice() makes a copy of selected elements.
// the first parameter determines the beginning point and the second parameter represents the element it will select UP TO.

function forecast(arr) {
  return arr.slice(2, 4);
  // returns ['warm', 'sunny']
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Copying arrays with the spread operator.

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// combine arrays with the spread operator

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());

// Check for an element using indexOf();

function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Looping through arrays using for loops.
// filtering with indexOf();

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// Creating multi-dimensional arrays

let myNestedArray = [
  "first",
  ["second",
    ["deep", 
      ["deeper", 
        ["deepest"]
      ]
    ]
  ]
];

