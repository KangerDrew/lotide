

const assertArraysEqual = function(ar1, ar2) {
  let st;
  if (ar1.length === ar2.length) {
    for (let i = 0; i < ar1.length; i ++) {
      if (ar1[i] !== ar2[i]) {
        st = false;
        break;
      }
    }
    if (st === undefined) {
      st = true;
    }
  } else {
    st = false;
  }
  console.log (st);

  if (st === true) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${ar1} !== ${ar2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [4, 5, 6]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);