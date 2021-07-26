const assertEqual = require('./assertEqual');

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


module.exports = eqArrays;