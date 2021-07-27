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


module.exports = countLetters;