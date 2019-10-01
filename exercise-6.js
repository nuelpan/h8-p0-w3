function angkaPalindrome(num) {
  // you can only write your code here!
  if (num < 9) {
    return num + 1;
  } else if (num >= 10) {
    // num need to be a string, so it can use String methods

    // easier way to check palindrome, comparing num with reversed num
    // while ( num.toString() !== num.toString().split("").reverse().join("") ) {
    //   num += 1;
    // }
    // return num;

    for (var i = 0; i < num.toString().length / 2; i++) {
      while (
        num.toString()[i] !== num.toString()[num.toString().length - (i + 1)]
      ) {
        num += 1;
      }
      return num;
    }
  } else if ((num = 9)) {
    // while ( num.toString() !== num.toString().split("").reverse().join("") ) {
    //   num += 1;
    // }
    // return num;

    num += 1;
    for (var i = 0; i < num.toString().length / 2; i++) {
      while (
        num.toString()[i] !== num.toString()[num.toString().length - (i + 1)]
      ) {
        num += 1;
      }
      return num;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
