function palindrome(kata) {
  // you can only write your code here!
  for (var i = 0; i < kata.length; i++) {
    // console.log(kata[i], kata[kata.length-(i+1)])
    return kata[i] === kata[kata.length - (i + 1)];
  }
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
