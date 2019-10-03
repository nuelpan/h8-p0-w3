function perkalianUnik(arr) {
  // you can only write your code here!
  var newArr = [];

  // with built in function
  // for (var i = 0; i < arr.length; i++) {
  //   var hasil = arr
  //     .filter(function(num, index) {
  //       return index !== i;
  //     })
  //     .reduce(function(accumulator, currentValue) {
  //       return accumulator * currentValue;
  //     });
  //   newArr.push(hasil);
  // }
  // return newArr;

  // without built in function
  for (var i = 0; i < arr.length; i++) {
    hasil = 1;
    for (var j = 0; j < arr.length; j++) {
      if (j !== i) {
        hasil *= arr[j];
      }
    }
    newArr.push(hasil);
  }
  return newArr;
}
var newArr = [];
// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
