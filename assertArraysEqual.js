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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [4, 5, 6]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);