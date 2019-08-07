const sumAll = function(min, max) {
  // to ensure function only works with positive numbers
  if (typeof min != 'number' || typeof max != 'number' ||
    min < 0 || max < 0) {
    return 'ERROR';
  }

  // to ensure min is less than or equal to max
  if (min > max) {
    let temp = max;
    max = min;
    min = temp;
  }

  let result = 0;
  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  for (const value of numbers) {
    result += value;
  }

  return result;
}

module.exports = sumAll
