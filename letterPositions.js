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

const letterPositions = function(sentence) {
  
  const position = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (position[sentence[i]]) {
      position[sentence[i]].push(i);
    } else {
      position[sentence[i]] = [i];
    }
  }
  delete position[' '];
  return position;
};

const testSentence = 'lighthouse in the house';
assertArraysEqual(letterPositions(testSentence)['s'], [8, 21]);
assertArraysEqual(letterPositions(testSentence)['g'], [2]);
assertArraysEqual(letterPositions(testSentence)['h'], [3, 5, 15, 18]);
assertArraysEqual(letterPositions(testSentence)['u'], [7, 20]);