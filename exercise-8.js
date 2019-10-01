function pasanganTerbesar(num) {
  // you can only write your code here!

  // split num into array, and declare empty array for the result
  var newArray = num.toString().split("");
  var result = [];
  // in case the number only one digit, and can't get a couple
  if (num < 10) {
    result.push(num);
  }

  // make two digits number using loop, then push to empty array
  for (i = 0; i < newArray.length - 1; i++) {
    result.push(num.toString()[i] + num.toString()[i + 1]);
  }

  // sort the result with descending direction and get the first index
  // which is the largest number
  result.sort(function(a, b) {
    return Number(b) - Number(a);
  });
  return result[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
