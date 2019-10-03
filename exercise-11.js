function tentukanDeretAritmatika(arr) {
  // you can only write your code here!

  var newArr = [];
  var hasil = true;

  for (var i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i] - arr[i + 1]);
  }

  for (var i = 1; i < newArr.length; i++) {
    // console.log(newArr[0])
    var diff = newArr[0];
    if (diff !== newArr[i]) {
      hasil = false;
      return hasil;
    } else {
      hasil = true;
    }
  }
  return hasil;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
