/**
 * Implement filter on a Prototype
 */

/**
 * Write your own Array.prototype.myFilter(),
 * which should behave exactly like Array.prototype.filter().
 * You should not use the built-in filter method.
 * The Array instance can be accessed in the myFilter method using this.
 */

var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  
  this.forEach(el => {
    if (callback(el)) {
      newArray.push(el);
    }
  })

  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);