const reverseString = function(str) {
  let arr = str.split('');
  let rev = arr.reverse();

  return rev.join('');
}

module.exports = reverseString
