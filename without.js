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

const without = function(array, remove) {
  let newArr = [];
  let toRem = false;

  for (let stuff of array) {
    for (let rm of remove) {
      if (stuff === rm) {
        toRem = true;
      }
    }
    if (toRem === false) {
      newArr.push(stuff);
    }
    toRem = false;
  }

  return newArr;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
