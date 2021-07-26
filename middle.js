const middle = function(array) {
  let newArr = [];
  const leng = array.length;
  if (leng === 1 || leng === 2) {
    return [];
  }
  if (leng % 2 === 0) {
    newArr.push(array[leng / 2 - 1]);
    newArr.push(array[leng / 2]);
  } else {
    newArr.push(array[(leng - 1) / 2]);
  }
  return newArr;
};

module.exports = middle;