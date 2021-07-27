// const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keyVal1 = Object.keys(object1);
  const keyVal2 = Object.keys(object2);

  if (keyVal1.length !== keyVal2.length) {
    return false;
  }
  

  for (const aKey of keyVal1) {
    if (Array.isArray(object1[aKey]) && !eqArrays(object1[aKey], object2[aKey])) {
      return false;
    }
    if (!(Array.isArray(object1[aKey])) && (object1[aKey] !== object2[aKey])) {
      return false;
    }

  }

  return true;
};

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const ef = { e: "1", f: ["2", 3] };
// const fe = { f: ["2", 3, "eyy"], e: "1" };
// assertEqual(eqObjects(ef, fe), false); // => false



