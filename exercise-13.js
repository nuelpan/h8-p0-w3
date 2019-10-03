function targetTerdekat(arr) {
  // you can only write your code here!
  var indexO = 0;
  var indexX = [];
  var hasil = [];

  for (var i = 0; i < arr.length; i++) {
    // cari index o nya dan kumpulkan index x nya didalam indexX array
    if (arr[i] === "o") {
      indexO = i;
    } else if (arr[i] === "x") {
      indexX.push(i);
    }
  }

  for (i = 0; i < indexX.length; i++) {
    hasil.push(Math.abs(indexX[i] - indexO));
  }
  hasil.sort(function(a, b) {
    return a - b;
  });

  if (hasil[0] === undefined) {
    return 0;
  } else {
    return hasil[0];
  }

  // hitung selisih indexO dengan setiap item di dalam array indexX
  // dan sort secara ascending, otomatis selisih yang paling kecil akan
  // muncul di index[0], kalau index[0] undefined berarti x tidak ditemukan
  // var hasil = indexX
  //   .map(function(item) {
  //     return Math.abs(item - indexO);
  //   })
  //   .sort(function(a, b) {
  //     return a - b;
  //   });
  // if (hasil[0] === undefined) {
  //   return 0;
  // } else {
  //   return hasil[0];
  // }
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
