function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var newArr = [];

  // substract item in array with next item to find the difference
  // using Math.abs so the result will always positive number
  // then push to newArr
  for (var i = 0; i < arr.length - 1; i++) {
    newArr.push(Math.abs(arr[i] - arr[i + 1]));
  }

  // compare every item in newArr with the first item
  // the result will return a boolean
  return newArr.every(function(num, index, array) {
    return num === array[0];
  });
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
