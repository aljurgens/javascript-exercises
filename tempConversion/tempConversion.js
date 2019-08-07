const ftoc = function(num) {
  let celsius = (num - 32) * 5/9
  return Math.round(celsius * 10) / 10;
}

const ctof = function(num) {
  let fahrenheit = (num * 9/5) + 32;
  return Math.round(fahrenheit * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
