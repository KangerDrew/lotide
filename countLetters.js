const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const letters = {};

  for (const l of string) {
    if (letters[l]) {
      letters[l] += 1;
    } else {
      letters[l] = 1;
    }
  }

  return letters;
};

assertEqual(countLetters("touch")['t'], 1);
assertEqual(countLetters("loseyourselftodance")['o'], 3);
assertEqual(countLetters("instantcrush")['s'], 2);
