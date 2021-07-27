// const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = letterPositions;

// const testSentence = 'lighthouse in the house';
// assertArraysEqual(letterPositions(testSentence)['s'], [8, 21]);
// assertArraysEqual(letterPositions(testSentence)['g'], [2]);
// assertArraysEqual(letterPositions(testSentence)['h'], [3, 5, 15, 18]);
// assertArraysEqual(letterPositions(testSentence)['u'], [7, 20]);