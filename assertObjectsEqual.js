const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;
  const st = eqObjects(actual,expected);
  if (st === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba)

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const ef = { e: "1", f: ["2", 3] };
const fe = { f: ["2", 3, "eyy"], e: "1" };
assertObjectsEqual(ef, fe)
