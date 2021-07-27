// const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = without;

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

// const words = ["hello", "world", "lighthouse"];
// assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"])
