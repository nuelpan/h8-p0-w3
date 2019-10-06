function groupAnimals(animals) {
  // you can only write your code here!
  var hasil = [];

  animals.sort();
  // push animals[0] to hasil because it will not be checked latter
  hasil.push([animals[0]]);

  // push next animals with different first letter to hasil
  // so the last one can be pushed too if its different
  for (var i = 0; i < animals.length - 1; i++) {
    if (animals[i][0] !== animals[i + 1][0]) {
      hasil.push([animals[i + 1]]);
    } else {
      continue;
    }
  }

  // check every items in animals which not duplicate with current hasil
  // and has the same first letter and push it to current mulitdimensional hasil
  for (var i = 0; i < hasil.length; i++) {
    for (var j = 0; j < animals.length; j++) {
      if (hasil[i][0] !== animals[j] && hasil[i][0][0] === animals[j][0]) {
        hasil[i].push(animals[j]);
        break;
      }
    }
  }
  return hasil;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
