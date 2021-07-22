const eqArrays = function(ar1, ar2) {
  if (ar1.length === ar2.length) {
    for (let i = 0; i < ar1.length; i ++) {
      if (ar1[i] !== ar2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(ar1, ar2) {
  let st = eqArrays(ar1,ar2);
  if (st === true) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${ar1} !== ${ar2}`);
  }
};

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
// console.log(results1);

const movieNames = ['Loki', 'Wandavision', 'Falcon and the Winter Soldier'];
const test1 = map(movieNames, word => word.slice(0,4));

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(test1, ['Loki', 'Wand', 'Falc']);
