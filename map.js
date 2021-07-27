// const assertArraysEqual = require('./assertArraysEqual');

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// // console.log(results1);

// const movieNames = ['Loki', 'Wandavision', 'Falcon and the Winter Soldier'];
// const test1 = map(movieNames, word => word.slice(0,4));

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(test1, ['Loki', 'Wand', 'Falc']);
