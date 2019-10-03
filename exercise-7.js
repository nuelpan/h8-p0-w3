function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  // return kalimat.split(" ").length;

  // trim unnecessary space in front or back sentence
  // not used because test cases have no extra spaces in front or back sentences
  kalimat = kalimat.trim();

  var jumlahKata = 1;
  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === " ") {
      jumlahKata += 1;
    }
  }
  return jumlahKata;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
