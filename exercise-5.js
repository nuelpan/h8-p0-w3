function palindrome(kata) {
  // easier way to check palindrome
  // compare kata with reversed kata
  // if kata is palindrome, function will return true
  // return kata === kata.split("").reverse().join("");

  // checking palindrome without reverse method
  // only half kata.length is needed for looping so the loop won't overlap
  for (var i = 0; i < kata.length / 2; i++) {
    if (kata[i] !== kata[kata.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
