// const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, inputKeyval) {
  let keyList = Object.keys(obj);
  for (const aKey of keyList) {
    if (obj[aKey] === inputKeyval) {
      return aKey;
    }
  }
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

