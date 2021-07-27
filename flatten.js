const flatten = function(array) {
  let newAr = [];
  for (let stuff of array) {
    if (Array.isArray(stuff)) {
      for (let el of stuff) {
        newAr.push(el);
      }
    } else {
      newAr.push(stuff);
    }
  }
  return newAr;
};

// console.log(flatten([1, 2, [3, 4], 5, [6]]));
module.exports = flatten;