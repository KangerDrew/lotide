// const assertEqual = require('./assertEqual');


const findKey = (object, callback) => {
  
  for (const stuff in object) {
    if (callback(object[stuff])) return stuff;
  }
};

module.exports = findKey;

// const someObj = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

// assertEqual(findKey(someObj, x => x.stars === 2), 'noma');
// assertEqual(findKey(someObj, x => x.stars === 3), 'Akaleri');
// assertEqual(findKey(someObj, x => x.stars === 1), 'Blue Hill');
