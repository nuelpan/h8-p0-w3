function tentukanDeretGeometri(arr) {
  // you can only write your code here!

  // divide next item with current item to find the difference
  // then push to newArr to compared later
  var newArr = [];
  for (var i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i + 1] / arr[i]);
  }

  // compare every item in newArr with the first item
  // the result will return a boolean
  return newArr.every(function(num, index, array) {
    return num === array[0];
  });
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
