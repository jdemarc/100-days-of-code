/**
 * Arrays
 */

 var pizzaToppings = ["cheese", "ham", "sausage"];

 // Nested array, AKA a multi-dimensional array
 var numArray = [[1, 2], [3, 4]];

 // Arrays are indexed similar to strings, but instead of a character they reference the entry.
 var array = [50, 60, 70];
 array[0]; // equals 50
 var data = array[1] // assigns 60

 // Arrays ARE mutable.
 array[0] = 45; // modifies the data stored at index 0 to become 45.
 // array now contains [45, 60, 70]

 // Accessing multi-dimensional arrays
 var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
 ];
 
 arr[3]; // equals [[10,11,12], 13, 14]
 arr[3][0]; // equals [10,11,12]
 arr[3][0][1]; // equals 11

 // Append data to an array using .push().

 var arr1 = [1, 2, 3];
 arr1.push(4);
 // arr1 now contains [1, 2, 3, 4];

 var arr2 = ["Stimpson", "J", "cat"];
 arr2.push(["happy", "joy"]);
 // arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

 // Remove last element using .pop();

 var threeArr = [1, 4, 6];
 var oneDown = threeArr.pop();

 console.log(oneDown); // returns 6
 console.log(threeArr); // returns [1, 4]

 // Remove the first element using .shift();

 var ourArray = ["Stimpson", "J", ["cat"]];
 var removedFromOurArray = ourArray.shift();
 // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

 // Add an element to the front of an array using .unshift();

 ourArray.unshift("Happy");
 // ourArray now equals ["Happy". "J", ["cat"]];

 // Shopping List
 var myList = [["Milk", 2], ["Cereal", 4], ["Potatoes", 7], ["Bananas", 9], ["Spoons", 3]];
