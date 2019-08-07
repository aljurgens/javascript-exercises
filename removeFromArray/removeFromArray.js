const removeFromArray = function(arr, a, b, c, d, e, f, g) {
  let params = [a, b, c, d, e, f, g];

  for (const value of params) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] == value) {
        arr.splice(i, 1);
      }
    }
  }

  return arr;
}

module.exports = removeFromArray
