/*

Write a function that splits an array (first argument) into groups the length of size (second argument)
and returns them as a two-dimensional array.

*/
function chunkArrayInGroups(arr, size) {
  let outer = [];

  for (let i = 0; i < arr.length; i += size) {
    outer.push(arr.slice(i, i + size));
  }
  return outer;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);